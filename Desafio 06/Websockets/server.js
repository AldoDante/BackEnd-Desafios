
const express = require('express');     
const {Server: HttpServer} = require('http');   
const {Server: IOServer} = require('socket.io');    


/* Creating a new instance of the HttpServer class and passing the express app to it. Then it is
creating a new instance of the IOServer class and passing the httpServer to it. */

const app = express();  
const httpServer = new HttpServer(app);     
const io = new IOServer(httpServer);    

//midleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



const messages = [
    { author: 'Pablo', text: 'Hola, que tal' },
    { author: 'Marcelo', text: 'muy bien y tu?' },
    { author: 'Belen', text: 'Hola!!' }
]
const Products = [
    { title: 'agua', price: 20, thumbnail: 'https://dummyimage.com/250/000/fff'}
]

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

    // historial de productos cuando un cliente se conecta

    socket.emit('product', Products);

    // escuchamos nuevos productos

    socket.on('new-product', data => {
        Products.push(data);

        // enviamos a todos los clientes el nuevo producto
        
        io.sockets.emit('product', Products);
    })

})

//inicio del servidor

const PORT = 8080;

httpServer.listen(PORT, () =>{
    console.log(`server run on PORT: ${PORT}`);
})