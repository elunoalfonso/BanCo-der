const fcis = [
    {
      nombre: "RAÍCES AHORRO PESOS",
      rendimientoMes: 5.56,
      volatilidad: 2.37,
      duracion: "2,3 meses",
      interesAnual: 67.93,
    },
    {
      nombre: "RAÍCES RENTA EN PESOS",
      rendimientoMes: 6.39,
      volatilidad: 5.87,
      duracion: "3,7 meses",            
      interesAnual: 73.71,
    },
    {
      nombre: "RAÍCES VALORES FIDUCIARIOS",
      rendimientoMes: 5.86,
      volatilidad: 3.16,
      duracion: "3,1 meses",
      interesAnual: 72.97,
    },
    { 
      nombre: "RAÍCES PyME",
      rendimientoMes: 6.01,
      volatilidad: 3.94,
      duracion: "11,3 meses",
      interesAnual: 70.35,
    },
    {
      nombre: "RAICES INFRAESTRUCTURA",
      rendimientoMes: 6.43,
      volatilidad: 3.62,
      duracion: "24,5 meses",
      interesAnual: 77.80,
    },
    {
      nombre: "RAÍCES INVERSIÓN",
      rendimientoMes: 6.05,
      volatilidad: 8.34,
      duracion: "7,7 meses",
      interesAnual: 71.23,
    },
  ];

function solicitarFCI() {
    let n = 0;
    let promptFCIs = "Bienvenido al simulador de inversiones por FCI del BanCo-der\nElija una opción para ver más información:\n";
    for (n = 0; n < fcis.length; n++) {
      promptFCIs = promptFCIs.concat(n+1 + ". ");
      promptFCIs = promptFCIs.concat(fcis[n].nombre);
      promptFCIs = promptFCIs.concat("\n");
    }
    promptFCIs = promptFCIs.concat(`\nPor favor, ingrese un número del 1 al ${n} o 99 para salir.`);
    return prompt(promptFCIs);
    }   

function mostrarFCI(fci) {
  let n = fci-1;
  let promptFCI = ("Usted ha seleccionado " + fcis[n].nombre + 
                    "\nRendimiento del último mes: " + fcis[n].rendimientoMes + "%" +
                    "\nVolatilidad anualizada: " + fcis[n].volatilidad + "%" +
                    "\nDuración: " + fcis[n].duracion +
                    "\nInterés anual: " + fcis[n].interesAnual + "%" +
                    "\n\nPresione 1 para simular una inversión o 0 para volver"
                    );

  return prompt(promptFCI);
}

function opcionValida(fci) {
  if (((fci > 0) && (fci <= fcis.length)) || fci == 99 || fci == "admin") {
    return true;
  } else {
    return false;
  }
}

function cargarInversion(inversion) {
  inversion.monto = prompt("Ingrese el monto a invertir o 0 para cancelar");
  if (inversion.monto < 0) {
    inversion.estado = "Error";
  } else if (inversion.monto == 0) {
    inversion.estado = "Incompleto";
  } else {
    inversion.cantidadMeses = prompt("Ingrese los meses a calcular o 0 para cancelar");
  if (inversion.cantidadMeses < 0) {
    inversion.estado = "Error";
  } else if (inversion.cantidadMeses == 0) {
    inversion.estado = "Incompleto";
  } else {
    inversion.estado = "OK";
  }
  }
}

function invertir(inversion, fci) {
  let interes = fcis[fci-1].interesAnual / 12;
  let montoFinal = (Number(inversion.monto) + Number(inversion.monto * interes * inversion.cantidadMeses) / 100);
  alert (`Invirtiendo $${inversion.monto} por ${inversion.cantidadMeses} meses, quedaría un monto final de $${montoFinal}.\n\n Presione "aceptar" para volver atrás`);
}

function adminPanel(fcis) {
  let salirAdmin = false;
  let opc = prompt('Bienvenido al Admin Panel de los FCIs, seleccione una opción a continuación: \n1. Agregar un FCI\n2. Modificar un FCI\n3. Eliminar un FCI\n\n9. Salir del Admin Panel');
  while (!salirAdmin) {
    switch (opc) {
      case "1":
        agregarFCI(fcis);
        opc = 0;
        break;
      
      case "2":
        modificarFCI(fcis);
        opc = 0;
        break;

      case "3":
        eliminarFCI(fcis);
        opc = 0;
        break;
      
      case "9": 
        salirAdmin = true;
        break;

      default:
        opc = prompt('Bienvenido al Admin Panel de los FCIs, seleccione una opción a continuación: \n1. Agregar un FCI\n2. Modificar un FCI\n3. Eliminar un FCI\n\n9. Salir del Admin Panel');

    };
  }  
}

