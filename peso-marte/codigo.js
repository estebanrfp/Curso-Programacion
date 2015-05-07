var peso;
var pesoEnMarte;

alert("quieres saber cual es tu peso en Marte?");
peso = prompt ("escribe tu peso");//prompt siempre trae cadena de texto
peso = parseInt(peso);//convierte a número

pesoEnMarte = (peso / 9.81) * 3.711;

alert ("Tu peso en Marte es: " + "\n" + pesoEnMarte + " kg.")
// alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg.");


