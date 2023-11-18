function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


const imagenes = ["./fotoproyecto.jpg", "./fotoproyecto1.jpg", "./fotoproyecto2.jpg"];
let indiceActual = 0;

function cambiarFoto(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;

    const imagen = document.getElementById("imagenCarrusel");
    imagen.src = imagenes[indiceActual];
}

