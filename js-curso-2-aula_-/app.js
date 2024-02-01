let listaNumeros=[]; 
let numeroLimite=10;
let numeroSecreto=gerarNum();  
let palavra; 
let count=0;
function exibirTexto(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML= texto 
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
} 
function mensagemInicial(){
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10');
};
mensagemInicial();

function verificarChute() {  
    count+=1; 
    console.log(count);
    let chute = document.querySelector('input').value; 
    if (chute==numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto em ${count} ${palavr(count)}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute>numeroSecreto){
            exibirTexto('h1','Errou')
            exibirTexto('p',`O número secreto é menor que ${chute}`)
        } 
        else{ 
            exibirTexto('h1','Errou')
            exibirTexto('p',`O número secreto é maior que ${chute}`)
        } 
        limparCampo()
    }
 };
function gerarNum() { 
    let numeroSecreto=parseInt(Math.random()*numeroLimite+1); 
    let quantidadeLista=listaNumeros.length;
    if (quantidadeLista==3){
        listaNumeros=[];
    }
    if (listaNumeros.includes(numeroSecreto)){
        return gerarNum();
    }else{
        listaNumeros.push(numeroSecreto);
        return numeroSecreto;
    }
}   
function palavr(a){ 
    return palavra= a>1?"tentativas" : "tentativas";
}  
function limparCampo(){ 
    chute=document.querySelector('input'); 
    chute.value=' ';
}
function reiniciarJogo(){
    numeroSecreto=gerarNum(); 
    count=0; 
    limparCampo(); 
    mensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled',true)

}
