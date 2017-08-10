$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").toggle();//mostrando o spinner
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();//ao falhar mostra a mensagem de erro
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){//sempre escondendo executa a função, mesmo ela dando certo ou errado
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio ].texto);//texto é uma propriedade do objeto array, onde está a frase
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio ].tempo);
}

function buscaFrase(){
    $("#spinner").toggle();//mostrando o spinner
    var fraseId = $("#frase-id").val();
    //Enviando um objeto javascript com os dados
    var dados = {
        id: fraseId
    };
    $.get("http://localhost:3000/frases",dados,trocaFrase)//Esse dados é a variavel com o objeto criado com os dados solicitados
    .fail(function(){
        $("#erro").toggle();//ao falhar mostra a mensagem de erro
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    })
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

/**
 Aula 02 Buscando Frases Via Ajax 

 Para subir o servidor nodeJS, temos que ir na pasta onde está o arquivo
 package.json, rodar o npm install para baixar todas as dependências do projeto e ao final rodar o comando
 "npm start" para subir o servidor na porta 3000 http://localhost:3000/principal.html

 $.get() - Realiza a requisição de tipo GET
 data - Retorna a resposta da requisição de tipo GET que fizemos ao servidor 
 Math.random() - Retorna um numero relatorio
 Math.floor() - Arredonda o número para baixo

 RECEBENDO OS DADOS

 Quando a função $.get vai retornar dados para que sejam utilizados pelo usuário, é preciso colocar nos argumentos da 
 função que é chamada ao sucesso da requisição uma variável que irá conter os dados recebidos. Normalmente colocamos 
 um nome sematântico, como dados ou data, para indicar que aquele é o resultado obtido da requisição AJAX:

 // Como função anônima
$.get("http://localhost:3000/frases",function(dados){
    console.log(dados);
});

// Como função nomeada
$.get("http://localhost:3000/frases", imprimeConsole);
function imprimeConsole(dados){
    console.log(dados);
}

 Aula 03 Tratando erros e melhorando a experiência 

 .fail() - Recebe uma função anônima com o código que é executado quando um erro acontece.
 .always() - Essa função é executada depois da requisição AJAX devemos esconder o spinner,
 importante é que sempre devemos esconder o spinner, tanto faz se a requisição concluiu com sucesso ou falhou.

Aula 04 Enviando dados com AJAX

Aula 05 Eviando dados com POST

- O nosso servidor além da url /frases também tem disponível a url /placar , que se você acessar pelo navegador
 (atráves de um GET) ele irá te mostrar os dados um placar salvo.
 */