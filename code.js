//ADICIONANDO UM EVENTO AO BOTÃO
var sortear = document.getElementById("sortear");
sortear.addEventListener("click", sortear_dados);

var adicionar = document.getElementById("adicionar_numeros");
adicionar.addEventListener("click",adicionar_numero);

var vencedor = document.getElementById("vencedor");
vencedor.addEventListener("click",calcula_vencedor);

var container = document.getElementById("container")

//CRIANDO FUNÇÃO DE GERAR NÚMEROS INTEIROS ALEATÓRIOS
function random(min, max) {
    let minimo = Math.ceil(min);
    let maximo = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//REGRA DE NEGÓCIO DO JOGO

var total1 = 0;
function sortear_dados() {
    let id = 1;
    
    for (let contador = 1; contador <= 3; contador++) {
        let nmr = random(1, 6);
        document.getElementById(id).src = `dados_img/${nmr}.png`;
       
        id++;
        total1 += nmr;
        
    }   
    
    
}


var total2 = 0
function adicionar_numero(){
    let escolhido1 = Number(document.getElementById("escolhido1").value);
    let escolhido2 = Number(document.getElementById("escolhido2").value);
    let escolhido3 = Number(document.getElementById("escolhido3").value);
    total2 = escolhido1 + escolhido2 + escolhido3;
    if (total2 < 18){
    document.getElementById("jogador1").src = `dados_img/${escolhido1}.png`;
    document.getElementById("jogador2").src = `dados_img/${escolhido2}.png`;
    document.getElementById("jogador3").src = `dados_img/${escolhido3}.png`;
    } else if(total2 = "" || total2 == 0){
        document.getElementById("erro").innerHTML = "Digite um valor válido"
       
    } else{
        document.getElementById("erro").innerHTML = "Você digitou números iguais isso é não saber jogar"
        container.style.height = '44em'
    }

    apaga_form()
    
}

function calcula_vencedor(){
    if(total1 > total2){
        document.getElementById("tela").innerHTML = `Computador venceu o jogador(${total1} - ${total2})`;
        tela.style.color = "red"
        } else if (total1 == total2){
        document.getElementById("tela").innerHTML = "Os dois jogadores empataram";
        tela.style.color = "black"
    } else{
        document.getElementById("tela").innerHTML = `Jogador venceu o computador(${total2} - ${total1})`;
        tela.style.color = "blue"
        
    }
    total1 = 0;
    total2 = 0;
}
    


function apaga_form(){
    let escolhido1 = document.getElementById("escolhido1").value = "";
    let escolhido2 = document.getElementById("escolhido2").value = "";
    let escolhido3 = document.getElementById("escolhido3").value = "";
}