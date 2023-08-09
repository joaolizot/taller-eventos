let div = document.getElementById('div1');

div.addEventListener('click', function() {
   
    alert('Hola! Soy el div');

});


function mostrarAlerta(evento){
    evento.stopPropagation();
    alert('hola');
    };