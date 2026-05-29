const btnSaludar = document.getElementById('btn-saludar');
let mensajeMostrado = false;

btnSaludar.addEventListener('click', function(){
    console.log('click');
    if(!mensajeMostrado){
        const seccionContacto= document.getElementById('contacto');
    const mensaje = document.createElement('p');
    mensaje.textContent = 'Gracias por tu visita';
    mensaje.style.color = '#2c3e50';
    mensaje.style.fontWeight = 'bold';

    seccionContacto.appendChild(mensaje);
    mensajeMostrado = true;
    btnSaludar.textContent = 'mensaje enviado';
    btnSaludar.disabled = true;
    btnSaludar.style.backgroundColor = 'grey';
    }
    
})