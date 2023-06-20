const fcis = [
    {
      nombre: "RAÍCES AHORRO PESOS",
      rendimientoMes: 5.56,
      volatilidad: 2.37,
      duracion: "2,3 meses",
      interesAnual: 67.93,
      id: 0,
    },
    {
      nombre: "RAÍCES RENTA EN PESOS",
      rendimientoMes: 6.39,
      volatilidad: 5.87,
      duracion: "3,7 meses",            
      interesAnual: 73.71,
      id: 1,
    },
    {
      nombre: "RAÍCES VALORES FIDUCIARIOS",
      rendimientoMes: 5.86,
      volatilidad: 3.16,
      duracion: "3,1 meses",
      interesAnual: 72.97,
      id: 2,
    },
    { 
      nombre: "RAÍCES PyME",
      rendimientoMes: 6.01,
      volatilidad: 3.94,
      duracion: "11,3 meses",
      interesAnual: 70.35,
      id: 3,
    },
    {
      nombre: "RAICES INFRAESTRUCTURA",
      rendimientoMes: 6.43,
      volatilidad: 3.62,
      duracion: "24,5 meses",
      interesAnual: 77.80,
      id: 4,
    },
    {
      nombre: "RAÍCES INVERSIÓN",
      rendimientoMes: 6.05,
      volatilidad: 8.34,
      duracion: "7,7 meses",
      interesAnual: 71.23,
      id: 5,
    },
  ];

function invertir(inversionMonto, inversionMeses, fci) {
  let interes = fcis[fci].interesAnual / 12;
  let montoFinal = (Number(inversionMonto) + Number(inversionMonto * interes * inversionMeses) / 100);
  return montoFinal;
}

function generateButtons() {
  const buttonList = document.querySelector('.button-list');
  let name = "";
  buttonList.innerHTML = '';

  fcis.forEach((fciItem) => {
    const button = document.createElement('button');
    button.textContent = fciItem.nombre;
    name = "boton" + fciItem.id;
    button.id = name;
    button.setAttribute("onclick", "clickBotones(" + fciItem.id + ")")
    buttonList.appendChild(button);
  });
}

document.addEventListener('DOMContentLoaded', generateButtons);


function clickBotones(id) {
  let htmlFCI = "<div class=list-container-fci> <h2 class=subtitle>" + fcis[id].nombre + "</h2> <li>Rendimiento del último mes: <b>" + fcis[id].rendimientoMes + "</b></li> <li>Volatilidad anualizada: <b>" + fcis[id].volatilidad + "</b></li> <li>Duración: <b>" + fcis[id].duracion + "</b></li> <li>Interés anual: <b>" + fcis[id].interesAnual + "</b></li> </div>";
  document.getElementsByClassName("idFCI").innerHTML = id;
  document.getElementById("muestraFCI").innerHTML = htmlFCI;
  document.getElementById("divSimulador").innerHTML = "<div class=list-container><h2 class=subtitle>Simulador</h2><div class=input-group><label for=monto>Ingrese el monto a calcular:</label><input class=input-text id=monto type=text></div><div class=input-group><label for=meses>Ingrese los meses a calcular:</label><input class=input-text id=meses type=text></div><p id=resultado></p><button class=buttonCalcular onclick=calcularFCI()>Calcular</button></div>"
  }

function calcularFCI() {
  let inversionMonto = document.getElementById("monto").value;
  let inversionMeses = document.getElementById("meses").value;
  let id = document.getElementsByClassName("idFCI").innerHTML;

  if (isNaN(inversionMonto) || isNaN(inversionMeses) || (inversionMeses == "") || (inversionMonto == "")) {
    alert("Por favor revise los inputs, deben tener únicamente números y no estar vacíos");
    return;
  }

  let resultado = invertir(inversionMonto, inversionMeses, id);
  document.getElementById("resultado").innerText = ("Invirtiendo un monto de " + inversionMonto + " durante " + inversionMeses + " meses, se obtendría un monto final de: " + resultado);
  Swal.fire({
    title: 'Inversión Simulada',
    text: "Invirtiendo un monto de $" + inversionMonto + " durante " + inversionMeses + " meses, se obtendría un monto final de: $" + resultado,
    icon: 'info',
    confirmButtonText: 'Confirmar'
  })
}
