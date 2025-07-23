let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let contadorIntentos = 0;

document.getElementById('boton-intentar').onclick = function() {
    const adivinanza = document.getElementById('adivinanza').value;
    contadorIntentos++;

    if (adivinanza === '') {
        alert('Por favor, ingresa un número.');
    } else if (adivinanza < numeroSecreto) {
        document.getElementById('mensaje').innerText = 'El número secreto es mayor.';
    } else if (adivinanza > numeroSecreto) {
        document.getElementById('mensaje').innerText = 'El número secreto es menor.';
    } else {
        document.getElementById('mensaje').innerText = `¡Felicidades! Adivinaste el número en ${contadorIntentos} intento(s).`;
        document.getElementById('intentos').innerText = `Total de intentos: ${contadorIntentos}`;
        document.getElementById('boton-nuevo-juego').style.display = 'block';
    }
    document.getElementById('adivinanza').value = '';
};

document.getElementById('boton-nuevo-juego').onclick = function() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    contadorIntentos = 0;
    document.getElementById('mensaje').innerText = '';
    document.getElementById('intentos').innerText = '';
    this.style.display = 'none';
};
