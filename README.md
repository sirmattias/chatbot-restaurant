# Restaurant Builder Bot: Chatbot de WhatsApp con Integración a Google Sheets

Este proyecto proporciona la base para un chatbot de WhatsApp escrito en TypeScript, diseñado específicamente para gestionar reservas de mesas en un restaurante. Utiliza la librería `@builderbot/bot` para la integración con WhatsApp y vincula Google Sheets para gestionar las reservas.

## Requisitos

- Node.js (versión 18 o superior)
- npm (gestor de paquetes de Node.js)

## Instrucciones de Configuración

1. **Instalar dependencias**: Ejecuta el siguiente comando para instalar las dependencias necesarias.

    ```bash
    npm install
    ```

2. **Configurar variables de entorno**: Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de Gemini. Aquí tienes un ejemplo de cómo debería lucir tu archivo `.env`:

    ```env
    GEMINI_API_KEY=tu_clave_de_api_de_gemini
    ```

3. **Agregar credenciales de Google**: Descarga el archivo de credenciales de una cuenta de servicio de Google y nómbralo `google.json`. Coloca este archivo en la raíz del proyecto.

4. **Iniciar el servidor de desarrollo**: Ejecuta el siguiente comando para iniciar el servidor de desarrollo.

    ```bash
    npm run dev
    ```

5. **Iniciar sesión en WhatsApp**: Escanea el código QR que aparece en la consola para vincular tu cuenta de WhatsApp.

## Contacto

Para cualquier consulta o soporte, puedes contactarnos a través de los siguientes medios:

- **Correo electrónico**: [ai.paths23@gmail.com](mailto:ai.paths23@gmail.com)
- **YouTube**: [Canal de YouTube](https://www.youtube.com/channel/UCkk1guGQ6C6I4_XJ2Pa3SiA)
- **Discord**: gonzasab2024
- **X (antes Twitter)**: [@Ai_paths23](https://twitter.com/Ai_paths23)

## Recursos Adicionales

- 📕 Curso completo: [Chatbot de WhatsApp](https://aipaths.teachable.com/p/chatbot-whatsapp)
- **Código de descuento**: Usa el código `AIP10` para obtener un 10% de descuento en el curso.

¡Gracias por utilizar Restaurant Builder Bot! Esperamos que este proyecto te sea de gran ayuda para gestionar las reservas de tu restaurante mediante un chatbot de WhatsApp.
