let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let contadorIntentos = 0;

document.getElementById('boton-intentar').onclick = function() {
    const adivinanza = parseInt(document.getElementById('adivinanza').value);
    contadorIntentos++;

    if (isNaN(adivinanza) || document.getElementById('adivinanza').value.trim() === '') {
        alert('Por favor, ingresa un número válido.');
        document.getElementById('adivinanza').value = '';
        contadorIntentos--;
        return;
    }

    if (adivinanza < 1 || adivinanza > 10) {
        alert('El número debe estar entre 1 y 10.');
        document.getElementById('adivinanza').value = '';
        contadorIntentos--;
        return;
    }

    if (adivinanza < numeroSecreto) {
        document.getElementById('mensaje').innerText = 'El número secreto es mayor.';
    } else if (adivinanza > numeroSecreto) {
        document.getElementById('mensaje').innerText = 'El número secreto es menor.';
    } else {
        document.getElementById('mensaje').innerText = `¡Felicidades! Adivinaste el número en ${contadorIntentos} intento(s).`;
        document.getElementById('intentos').innerText = `Total de intentos: ${contadorIntentos}`;
        document.getElementById('boton-nuevo-juego').style.display = 'block';
        document.getElementById('boton-intentar').disabled = true;
        document.getElementById('adivinanza').disabled = true;
    }
    document.getElementById('adivinanza').value = '';
};

document.getElementById('boton-nuevo-juego').onclick = function() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    contadorIntentos = 0;
    document.getElementById('mensaje').innerText = '';
    document.getElementById('intentos').innerText = '';
    this.style.display = 'none';
    document.getElementById('boton-intentar').disabled = false;
    document.getElementById('adivinanza').disabled = false;
    document.getElementById('adivinanza').focus();
};
