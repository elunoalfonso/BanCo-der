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
  document.getElementsByClassName("idFCI").innerHTML = id;
  document.getElementById("nameFCI").innerText = fcis[id].nombre;
  document.getElementById("rendimientoMesFCI").innerText = fcis[id].rendimientoMes;
  document.getElementById("volatilidadFCI").innerText = fcis[id].volatilidad;
  document.getElementById("duracionFCI").innerText = fcis[id].duracion;
  document.getElementById("interesAnualFCI").innerText = fcis[id].interesAnual;
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
}
