/*Aula 04 Eventos, Formulários e Criando Elementos*/

//addEventListener = escutador de eventos
//event.preventDefault() = previne o comportamento padrão de um evento
//value = pega o valor de em um campo
//createElement = cria um elemento HTML	
//appendChild = adiciona como filho o elemento passado como parâmetro
//reset() - limpa os dados do formulário, para não inserir um paciente igual
//push() - Para array, adiciona informaçãoes em um array
//innerHtml - Controla o html interno de um elemento
//remove() - remove elementos do HTML
//target - alvo que foi clicado
//parentNode - seleciona o pai do alvo clicado
//setTimeOut - aguardar a execução de uma função por um tempo determinado
//test() - testa oque o usuário está digitando.
//substr() - recebe dois parâmetros, fazedo com que ela devolva parte da string, com o tamanho definido nos parâmetros.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "Cadastrado com Sucesso"; //Limpa as mensagem de erro e adiciona a mensagem Cadastrado com Sucesso
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montatr(paciente);
    //Colocando as informações na tabela, adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //apaga as mensagens de erro insere as novas, conforme o usuário preenche o formulário
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montatr(paciente) {
    //Criando a nova linha, tr e td do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adicionando elemento dentro do outro
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/**
 Aula 06 Validação de formularios
 */

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}