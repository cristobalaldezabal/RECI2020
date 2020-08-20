/* Cristobal Aldezabal division E
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nom;
	let lugar;
	let temp;
	let cant;
	let resp = "s";

	let contbari = 0;
	let contcata = 0;
	let contsalta = 0;
	let lugarmax;

	let flag = 0;
	let maxpasajeros;
	let maxnombre;

	let acuminv = 0;
	let contviaje = 0;
	let promedio;

	do {

		do {
			nom = prompt("ingrese nombre del titular");
		} while (!(isNaN(nom)));

		do {
			lugar = prompt("ingrese lugar de la estadia: bariloche/cataratas/salta");
		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));
		
		switch (lugar) {
				case "bariloche":
					contbari++;
					break;
				case "cataratas":
					contcata++;
					break;
				case "salta":
					contsalta++;
					break;
			}
		

		do {
			cant = parseInt(prompt("ingrese cantidad de personas que viajan"));

			} while (cant <= 0 || (isNaN(cant)))

			if (flag == 0 || maxpasajeros < cant) 
			{
				maxpasajeros = cant;
				maxnombre = nom;
				flag = 1;
			}
			
			do {
			temp = prompt("ingrese temporada: otoño/invierno/primavera/verano");

			
		} while (!(temp == "otoño" || temp == "invierno" || temp == "primavera" || temp == "verano"));

			if (temp == "invierno") {
				acuminv = acuminv + cant;
				contviaje++;
			}



		resp = prompt("quiere ingresar otra estadia? s/n");
	} while (resp == "s")

	

	if (contbari > contsalta && contbari > contcata) 
	{
		lugarmax = "bariloche";
	}
	else if (contsalta > contcata) 
	{
		lugarmax = "salta";
	}
	else 
	{
		lugarmax = "cataratas";
	}
	
	document.write("el lugar mas elegido es: " + lugarmax+"<br/>");

	
	document.write("el titular con mas pasajeros es: " + maxnombre+"<br/>");

	
	if(acuminv !=0)
	{
		promedio = acuminv/contviaje;
		document.write("el promedio de personas por viaje, que viajan en invierno es: " + promedio+"<br/>");
	}



}
