document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {  
        let btn = document.querySelector("#submit");
      btn.click();
    }
  });

function Calcular() {
    const notaPrimeiroTrimestre = document.getElementById("primeiroTrimestre").value;
    const notaSegundoTrimestre = document.getElementById("segundoTrimestre").value;
    const notaTerceiroTrimestre = document.getElementById("terceiroTrimestre").value;
    const notaTotal =
        parseFloat(notaPrimeiroTrimestre || 0) +
        parseFloat(notaSegundoTrimestre || 0) +
        parseFloat(notaTerceiroTrimestre || 0);

    const valorMedia = (notaTotal) / 3;

    const resultado = valorMedia >= 6 ? "Aprovado" : "Reprovado";

    const elementoValorMedia = document.getElementById("valorMedia");

    const textoResultado = `Você foi ${resultado}, sua média foi ${valorMedia.toFixed(1)}`;

    elementoValorMedia.innerHTML = textoResultado;
}






