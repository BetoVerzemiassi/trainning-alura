var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });
    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaMarcadores() {    
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inicializaCronometro() {    
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

/**
  Aula 01 Introdução ao jQuery

 text() - acessa o conteudo de texto, retorna em formato de string
 split() - quebra uma string em espaços
 length - retorna o tamanho
 */

/**
Aula 02 Evento com jQuery

on() - faz a ação do evento
val() - pega o valor digitado no campo textarea, esse metodo da acesso ao que está dentro de uma tag de input, 
como as tags input e textarea; já o text nos dá acesso ao que está dentro de uma tag de texto, como p, span e h1  
*/

/**
Aula 03 GameOver com eventos

focus() - o campo ganha o foco para ser digitado.
setInterval() - faz com que uma determinada ação seja executada em um intervalo de tempo.
attr() - adiciona um atributo
clearInterval() - recebe o id do setInterval como parâmetro e para com a contagem
one() - essa função escuta o evento apenas uma vez ao contrário do "on() - onde fica o tempo todo escutando o evento"
*/

/**
 Aula 04 Reiniciando o jogo

 Podemos executar o evento de click com a função de atalho click();

 $(document).ready() - Aguarda a página ser carregada e depois executa seu conteúdo. Maneira mais comum de escrever
 $(function() { ... });
 click() - função de atalho .on("click"), tem o mesmo comportamento
 removeAttr() - objetivo remover atributos de elementos. Exemplo abaixo

 Ex: $(".post").removeAttr("disabled");

 
 */

/**
  Aula 05 Funções que auxiliam os estilos

  css() - Altera o estilo, passando a propriedade que queremos e seu valor. Porém sabemos que o certo não é certo
  mexer com estilo de uma página diretamente no JavaScript. Logo devemos mexer em css. Com a função abaixo adicionamos
  a classe com o estilo desejado.
  addClass() - Adiciona uma classe ao campo selecionado da página.
  removeClass() - Remove a classe do campo selecionado da página.
  toggleClass() - Funciona da seguinte maneira, se no momento que a função for chamada, o elemento possuir a classe, 
  ela será removida. Mas se o elemento não possuir a classe, ela será adicionada.

    campo.toggleClass("campo-desativado", true); //sempre adiciona

  substr() - Pega pedaço de uma string 

================================================================  

PARA SABER MAIS: SUBSTR COM ES6

  Como o JavaScript está evoluindo e melhorando já existe uma forma mais fácil de verificar se uma string faz parte 
  da outra string. Se o seu navegador já dar suporte ao ECMA Script 6 você pode simplesmente executar:

 var digitouCorreto = frase.startsWith(digitado);
    if(digitouCorreto) {
        campo.addClass("borda-verde");
    } else {
        campo.addClass("borda-vermelha");
    }
Ainda mais enxuto:

if( frase.startsWith(digitado)) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}
A função startsWith devolve true ou false, se a frase começa com o valor digitado ou não. Teste isso agora no console, 
digitando por exemplo:

"ECMA Script 6".startsWith("ECMA")
  */

/**
   Aula 06 Criando e Manipulando elementos com jQuery

   find() - Busca filho de um elemento que já selecionamos previamente, podemos utilizar a função .find() do 
   jQuery, que funciona de modo semelhante a função seletora ($), porém fazendo a busca apenas do filho do elemento.
   append() - Adiciona a string ou elemento HTML que  é passada como parâmetro com último filho do elemento em qual
   ela for chamada.
   prepend() - Adiciona a string/html passada como primeiro filho do elemento selecionado.
   remove() - Remove o item selecionado.
   parent() - Acessa o elemento acima do elemento selecionado com jQuery
 */