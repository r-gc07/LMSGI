const input = document.getElementById('numero');
const button = document.getElementById('adivinar');

button.addEventListener('click', adivinar);

function adivinar() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const numeroUsuario = parseInt(input.value);
    let intentos=0;
    intentos++;
    // Validar si no es un número
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        intentos++;
        return;
    }

    if (numeroUsuario === numeroAleatorio) {
        alert("¡Correcto! El número era " + numeroAleatorio + ". Lo adivinaste en " + intentos + " intentos");
    } else if (numeroUsuario < numeroAleatorio) {
        intentos++;
        alert("El número es mayor");
    } else if(numeroUsuario > numeroAleatorio){
        intentos++;
        alert("El número es menor");
    }
}
 


