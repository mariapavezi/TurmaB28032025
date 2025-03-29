
document.getElementById("botaoNao").addEventListener("click", mudarPosicao);
document.getElementById("botaoSim").addEventListener("click", pix);


function mudarPosicao() {
    const botao = document.getElementById("botaoNao");
   

    const novaPosX = Math.random() * 300;
    const novaPosY = Math.random() * 300;

    botao.style.position = "absolute";
    botao.style.left = `${novaPosX}px`;
    botao.style.top = `${novaPosY}px`;
}

function pix() {
    document.getElementById("pixContainer").style.display="block";
}