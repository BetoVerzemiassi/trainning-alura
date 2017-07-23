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
  Aula 02 Evento com jQuery

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


  /**
   Aula 03 GameOver com eventos

   focus() - o campo ganha o foco para ser digitado.
   setInterval() - faz com que uma determinada ação seja executada em um intervalo de tempo.
   attr() - adiciona um atributo
   clearInterval() - recebe o id do setInterval como parâmetro e para com a contagem
   one() - essa função escuta o evento apenas uma vez ao contrário do "on() - onde fica o tempo todo escutando o evento"
   */

   var tempoRestante = $("#tempo-digitacao").text();
   campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;
            console.log(tempoRestante);
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr("disabled",true);
                clearInterval(cronometroID);//para com a contagem assim que acabar o tempo
            }            
        },1000);
   });