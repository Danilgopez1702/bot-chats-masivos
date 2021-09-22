const fs = require('fs');
const express = require('express');
const qrcode = require('qrcode-terminal');
var sleep = require('system-sleep');
const { Client } = require('whatsapp-web.js');
const random = require('random')
const mysql = require('mysql');
const app = express();
app.use(express.urlencoded({ extended: true }))
const SESSION_FILE_PATH = './session4.json';
let client;
let sessionData;

const withSession = () => {

    sessionData = require(SESSION_FILE_PATH);
    client = new Client({
        session: sessionData
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        inicio();
    });



    client.on('auth_failure', () => {
        console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    })


    client.initialize();

    
}


const withOutSession = () => {
    console.log('No tenemos session guardada');
    client = new Client();
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        inicio();
        
    });

    client.on('auth_failure', () => {
        console.log('** Error de autentificacion vuelve a generar el QRCODE **');
    })


    client.on('authenticated', (session) => {
        sessionData = session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.log(err);
            }
        });
    });

    client.initialize();
    
}

const inicio = () => {
   console.log('result')  
   var connection= mysql.createConnection({
       host : 'mysql1008.mochahost.com',
       database : 'digital_digitaln_sistema',
       user : 'digital_admin',
       password : 'ZzVACZZKx}mC',
   });
   
   // conectarse a mysql
   connection.connect(function(err) {
       // en caso de error
       if(err){
           console.log(err.code);
           console.log(err.fatal);
       }
   });
   
   // Realizar una consulta
   $query_pago = 'SELECT idClientes, tel1, tel2, precio_mensual FROM morosos1 WHERE bloque = 4';
   
   connection.query($query_pago, function(err, rows, fields) {
       if(err){
           console.log("An error ocurred performing the query.");
           return;
       }
       let b1 = rows.length/8;
       let b3 = b1*3;
       let b4 = b1*4;
       console.log("Consulta ejecutada con éxito:");
       let datos='';
       let carlos = '5214491285888@c.us';
       let esteban = '5214495829123@c.us';
       let cam = '5214494124196@c.us';
       let daniel = '5214493715912@c.us';
       let celina = '5214494173733@c.us';
       client.sendMessage(carlos,'inicia morosos 4');
       client.sendMessage(daniel,'inicia morosos 4');
       client.sendMessage(esteban,'inicia morosos 4');
       client.sendMessage(cam,'inicia morosos 4');
       client.sendMessage(celina,'inicia morosos 4');
       for(let f=0;f<rows.length;f++){
           
            datos=`521`+rows[f].tel1+`@c.us`;
        client.sendMessage(datos,'Estimado suscriptor DIGITALNET su cuenta está vencida realice su pago por $'+(parseInt(rows[f].precio_mensual))+' en OXXO con su código de barras o depósito cuenta Santander 5579089001063125. \n\n*SOY UN BOT* \n\n*No contestar este mensaje, cualquier aclaracion comunicarse a este numero: 4499721609*');
            console.log(f);
            const dormir =random.int((min = 45), (max = 60))
            sleep(dormir*1000);
             
       }
       client.sendMessage(carlos,'finalizo morosos 4');
       client.sendMessage(esteban,'finalizo morosos 4');
       client.sendMessage(cam,'finalizo morosos 4');
       client.sendMessage(daniel,'finalizo morosos 4');
       client.sendMessage(celina,'finalizo morosos 4');
       
   });

   function envio(){

   }

   // Cerrar la conexión
   connection.end(function(){
       // La conexión se ha cerrado
   });
}

(fs.existsSync(SESSION_FILE_PATH)) ? withSession() : withOutSession();


