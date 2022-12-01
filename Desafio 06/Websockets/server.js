
const express = require('express');     
const {Server: HttpServer} = require('http');   
const {Server: IOServer} = require('socket.io');    
const ProductControler = require('./controllers/ProductControler');

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
    { author: 'Pablo@msn.com', text: 'Hola, que tal' },
    { author: 'Marcelo@gmail.com', text: 'muy bien y tu?' },
    { author: 'Belen@hotmail.com', text: 'Hola!!' }
]
const Products = [
    { title: 'Monitor', price: 30000, thumbnail: 'https://cdn0.iconfinder.com/data/icons/devices-42/512/Normal_LCD-512.png'}
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