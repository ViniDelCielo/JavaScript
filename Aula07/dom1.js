
let elemento01 = window.document.getElementById('tituloPrin');

elemento01.style.color = 'red';
elemento01.innerHTML = 'Vinícius';

let elemento02 = window.document.getElementsByClassName('elementoParagrafo');
elemento02[0].style.color = 'blue';

for (let contador = 0; contador < elemento02.length; contador++) {
    // elemento02[contador].style.color = 'blue'
    elemento02[contador].innerHTML = 'Qualquer Coisa'
}