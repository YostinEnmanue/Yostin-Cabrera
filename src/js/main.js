// main.js - Archivo JavaScript para manejar la lógica de la aplicación de control de gastos

// Variables globales
let gastos = [];

// Función para agregar un gasto
function agregarGasto(descripcion, cantidad) {
    const gasto = {
        id: Date.now(),
        descripcion: descripcion,
        cantidad: cantidad
    };
    gastos.push(gasto);
    actualizarListaGastos();
}

// Función para eliminar un gasto
function eliminarGasto(id) {
    gastos = gastos.filter(gasto => gasto.id !== id);
    actualizarListaGastos();
}

// Función para calcular el total de gastos
function calcularTotal() {
    return gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
}

// Función para actualizar la lista de gastos en la interfaz
function actualizarListaGastos() {
    const listaGastos = document.getElementById('lista-gastos');
    listaGastos.innerHTML = '';

    gastos.forEach(gasto => {
        const li = document.createElement('li');
        li.textContent = `${gasto.descripcion}: $${gasto.cantidad}`;
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarGasto(gasto.id);
        li.appendChild(btnEliminar);
        listaGastos.appendChild(li);
    });

    const totalGastos = document.getElementById('total-gastos');
    totalGastos.textContent = `Total Gastos: $${calcularTotal()}`;
}