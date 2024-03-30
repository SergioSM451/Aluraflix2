function agregarPelicula() {
  var imagenPelicula = document.getElementById('pelicula').value;
  var nombrePelicula = document.getElementById('nombre').value;
  var trailerPelicula = document.getElementById('trailer').value;
  var elementoListaPeliculas = document.getElementById('listaPeliculas');
  
  // Agregar película a la lista
  elementoListaPeliculas.innerHTML += `
    <div class="movie">
      <img src="${imagenPelicula}">
      <p>${nombrePelicula}</p>
      <a href="${trailerPelicula}" target="_blank">Ver trailer</a>
      <button onclick="eliminarPelicula(this)">Eliminar</button>
    </div>
  `;
  
  // Limpiar campos de entrada
  document.getElementById('pelicula').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('trailer').value = '';
}

function eliminarPelicula(elemento) {
  // Eliminar la película del DOM
  var pelicula = elemento.parentNode;
  pelicula.parentNode.removeChild(pelicula);
}
