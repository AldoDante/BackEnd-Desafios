// Establecemos la comunicacion del lado del cliente

const socket = io.connect();

// Armamos la funcion para renderizar los productos

function renderProduct(data) {
    const html = data.map(product => {
        return (`<tr> <td><strong>${product.title}</strong></td> <td><em>$${product.price}</em></td> <td><img src="${product.thumbnail}" alt="foto del producto" class="image"></td> </tr>`)
    }).join(' ')

    document.getElementById('productos').innerHTML = html
}

// Funcion para agregar productos

function addNewProduct () {
    
    //Capturo los datos del html
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const foto = document.getElementById('foto').value

    const newProduct = {
        title: nombre, 
        price: precio, 
        thumbnail: foto
    }

    //Dejamos los Imputs vacios

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('foto').value = '';

    // enviamos estos datos al server
    socket.emit('new-product', newProduct)

    return false
}


// Armamos la funcion render para mostrar los mensajes en el DOM

function render(data) {
    const html = data.map(item => {
        return (`<div> <strong class="author">${item.author}</strong> <span class="fecha">${new Date().toLocaleDateString('es-ES')} ${new Date().toLocaleTimeString()}</span> : <em class="text">${item.text}</em></div>`)
    }).join(' ')

    document.getElementById('message').innerHTML = html
}

// Funcion que se ejecuta cuando hago click en el boton enviar

function addMessage() {
    const authorName = document.getElementById('author').value;
    const textMsn = document.getElementById('text').value;

    const message = {
        author: authorName,
        text: textMsn

    }
    //Dejamos los Imputs de mensaje vacio
    document.getElementById('text').value = '';

    // enviamos la data al server
    socket.emit('new-message', message);
    return false;
}

// Eventos para enviar (emit) y recibir (on) mensajes

    socket.on('message', data => {
        render(data);
    })

    socket.on('product', data => {
        renderProduct(data);
    })