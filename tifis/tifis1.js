var tablero;
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
}; //JSON

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false

};

var liz = {
	x: 400,
	y: 400,
	lizURL: "liz.png",
	lizOK: false

};


function inicio () {
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	var m = document.getElementById("mover");
	m.addEventListener("click", movimiento);
}
function confirmarFondo () {
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente () {
	tifis.frenteOK = true;
	dibujar();
}
function confirmarLiz () {
	liz.lizOK = true;
	dibujar();
}

function dibujar() {
	if(fondo.imagenOK == true) {
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	if(tifis.frenteOK == true) {
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	}
	if(liz.lizOK) {
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
}

function movimiento() {
	tifis.x += 10;
	dibujar();
}
// un solo dibujo:
// function dibujar()(cambiado por confirmarFondo) {
// 	tablero.drawImage(fondo.imagen, 0, 0);
// }