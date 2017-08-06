$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio ].texto);//texto é uma propriedade do objeto array, onde está a frase
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio ].tempo);
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
 */