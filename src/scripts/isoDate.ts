import { chat } from './gemini';
import { DateTime } from 'luxon';

interface Slot {
    year: string;
    month: string;
    day: string;
    dayOfWeek: string;
    time: string;
    weekNumber: string;
}

function iso2text(isoDate: string): Slot | null {
    try {
        const dt = DateTime.fromISO(isoDate, { zone: 'utc' });

        if (!dt.isValid) {
            throw new Error('Invalid ISO date format');
        }

        // Obtaining date components
        const year = dt.toFormat('yyyy');
        const month = dt.toFormat('LLLL'); // Full month name
        const day = dt.toFormat('dd'); // Day of month in two digits
        const dayOfWeek = dt.toFormat('EEEE'); // Full day of week name
        const time = dt.toFormat('HH:mm'); // Time in 'HH:MM' format
        const weekNumber = dt.toFormat('W'); // Week number of the year

        const slot: Slot = {
            year,
            month,
            day,
            dayOfWeek,
            time,
            weekNumber
        };

        return slot;
    } catch (error) {
        console.error('Error converting ISO date:', error);
        return null;
    }
}


/**
 * Convierte un texto con una fecha en formato texto a formato ISO utilizando ChatGPT.
 * @param text Fecha en formato texto.
 * @returns Fecha en formato ISO.
 */
async function text2iso(text: string): Promise<string> {
    const currentDate = new Date();
    const prompt = `La fecha de hoy es: ${currentDate}. 
        Te voy a dar un texto. Necesito que de ese texto extraigas la fecha y la hora y me respondas con esa fecha y horario en formato ISO. 
        Por ejemplo, el texto puede ser "el jueves 30 de mayo a las 12hs". En ese caso, tu respuesta tiene que ser 2024-06-30T12:00:00.000Z. 
        Si el texto no tiene el horario, responde false. 
        Si el texto es "Mañana 20hs", suma un día a la fecha actual y responde con eso.`;

    try {
        const response = await chat(prompt, text);
        const cleanedResponse = response.trim();

        return cleanedResponse;
    } catch (error) {
        throw new Error('Error en la conversión de texto a ISO.');
    }
}

export { text2iso, iso2text };