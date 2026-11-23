// 1. Seleccionar el botón (mismo selector que en CSS)
const botonTema = document.querySelector(".btn-dark");

// 2. Escuchar el evento click
botonTema.addEventListener("click", () => {
    // 3. Poner o quitar la clase "modo-claro" al <body>
    document.body.classList.toggle("modo-claro");

    // Cambiar el texto del botón según el tema actual
    if (document.body.classList.contains("modo-claro")) {
        botonTema.textContent = "Modo Oscuro";
    } else {
        botonTema.textContent = "Dark Sunday";
    }

    console.log("Tema cambiado!");
});