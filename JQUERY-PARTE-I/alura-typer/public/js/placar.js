$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Alberto"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top();

    $("body").animate({
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent(); //a Função remove() está retirando de uma maneira muito bruta, vou utilizar o fadeOut()

    linha.fadeOut(1000); //Aqui escondemos a linha
    setTimeout(function() {
        linha.remove(); //Aqui excluimos definitivamente a linha
    }, 1000);
}

//jQuery parte II

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
    
        //Monta o objeto a ser criado, salva os dados que obtemos de cada linha dentro de um novo array      
        var score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);//adiciona dentro do placar com a função push

        var dados = {
            placar: placar
        };

        //Realiza a requição AJAX, gravando os dados.
        $.post("http://localhost:3000/placar",dados,function(){
            console.log("Placar sincronizado com sucesso");
        });
    });
}

/*
Curso Jquery Parte II

Aula 01 Animações com jQuery

show() - Mostra o conteúdo
hide() - Esconde o conteúdo
toggle() - Adiciona ou esconde um elemento
slideDown() - Realiza a transição de uma maneira mais suave, podemos passar por parâmetro para a função .slideDown(600);
slideToggle() - Essa função alterna entre as funções slideDown() e slideUp()
fadeOut() - Diminui a opacidade de um elemento aos poucos, até o seu total desaparecimento.
stop() - A animação que estiver acontecendo no momento é interrompida, e uma próxima é iniciada.

offset() - Ela nos dá a posição em que determinado elemento se encontra na página. Retorna a distância em que o elemento está
do topo e da esquerda da página. Se acessarmos o valor do topo (top), teremos o valor exato para onde queremos scrollar a página.

animate() - Função responsável por animação, recebe dois parâmetros, um objeto que contém as propriedades CSS a serem animadas
e os seus valores, e o TEMPO DE DURAÇÃO da animação.

scrollTop - Realiza o scroll, recebe um valor em pixels, que representa a posição da nossa página para onde desejamos scrollar a 
página.

hasClass() - Retorna true se um elemento possui ou não uma classe.

OBS: O jQuery possui a função is que permite consultar uma pseudo class. Toda vez que um elemento está com display diferente de none ele
ganha a pseudo classe :visible. A função is retorna true caso o elemento esteja visível. Se ele estiver visível, precisamos escondê-lo
e isso é feito através da função hide(). Para exibir o elemento, é usada a função show().

Exemplo: 

$('#botao-promocao').click(function() {

  var promocoes = $('.promocoes');
  if(promocoes.is(':visible')) {

    promocoes.hide();
  } else {
    promocoes.show();
  }

});

Então temos sempre que ter em mente que devemos remover um elemento após realizar o fadeOut(), já que essa função só faz
com que o elemento desaparecça da tela, mas ainda fique no html da página.

Assim como existem o slideUp, slideDown e slideToggle, existem funções semelhantes que executam o fade, o fadeIn, fadeOut 
e fadeToggle, respectivamente.



*/