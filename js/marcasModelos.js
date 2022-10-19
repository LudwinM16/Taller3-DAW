function cargarMarcas() {
    var array = ["BMW", "Toyota", "Volkswagen", "Honda", "Hyundai", "Suzuki", "Ford"];
    array.sort();
    addOptions("marca", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (marca in array) {
        var opcion = document.createElement("option");
        opcion.text = array[marca];
  
        opcion.value = array[marca].toUpperCase()
        selector.add(opcion);
    }
}



function cargarModelos() {
    var listaMarcas = {
      BMW: ["X6 Deportivo", "Z4 Deportivo", "Serie 2", "Serie 5" ],
      TOYOTA: ["Daihatsu", "Corolla", "RAV4", "Prius"],
      VOLKSWAGEN: ["Golf", "Saveiro", "Rabbit", "Beetle"],
      HONDA: ["Civic", "Accord", "Hadchback", "CR-V"],
      HYUNDAI: ["Elantra", "Tucson", "Santa Fe", "i30"],
      SUZUKI: ["Baleno", "Swift", "Swift Sport", "Celerio"],
      FORD: ["Focus", "Mustang", "EcoSport", "Fiesta", "Explorer"]
    }
    
    var marcas = document.getElementById('marca')
    var modelos = document.getElementById('modelo')
    var marcaSeleccionada = marcas.value
    
    modelos.innerHTML = '<option value="">Seleccione un modelo...</option>'
    
    if(marcaSeleccionada !== ''){
      marcaSeleccionada = listaMarcas[marcaSeleccionada]
      marcaSeleccionada.sort()
    
      marcaSeleccionada.forEach(function(modelo){
        let opcion = document.createElement('option')
        opcion.value = modelo
        opcion.text = modelo
        modelos.add(opcion)
      });
    }
    
  }
  
 // Iniciar la carga de provincias solo para comprobar que funciona
cargarMarcas();