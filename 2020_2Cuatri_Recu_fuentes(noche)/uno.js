/* Cristobal Aldezabal division E
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{


	let nom;
	let temp;
	let sexo;
	let edad;

	let contf = 0;
	let contm = 0;

	let acumedad = 0;
	let promedio;

	let tempmax;
	let flag = 0;
	let nomtempmax;

	for (let i = 0; i < 5; i++) 
{

		do {
			nom = prompt("ingrese nombre");
		} while (!(isNaN(nom)));

		do {
			sexo = prompt("ingrese sexo: f/m");

			if (sexo == "f") {
				contf++;
			}
			else {
				contm++;
			}

		} while (!(sexo == "f" || sexo == "m"));

		do {
			temp = parseInt(prompt("ingrese temperatura"));

			if (sexo == "f") {
				if (flag == 0 || tempmax < temp) 
				{
					tempmax = temp;
					nomtempmax = nom;
					flag = 1;
				}
			}
		} while (temp <= 0 || temp > 45 || isNaN(temp));

		do {
			edad = parseInt(prompt("ingrese edad"));
			acumedad = acumedad + edad;

		} while (edad < 0 || edad > 120 || isNaN(edad));


		

		
	}
	
	document.write("la cantidad de mujeres es: " + contf + " y la cantidad de hombres: " + contm+"<br/>");

		
	promedio = acumedad / 5;
	document.write("la edad promedio es: " + promedio+"<br/>");

		
	if (contf != 0) {
		document.write("la mujer con mas temperatura es: " + nomtempmax+ "<br/>");
}

}



