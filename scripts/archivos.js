document.getElementById('imagen').addEventListener('change', function (event) {
  const imagenPrevia = document.getElementById('imagenPrevia');
  imagenPrevia.innerHTML = ''; // Limpiar imagen previa

  const archivo = event.target.files[0];

  if (archivo) {
    const imagen = document.createElement('img');
    imagen.src = URL.createObjectURL(archivo);
    imagenPrevia.appendChild(imagen);
  }
});

// Evitar que el formulario se envíe
document
  .getElementById('imageForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
  });

document
  .getElementById('fileForm')
  .addEventListener('change', function (event) {
    event.preventDefault();

    const archivoInput = document.getElementById('archivo');
    const contenidoTexto = document.getElementById('contenidoTexto');

    const archivo = archivoInput.files[0];

    if (archivo) {
      const lector = new FileReader();

      lector.onload = function (event) {
        const contenido = event.target.result;
        contenidoTexto.value = contenido;
      };

      lector.readAsText(archivo);
    }
  });
