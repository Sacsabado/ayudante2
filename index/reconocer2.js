const textoReconocidoElement = document.querySelector("p")
const boton = document.querySelector("button")

if ("webkitSpeechRecognition" in window) {
    const reconocimiento = new webkitSpeechRecognition();

    reconocimiento.continuos = true;
    reconocimiento.lang = "es-Es"; 

    reconocimiento.onstart = function () {
        textReconocidoElement.textContent = "Escuchando...";

    }

    reconocimiento.onresult = function (event) {
        const resultado = event.results[event.results.length -1]
        const texto = resultado[0].transcript;
        textReconocidoElement.textContent = `Texto reconocido: ${texto}`;
    }
    reconocimiento.onend = function () {
        let miTexto = textoReconocidoElement.textContent
        textoReconocidoElement.textContent += ' (Fin del reconocimiento)';
        repetirTexto(miTexto)

    };

    boton.addEventListener("click", function () {

        reconocimiento.start();

    });

}else {             
    textoReconocidoElement.textContent = 'El reconocimiento de voz no es compatible con tu navegador.';
    boton.disabled = true;
}