function agregarFCI(fcis) {
  let nombreFCI = prompt('Agregando FCI, ingrese el nombre o SALIR para cancelar');
  if (nombreFCI.toUpperCase() != "SALIR") {
    let rendimientoMesFCI = prompt(`Agregando FCI "${nombreFCI}", ingrese el rendimiento mensual o SALIR para cancelar`);
    if (rendimientoMesFCI.toUpperCase() != "SALIR")  {
        let volatilidadFCI = prompt(`Agregando FCI "${nombreFCI}", ingrese la volatilidad anualizada o SALIR para cancelar`);
        if (volatilidadFCI.toUpperCase() != "SALIR") {
          let duracionFCI = prompt(`Agregando FCI "${nombreFCI}", ingrese la duración o SALIR para cancelar`);
          if (duracionFCI.toUpperCase() != "SALIR") {
            let interesAnualFCI = prompt(`Agregando FCI "${nombreFCI}", ingrese el interés anual o SALIR para cancelar`);
            if (interesAnualFCI.toUpperCase() != "SALIR") {
              while (isNaN(interesAnualFCI)) {
                interesAnualFCI = prompt(`Agregando FCI "${nombreFCI}", ingrese el interés anual o SALIR para cancelar\n\nEste dato es vital para el funcionamiento del programa, por favor ingrese un NÚMERO`);
              }
             let opc = prompt("Por favor, revise los datos ingresados:" +
             "\nNombre del nuevo FCI: " + nombreFCI + 
             "\nRendimiento del último mes: " + rendimientoMesFCI + "%" +
             "\nVolatilidad anualizada: " + volatilidadFCI + "%" +
             "\nDuración: " + duracionFCI +
             "\nInterés anual: " + interesAnualFCI + "%" +
             "\n\nIngrese 1 para guardar o 9 para salir");
              while ((opc != 1) && (opc != 9)) {
                opc = prompt("Por favor, revise los datos ingresados:" +
                "Nombre del nuevo FCI: " + nombreFCI + 
                "\nRendimiento del último mes: " + rendimientoMesFCI + "%" +
                "\nVolatilidad anualizada: " + volatilidadFCI + "%" +
                "\nDuración: " + duracionFCI +
                "\nInterés anual: " + interesAnualFCI + "%" +
                "\n\nIngrese 1 para guardar o 9 para salir");
              }
              if (opc == 1) {
                fcis.push({nombre: nombreFCI, rendimientoMes: rendimientoMesFCI, volatilidad: volatilidadFCI, duracion: duracionFCI, interesAnual: interesAnualFCI})
                alert("FCI agregado correctamente");
              }
            }
          }
        }
    }
  }
}

