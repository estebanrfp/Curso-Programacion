// existen 2 tipos de variables, las de asignación
// por valor y las de asignación por referencia

function Pokemon(nomPoke, vidaPoke, ataPoke) 
//creo funcion que retorna a algo para asignar al valor
{
	var estructuraPokemon = 
	{
		// nombre: "Pikachu",
		// tipo: "eléctrico",
		// vida: 100,
		// ataque: 55

		nombre: nomPoke,
		vida: vidaPoke,
		ataque: ataPoke,
		datos: {tipo: "Tierra", debilidad: "Fuego"}
	};
	return estructuraPokemon;
}

//var pikachu = Pokemon();
//var bulbasaur = Pokemon();
//**** el retorno se lo asigno a una variable con ()
//bulbasaur.nombre = "Bulbasaur";
//bulbasaur.tipo = "Tierra";
//bulbasaur.vida = 90;
//bulbasaur.ataque = 50;

var pikachu = Pokemon("Pikachu", 100, 55);
var bulbasaur = Pokemon("Bulbasaur", 90, 50);
//construcción del objeto

// document.write (pikachu.datos.debilidad);
console.log(bulbasaur);