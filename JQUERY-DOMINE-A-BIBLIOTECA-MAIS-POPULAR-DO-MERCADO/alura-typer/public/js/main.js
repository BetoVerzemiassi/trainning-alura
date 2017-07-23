/**
 Aula 01 Introdução ao jQuery

 text() - acessa o conteudo de texto, retorna em formato de string
 split() - quebra uma string em espaços
 length - retorna o tamanho
 */

var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");//text(); sem argumento ela pega o conteudo

tamanhoFrase.text(numeroPalavras);//com argumento ela coloca o conteudo



 /**
  *Aula 02 Evento com jQuery

  on() - faz a ação do evento
  val() - pega o valor digitado no campo textarea, esse metodo da acesso ao que está dentro de uma tag de input, 
  como as tags input e textarea; já o text nos dá acesso ao que está dentro de uma tag de texto, como p, span e h1
  
  */

  var campo = $(".campo-digitacao");
  campo.on("input", function(){
      var conteudo = campo.val();

      var qtdPlavras = conteudo.split(/\S+/).length - 1;
      $(".contador-palavras").text(qtdPlavras);

      var qtdCaracteres = conteudo.length;
      $(".contador-caracteres").text(qtdCaracteres);
  });