
 const fs = require('fs');
 const qrcode = require('qrcode-terminal');
 const { Client } = require('whatsapp-web.js');
 const SESSION_FILE_PATH = './session.json';
 let client;
 let sessionData;
 
 const listenMessage = () => {
     client.on('message', async msg => {
         const {from} = msg;        
         const chat = await msg.getChat();
            client.sendMessage(from, 'Hola!! Soy Digital-Bot estoy para ayudarte, dime ¿en que te puedo apoyar?'
            + ' \n 1: Nuestros Paquetes' + '\n 2: Pago de servicios ' + '\n 3: Falla del servicio ' + '\n 5: Horario de atencion ' + '\n *Selecciona le numero de tu interes*');
            
     });
 }

 /**
  * Revisamos si tenemos credenciales guardadas para inciar sessio
  * este paso evita volver a escanear el QRCODE
  */
 const withSession = () => {
     // Si exsite cargamos el archivo con las credenciales
     sessionData = require(SESSION_FILE_PATH);
     client = new Client({
         session: sessionData
     });
 
     client.on('ready', () => {
         console.log('Client is ready!');
 
         connectionReady();
     });
     client.on('auth_failure', () => {
         console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
     })
     client.initialize();
 }
 /**
  * Generamos un QRCODE para iniciar sesion
  */
 const withOutSession = () => {
     console.log('No tenemos session guardada');
     client = new Client();
     client.on('qr', qr => {
         qrcode.generate(qr, { small: true });
     });
     client.on('ready', () => {
         console.log('Client is ready!');
         connectionReady();
     });
     client.on('auth_failure', () => {
         console.log('** Error de autentificacion vuelve a generar el QRCODE **');
     })
     client.on('authenticated', (session) => {
         // Guardamos credenciales de de session para usar luego
         sessionData = session;
         fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
             if (err) {
                 console.log(err);
             }
         });
     });
     client.initialize();
}
 const connectionReady = () => {
     listenMessage(); 
}
 (fs.existsSync(SESSION_FILE_PATH)) ? withSession() : withOutSession();
 
