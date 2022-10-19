var aNombre = [],
	aDUI = [],
	aNIT = [],
	aMarca = [],
	aModelo = [],
	aYear =[],
	aColor = [],
	aPlaca = [],
	aFalla = [];


if(localStorage.getItem('nombre_carro') != null){
	aNombre = JSON.parse(localStorage.getItem('nombre_carro'));
	aDUI = JSON.parse(localStorage.getItem('dui_carro'));
	aNIT = JSON.parse(localStorage.getItem('nit_carro'));
	aMarca = JSON.parse(localStorage.getItem('marca_carro'));
	aModelo = JSON.parse(localStorage.getItem('modelo_carro'));
	aYear = JSON.parse(localStorage.getItem('year_carro'));
	aColor = JSON.parse(localStorage.getItem('color_carro'));
	aPlaca = JSON.parse(localStorage.getItem('placa_carro'));
	aFalla = JSON.parse(localStorage.getItem('falla_carro'));
	
}


var btndeRegistro = document.getElementById("btnAgregar"); 

btndeRegistro.addEventListener('click', registrarCarro);

function registrarCarro(){
	var sNombre = document.querySelector('#nombre').value,
	sDUI = document.querySelector('#dui').value,
	sNIT = document.querySelector('#nit').value,
	sMarca = document.querySelector('#marca').value,
	sModelo = document.querySelector('#modelo').value,
	sYear = document.querySelector('#year').value,
	sColor = document.querySelector('#color').value,
	sPlaca = document.querySelector('#placa').value,
	sFalla = document.querySelector('#fallas').value;
	

	aNombre.push(sNombre);
	aDUI.push(sDUI);
	aNIT.push(sNIT);
	aMarca.push(sMarca);
	aModelo.push(sModelo);
	aYear.push(sYear);
	aColor.push(sColor);
	aPlaca.push(sPlaca);
	aFalla.push(sFalla);
	

	localStorage.setItem('nombre_carro', JSON.stringify(aNombre));
	localStorage.setItem('dui_carro',JSON.stringify(aDUI));
	localStorage.setItem('nit_carro',JSON.stringify(aNIT));
	localStorage.setItem('marca_carro',JSON.stringify(aMarca));
	localStorage.setItem('modelo_carro',JSON.stringify(aModelo));
	localStorage.setItem('year_carro',JSON.stringify(aYear));
	localStorage.setItem('color_carro',JSON.stringify(aColor));
	localStorage.setItem('placa_carro',JSON.stringify(aPlaca));
	localStorage.setItem('falla_carro',JSON.stringify(aFalla));
	

	location.reload();
}

llenarTabla();


function llenarTabla(){
	var tbody = document.querySelector('#tblCarros tbody');

	tbody.innerHTML = '';

	var aNombre = JSON.parse(localStorage.getItem('nombre_carro')),
		aDUI = JSON.parse(localStorage.getItem('dui_carro')),
		aNIT = JSON.parse(localStorage.getItem('nit_carro')),
		aMarca = JSON.parse(localStorage.getItem('marca_carro')),
		aModelo = JSON.parse(localStorage.getItem('modelo_carro')),
		aYear = JSON.parse(localStorage.getItem('year_carro')),
		aColor = JSON.parse(localStorage.getItem('color_carro')),
		aPlaca = JSON.parse(localStorage.getItem('placa_carro')),
		aFalla = JSON.parse(localStorage.getItem('falla_carro'));
	

	var cantCarros = aNombre.length;

	for(var i = 0; i < cantCarros; i++){
		var fila = document.createElement('tr');

		var celdaNombre = document.createElement('td'),
		celdaDUI = document.createElement('td'),
		celdaNIT = document.createElement('td'),
		celdaMarca = document.createElement('td'),
		celdaModelo = document.createElement('td'),
		celdaYear = document.createElement('td'),
		celdaColor = document.createElement('td'),
		celdaPlaca = document.createElement('td'),
		celdaFalla = document.createElement('td');

		var nodoTextoNombre = document.createTextNode(aNombre[i]),
		nodoTextoDUI = document.createTextNode(aDUI[i]),
		nodoTextoNIT = document.createTextNode(aNIT[i]),
		nodoTextoMarca = document.createTextNode(aMarca[i]),
		nodoTextoModelo = document.createTextNode(aModelo[i]),
		nodoTextoYear = document.createTextNode(aYear[i]),
		nodoTextoColor = document.createTextNode(aColor[i]),
		nodoTextoPlaca = document.createTextNode(aPlaca[i]),
		nodoTextoFalla = document.createTextNode(aFalla[i]);
		

		celdaNombre.appendChild(nodoTextoNombre);
		celdaDUI.appendChild(nodoTextoDUI);
		celdaNIT.appendChild(nodoTextoNIT);
		celdaMarca.appendChild(nodoTextoMarca);
		celdaModelo.appendChild(nodoTextoModelo);
		celdaYear.appendChild(nodoTextoYear);
		celdaColor.appendChild(nodoTextoColor);
		celdaPlaca.appendChild(nodoTextoPlaca);
		celdaFalla.appendChild(nodoTextoFalla);
		

		fila.appendChild(celdaNombre);
		fila.appendChild(celdaDUI);
		fila.appendChild(celdaNIT);
		fila.appendChild(celdaMarca);
		fila.appendChild(celdaModelo);
		fila.appendChild(celdaYear);
		fila.appendChild(celdaColor);
		fila.appendChild(celdaPlaca);
		fila.appendChild(celdaFalla);
		
tbody.appendChild(fila);

	}
}