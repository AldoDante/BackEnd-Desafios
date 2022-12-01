// 01_Establecemos la comunicación del lado del Cliente

const socket = io.connect();

// 03_Armamos la funcion render para mostrar los mensajes en el DOM

function render(data) {
    const html = data.map(item => {
        return (`<div> <strong>${item.author}</strong>: <em>${item.text}</em> </div>`);
    }).join(' ');

    document.getElementById('message').innerHTML = html

}

// 4_Funcion que se ejecuta cuando hago click en el boton enviar

function addMessage() {
    const authorName = document.getElementById('author').value;
    const textMsn = document.getElementById('text').value;

    const message = {
        author: authorName,
        text: textMsn

    }

    document.getElementById('text').value = '';

    // enviamos la data al server
    socket.emit('new-message', message);
    return false;

}
// 02_eventos para enviar (emit) y recibir (on) mensajes

    socket.on('message', data => {
        render(data);
    })