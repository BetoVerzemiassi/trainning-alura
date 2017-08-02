function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Alberto"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
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

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").slideToggle(600);
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

Então temos sempre que ter em mente que devemos remover um elemento após realizar o fadeOut(), já que essa função só faz
com que o elemento desaparecça da tela, mas ainda fique no html da página.

Assim como existem o slideUp, slideDown e slideToggle, existem funções semelhantes que executam o fade, o fadeIn, fadeOut 
e fadeToggle, respectivamente.



*/