function calcular(){
    const inputLado = document.getElementById('inputLado');
    const valorTexto = inputLado.value;
    const lado = parseFloat(valorTexto);
    const elementoResultado = document.getElementById('resultado');

    if (isNaN(lado) || lado <= 0) {
        elementoResultado.textContent = 'El valor debe ser un número positivo mayor a cero y que no sea un caracter';
        elementoResultado.className = 'mensaje-error';
    } else {
        const area = lado * lado;
        elementoResultado.textContent = 'El área del cuadrado es: ' + area + ' unidades cuadradas';
        elementoResultado.className = 'mensaje-correcto';
    }
}