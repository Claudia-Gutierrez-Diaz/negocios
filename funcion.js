var productoEditando = null;
		
// función para agregar un nuevo producto
function agregarProducto() {
	var producto = document.getElementById("producto").value;
	var descripcion = document.getElementById("descripcion").value;
	var Id = document.getElementById("Id").value;
	var tabla = document.getElementById("tablaProductos");
	var newRow = tabla.insertRow(-1);
	var newCell1 = newRow.insertCell(0);
	var newCell2 = newRow.insertCell(1);
	var newCell3 = newRow.insertCell(2);
	var newCell4 = newRow.insertCell(3);
	newCell1.innerHTML = producto;
	newCell2.innerHTML = descripcion;
	newCell3.innerHTML = Id;
	newCell4.innerHTML = '<button onclick="editarProducto(this)">Editar</button> <button onclick="eliminarProducto(this)">Eliminar</button>';
	document.getElementById("producto").value = "";
	document.getElementById("descripcion").value = "";
	document.getElementById("Id").value = "";
}

// función para editar un producto existente
function editarProducto(button) {
	var row = button.parentNode.parentNode;
	productoEditando = row;
	var producto = row.cells[0].innerHTML;
	var descripcion = row.cells[1].innerHTML;
	var Id = row.cells[2].innerHTML;
	document.getElementById("producto").value = producto;
	document.getElementById("descripcion").value = descripcion;
	document.getElementById("Id").value = Id;
	document.getElementById("agregar").style.display = "none";
	document.getElementById("editar").style.display = "inline";
}

// función para guardar los cambios al editar un producto
function guardarCambios() {
	var nuevoProducto = document.getElementById("producto").value;
	var nuevaDescripcion = document.getElementById("descripcion").value;
	var nuevaId = document.getElementById("Id").value;
	productoEditando.cells[0].innerHTML = nuevoProducto;
	productoEditando.cells[1].innerHTML = nuevaDescripcion;
	productoEditando.cells[2].innerHTML = nuevaId;
	document.getElementById("producto").value = "";
	document.getElementById("descripcion").value = "";
	document.getElementById("Id").value = "";
	document.getElementById("agregar").style.display = "inline";
	document.getElementById("editar").style.display = "none";
	productoEditando = null;
}

// función para eliminar un producto existente
function eliminarProducto(button) {
	var row = button.parentNode.parentNode;
	row.parentNode.removeChild(row);
}
