var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase"); //text(); sem argumento ela pega o conteudo
    tamanhoFrase.text(numeroPalavras); //com argumento ela coloca o conteudo
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPlavras = conteudo.split(/\S+/).length - 1;
        $(".contador-palavras").text(qtdPlavras);

        var qtdCaracteres = conteudo.length;
        $(".contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        $("#botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID); //para com a contagem assim que acabar o tempo
                $("#botao-reiniciar").attr("disabled", false);
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro(); //chamamos a função;
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