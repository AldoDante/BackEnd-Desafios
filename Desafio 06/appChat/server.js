const express = require('express');     
const {Server: HttpServer} = require('http');   
const {Server: IOServer} = require('socket.io');    

const app = express();  

const httpServer = new HttpServer(app);     
const io = new IOServer(httpServer);    

app.use(express.static('./public'));    

const PORT = 8080;  // Puerto del servidor

const messages = [
    {   author: 'Pablo', text: 'Hola que tal?'   },
    {   author: 'Marcelo', text: 'Muy bien y vos?'   },
    {   author: 'Belen', text: 'Hola!!'   },
];  // Array de mensajes


// Implementacion/ configuracion de socket

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');
    
    // historial de mensajes cuando un cliente se conecta

    socket.emit('message', messages);

    // escuchamos nuevos mensajes

    socket.on('new-message', data => {
        messages.push(data);

        // enviamos a todos los clientes el nuevo mensaje
        
        io.sockets.emit('message', messages);
    })

})




httpServer.listen(PORT, () =>{
    console.log(`server run on PORT: ${PORT}`);
})
