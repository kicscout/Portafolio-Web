/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Karla Castelán')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR (almost)')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Estudiante en su sexto semestre de universidad')
    .pauseFor(1000)
    .deleteAll()
    .start();