var productoEditando = null;
		
		// función para agregar un nuevo producto
		function agregarProducto() {
			var producto = document.getElementById("producto").value;
			var fecha = document.getElementById("fecha").value;
			var tabla = document.getElementById("tablaProductos");
			var newRow = tabla.insertRow(-1);
			var newCell1 = newRow.insertCell(0);
			var newCell2 = newRow.insertCell(1);
			var newCell3 = newRow.insertCell(2);
			newCell1.innerHTML = producto;
			newCell2.innerHTML = fecha;
			newCell3.innerHTML = '<button onclick="editarProducto(this)">Editar</button> <button onclick="eliminarProducto(this)">Eliminar</button>';
			document.getElementById("producto").value = "";
			document.getElementById("fecha").value = "";
		}
		
		// función para editar un producto existente
		function editarProducto(button) {
			var row = button.parentNode.parentNode;
			productoEditando = row;
			var producto = row.cells[0].innerHTML;
			var fecha = row.cells[1].innerHTML;
			document.getElementById("producto").value = producto;
			document.getElementById("fecha").value = fecha;
			document.getElementById("agregar").style.display = "none";
			document.getElementById("editar").style.display = "inline";
		}
		
		// función para guardar los cambios al editar un producto
		function guardarCambios() {
			var nuevoProducto = document.getElementById("producto").value;
			var nuevaFecha = document.getElementById("fecha").value;
			productoEditando.cells[0].innerHTML = nuevoProducto;
			productoEditando.cells[1].innerHTML = nuevaFecha;
			document.getElementById("producto").value = "";
			document.getElementById("fecha").value = "";
			document.getElementById("agregar").style.display = "inline";
			document.getElementById("editar").style.display = "none";
			productoEditando = null;
		}
		
		// función para eliminar un producto existente
		function eliminarProducto(button) {
			var row = button.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
