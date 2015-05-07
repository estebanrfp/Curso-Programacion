function Pokemon(n,v,a)
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

// var pikachu = new Pokemon("Pikachu", 100, 55);
// pikachu.vida = pikachu.vida -13;
// pikachu.gritar();

// pikachu es el objeto


function inicio()
{
	var rattata = new Pokemon("Rattata", 100, 55);
	rattata.vida = rattata.vida -13;
	nomPoke.innerText = rattata.nombre;
	datosPoke.innerText = "La vida de " + rattata.nombre + "\n" +
	 "es: " + rattata.vida + "\n"  +
	 "Y su ataque de " + rattata.ataque ;

}

//******innerText por textContent y funciona en firefox


// rattata.grito = "Paredes!!!";
// rattata.gritar();