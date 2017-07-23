var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");//text(); sem argumento ela pega o conteudo

tamanhoFrase.text(numeroPalavras);//com argumento ela coloca o conteudo

/**
 Aula 01 Introdução ao jQuery

 text() - acessa o conteudo de texto, retorna em formato de string
 split() - quebra uma string em espaços
 length - retorna o tamanho
 */