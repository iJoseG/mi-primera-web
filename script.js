// 1. Seleccionar el botón (mismo selector que en CSS)
const botonTema = document.querySelector(".btn-dark");

const temaGuardado = localStorage.getItem("tema");
if (botonTema) {
    if (temaGuardado === "modo-claro") {
        document.body.classList.add("modo-claro");
        botonTema.textContent = "Modo Oscuro";
    }
}

// 2. Escuchar el evento click
if (botonTema) {
    botonTema.addEventListener("click", () => {
        // 3. Poner o quitar la clase "modo-claro" al <body>
        document.body.classList.toggle("modo-claro");

        // Cambiar el texto del botón según el tema actual
        if (document.body.classList.contains("modo-claro")) {
            botonTema.textContent = "Modo Oscuro";
            localStorage.setItem("tema", "modo-claro");
        } else {
            botonTema.textContent = "Dark Sunday";
            localStorage.setItem("tema", "modo-oscuro");
        }

        console.log("Tema cambiado!");
    });

}
