import { addKeyword, EVENTS } from '@builderbot/bot';


const welcomeFlow = addKeyword(EVENTS.ACTION)
    .addAction(async (ctx, ctxFn) => {
        await ctxFn.endFlow("Bienvenido al Restaurant AIPaths! \nPodes escribir 'Reservar' para reservar una mesa");
    });

export { welcomeFlow };