import { addKeyword, EVENTS } from '@builderbot/bot'
import { text2iso } from '~/scripts/isoDate';
import { dateAvailable, addReservation } from '~/scripts/utils';

const confirmationFlow = addKeyword(EVENTS.ACTION)
    .addAnswer("Perfecto, la fecha solicitada esta disponible. Para confirmar, cual es tu nombre?", { capture: true },
        async (ctx, ctxFn) => {
            const state = ctxFn.state.getMyState();
            const dateState = state.date;
            //console.log("DateState: ", dateState)
            const date = new Date(Date.parse(dateState));
            //console.log("DateFormat: ", date)
            const confirmation = await addReservation(date, ctx.body)
            if (confirmation) {
                await ctxFn.flowDynamic("Mesa reservada con Exito!")
            } else {
                await ctxFn.flowDynamic("Hubo un error reservando la mesa. Intenta de nuevo por favor.")
            }
        }
    )

const reservationFlow = addKeyword(EVENTS.ACTION)
    .addAnswer("Que fecha queres reservar?", { capture: true },
        async (ctx, ctxFn) => {
            const solicitedDate = await text2iso(ctx.body)
            //console.log("Text2Iso devuelve", solicitedDate)
            const date = new Date(solicitedDate);
            //console.log("Date format of Solicited", date)

            const available = await dateAvailable(date);
            //console.log(available)

            if (available) {
                ctxFn.state.update({ "date": solicitedDate })
                return ctxFn.gotoFlow(confirmationFlow)
            } else {
                return ctxFn.fallBack("Horario o Fecha solicitada no disponible. Solicita un slot diferente")
            }
        })

export { reservationFlow, confirmationFlow };
