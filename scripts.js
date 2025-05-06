// Espera que todo el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {

    // Obtiene el enlace que sirve para mostrar/ocultar la lista de habilidades
    const btnHabilidades = document.getElementById("toggle-habilidades");

    // Obtiene el elemento <ul> de habilidades que será mostrado u ocultado
    const listaHabilidades = document.getElementById("lista-habilidades");

    // Obtiene el enlace para mostrar/ocultar la sección de educación
    const btnEducacion = document.getElementById("toggle-educacion");

    // Obtiene el elemento <ol> de educación que será mostrado u ocultado
    const listaEducacion = document.getElementById("lista-educacion");

    // Agrega un evento de clic al botón de habilidades
    btnHabilidades.addEventListener("click", function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace (navegar a otra página)

        // Cambia el estilo de display entre "none" y "block" para ocultar o mostrar la lista
        listaHabilidades.style.display = (listaHabilidades.style.display === "none") ? "block" : "none";
    });

    // Agrega un evento de clic al botón de educación
    btnEducacion.addEventListener("click", function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace

        // Cambia el estilo de display entre "none" y "block" para ocultar o mostrar la lista
        listaEducacion.style.display = (listaEducacion.style.display === "none") ? "block" : "none";
    });

    // Asegura que ambas listas estén visibles al cargar la página
    listaHabilidades.style.display = "block";
    listaEducacion.style.display = "block";
});
