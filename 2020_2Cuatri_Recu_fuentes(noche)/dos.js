/* Cristobal Aldezabal division E
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
let marca;
let precio;
let peso;
let tipo;
let resp = "s"

let acumpeso = 0;

let maxliquido;
let marcamaxliquido;
let flag2 = 0;

let minsolido;
let marcaminsolido;
let flag1 = 0;

	
	do {

		do {
			marca = prompt("ingrese marca");
		} while (!(isNaN(marca)));

		do {
			precio = parseInt(prompt("ingrese precio"));
		} while (precio <= 0 || isNaN(precio));

		do {
			peso = parseInt(prompt("ingrese peso en kilogramos"));
			acumpeso = parseInt(acumpeso + peso);
		} while (peso <= 0 || isNaN(peso));

		do {
			tipo = prompt("ingrese tipo: solido/liquido");

			switch (tipo) {
				case "solido":
					if (flag1 == 0 || minsolido > peso){
						minsolido = peso;
						marcaminsolido = marca;
						flag1 = 1;
					}

			
					break;
				case "liquido":
					if (flag2 == 0 || maxliquido < precio) {
						maxliquido = precio;
						marcamaxliquido = marca;
						flag2 = 1;
					}
					break;
				}

		} while (!(tipo == "solido" || tipo == "liquido"));




		resp = prompt("quiere ingresar otro producto? s/n");
	} while (resp == "s");

	
	document.write("el peso total de la compra es: " + acumpeso+ "<br/>");

	
	document.write("la marca del mas caro de los liquidos es: " + marcamaxliquido+"<br/>");


	document.write("la marca del mas liviano de los solidos es: " + marcaminsolido+"<br/>");
}
