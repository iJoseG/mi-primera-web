
let expresion = "";

const display = document.querySelector("#display-calc-val");
const botones = document.querySelectorAll(".bt-num, .bt-op");
botones.forEach((button) => {
    button.addEventListener("click", () => {
        expresion = expresion + button.textContent;
        display.textContent = expresion || "0";
    });
});

const botonesq = document.querySelector(".bt-eq");
botonesq.addEventListener("click", () => {
    if (expresion === "") return;

    try {
        const resultado = eval(expresion.replaceAll("^", "**"));

        if (!Number.isFinite(resultado)) {
            display.textContent = "Error";
            expresion = "";
            return;
        }

        expresion = String(resultado);
        display.textContent = expresion;
    } catch (error) {
        display.textContent = "Error";
        expresion = "";
    }
});

const botonecl = document.querySelector(".bt-cl");
botonecl.addEventListener("click", () => {
    expresion = "";
    display.textContent = expresion || "0";
});

const botdel = document.querySelector(".bt-del");
botdel.addEventListener("click", () => {
    expresion = expresion.toString();
    expresion = expresion.slice(0, -1);
    display.textContent = expresion || "0";
});

