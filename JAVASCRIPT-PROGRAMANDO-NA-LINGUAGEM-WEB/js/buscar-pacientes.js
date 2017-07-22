var botaoAdicionar = document.querySelector("#buscar-pacientes");

    botaoAdicionar.addEventListener("click", function(){
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
        xhr.addEventListener("load", function(){
            var erroAjax = document.querySelector("#erro-ajax");
            if(xhr.status == 200){//verificando o status da requisição feita
                erroAjax.classList.add("invisivel");
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);

                //Aqui estamos iterando sobre o array de pacientes e chamando a função de adiconar paciente na tabela
                pacientes.forEach(function(paciente) {
                    adicionaPacienteNaTabela(paciente);
                });
            }else{
                console.log(xhr.status);
                console.log(xhr.responseText);                
                erroAjax.classList.remove("invisivel");
            }            
        });
        xhr.send();//realiza a requisição
    });



/**
 Aula 09 Buscando pacientes com AJAX

 XMLHttpRequest() - é um objeto do JavaScript responsável por fazer requisições HTTP.
 open() - abre a conexão que queremos fazer
 load - assim que carregada a requisição
 responseText - mostra o resultado da requisição
 parse - converte o JSON para um array de objetos
 status - informa o status da requisição se houve algum erro como 404, 201, 402, 503 e etc 
 200 - Significa que a requisção foi realizada sem erros

Para ele realizar as requisições, devemos ensiná-lo e configurá-lo para fazer as requisições 
do jeito que queremos. Faremos isso com alguns de seus métodos.

O primeiro deles, o método open, é onde diremos qual tipo de requisição queremos fazer (GET) 
e para onde. Passamos esses dois valores por parâmetro para ele:

// buscar-pacientes.js

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
});

Essa linha somente configura o endereço que será acessado, verifica se o mesmo está correto, existe, 
configurando a requisição. Para realizar a requisição em si, precisamos chamar o método send:

//Obtendo e exibindo a resposta da requisição

Para poder exibir os dados, depois que enviamos a requisição, devemos escutar um evento específico que é 
acionado quando a requisição termina, quando a sua resposta for carregada. Ao escutar esse evento, conseguiremos
carregar essa resposta da requisição, justamente os nossos dados. Esse evento é o "load", evento característico do 
XMLHttpRequest:

E para acessar os dados da resposta, acessamos a propriedade "responseText" do XMLHttpRequest. Para testar, podemos 
guardá-la em uma variável imprimi-la no console do navegador:

--------------------------------------------------------------

O XMLHtttpRequest é objeto responsável por fazer requisições HTTP com o Javascript.

Olhando as afirmativas, sabemos sim que ele deve ser configurado anteriormente com a função .open(), 
que ele pode trafegar diversos tipos de dados e não somente o XML ( ele tem esse nome graças a um vestígio histórico), 
e a requisição só é enviada mesmo após chamarmos o método .send().

 */