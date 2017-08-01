function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Alberto";
    var numPalavras = $("#contador-palavras").text(); 

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}  

function novaLinha(usuario,palavras){
    var linha = $("<tr>");//Função que cria elementos no HTML
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("smal").addClass("material-icons").text("delete");

    link.append(icone);
    
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);  
    
    return linha;
}

function removeLinha(){  
    e.preventDefault();
    $(this).parent().parent().remove();  
}