function modificarFCI(fcis) {
  let salirModif = false;
  alert('A continuación, elija el FCI a modificar');
  let fci = solicitarFCI();
  while (!salirModif) {
    if (fci == 99) {
      salirModif = true;
    } else {
    if ((fci > 0) && (fci < (fcis.length + 1))) {
      let opc = prompt('Elija el parámetro a modificar o 9 para salir:\n' + 
      '1. Nombre\n2. Rendimiento Mensual\n3. Volatilidad\n4. Duración\n5. Interés anual');
      let n = fci-1;
      switch (opc) {
        case '1':
          nuevo = prompt('Nombre actual: ' + fcis[n].nombre + '\nIngrese el nuevo nombre o SALIR para cancelar');
          if (nuevo.toUpperCase() != "SALIR") {
            fcis[n].nombre = nuevo;
          }
          break;

        case '2':
          nuevo = prompt('Rendimiento mensual actual: ' + fcis[n].rendimientoMes + '\nIngrese el nuevo rendimiento mensual o SALIR para cancelar');
          if (nuevo.toUpperCase() != "SALIR") {
            fcis[n].rendimientoMes = nuevo;
          }
          break;

        case '3':
          nuevo = prompt('Volatilidad actual: ' + fcis[n].volatilidad + '\nIngrese la nueva volatilidad o SALIR para cancelar');
          if (nuevo.toUpperCase() != "SALIR") {
            fcis[n].volatilidad = nuevo;
          }
          break;
          

        case '4':
          nuevo = prompt('Duración actual: ' + fcis[n].duracion + '\nIngrese la nueva duración o SALIR para cancelar');
          if (nuevo.toUpperCase() != "SALIR") {
            fcis[n].duracion = nuevo;
          }
          break;
          

        case '5':
          nuevo = prompt('Interés anual actual: ' + fcis[n].interesAnual + '\nIngrese el nuevo interés anual o SALIR para cancelar');
          if (nuevo.toUpperCase() != "SALIR") {
            while (isNaN(nuevo)) {
              nuevo = prompt('Interés anual actual: ' + fcis[n].interesAnual + '\nIngrese el nuevo interés anual o SALIR para cancelar\n\nEste dato es vital para el funcionamiento del programa, por favor ingrese un NÚMERO');
              if (nuevo.toUpperCase() = "SALIR") {
                break;
              }
            }
            fcis[n].interesAnual = nuevo;
          }
          break;
          

        case '9':
          salirModif = true;
          break;
      
        default:
          opc = prompt('Elija el parámetro a modificar o 9 para salir:\n' + 
          '1. Nombre\n2. Rendimiento Mensual\n3. Volatilidad\n4. Duración\n5. Interés anual');
      }
    } else {
      alert('Dato incorrecto. A continuación, elija el FCI a modificar');
      fci = solicitarFCI();
      }
    }
  }
}

function eliminarFCI(fcis) {
  if ((fcis.length) > 0) {
    alert('A continuación, elija el FCI a eliminar');
    let fci = solicitarFCI();
    while (!opcionValida(fci)) {
      fci = solicitarFCI(); 
    }
    let n = fci-1;
    let eliminando = -1;
    while ((eliminando != 0) && (eliminando != 1)) {
      eliminando = prompt("Usted ha seleccionado " + fcis[n].nombre + 
                    "\nRendimiento del último mes: " + fcis[n].rendimientoMes + "%" +
                    "\nVolatilidad anualizada: " + fcis[n].volatilidad + "%" +
                    "\nDuración: " + fcis[n].duracion +
                    "\nInterés anual: " + fcis[n].interesAnual + "%" +
                    "\n\nPresione 1 para eliminar este FCI o 0 para volver"
                    );
    }
    if (eliminando == 1) {
      fcis.splice(n,1);
    }
    
  } else {
    alert('No existe ningún FCI, no se puede eliminar.');
  }
}



//INICIALIZACIÓN
/*
let salir = false;
let inversion = {
  monto: 0,
  cantidadMeses: 0,
  estado: "Incompleto",
};

//LOOP PRINCIPAL
while (!salir) {  
  let salirInversion = false;          
  let fci = solicitarFCI();
  while (!opcionValida(fci)) {
    fci = solicitarFCI(); 
  }

  switch (fci) {
    case "admin":
      adminPanel(fcis);
      break;
  
    case "99":
      salir = true;
      break;

    default:
      while (!salirInversion) {
        let invierte = mostrarFCI(fci);
        while ((invierte != 0) && (invierte != 1)) {
          invierte = mostrarFCI(fci);
        }
        if (invierte == 0) {
            salirInversion = true;
        } else if (invierte == 1) {
          cargarInversion(inversion);
          if (inversion.estado == "Incompleto") {
            alert("Inversión cancelada, presione aceptar para volver atrás");
          } else if (inversion.estado == "Error") {
            alert("Hubo un error en los datos cargados, presione aceptar para volver atrás");
          } else if (inversion.estado == "OK") {
            invertir(inversion, fci);
          }
        }
      }
      break;
  }

}
*/

function generateButtons() {
  const buttonList = document.querySelector('.button-list');

  buttonList.innerHTML = '';

  fcis.forEach((fciItem) => {
    const button = document.createElement('button');
    button.textContent = fciItem.nombre;

    buttonList.appendChild(button);
  });
}

document.addEventListener('DOMContentLoaded', generateButtons);