var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

/*
    Aula 08 Filtrando uma tabela com Regex

    var expressao = new RegExp(this.value, "i"); 
    //busca o conteudo de texto digitado no campo this.value, primeiro parâmetro é  padrão, 
    (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais 
    flags (representando como queremos que a expressão regular busque)

    O modificar "i" é para indicar que estamos buscando por "case-insensitive"

    OUTRA FORMA DE FAZER A COMPARAÇÃO "SEM UTILIAR EXPERSSÕES REGULARES"

    Usando a função substr, que recebe dois parâmetros, fazedo com que ela devolva parte da string,
    com o tamanho definido nos parâmetros.

    Exemplo: var string = "Alura";
             var resultado = strin.substr(1,4);//resultado = lur


    var comparavel = nome.substr(0, this.value.length);
    if (!(this.value == comparavel)) {
        paciente.classList.add("invisivel");
    } else{
        paciente.classList.remove("invisivel");
    }

    
    //distinção entre letras maiúsculas e minúsculas
    
    var comparavel = nome.substr(0, this.value.length);
    var comparavelMinusculo = comparavel.toLowerCase();
    var valorDigitadoMinusculo = this.value.toLowerCase();
    
    if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
        paciente.classList.add("invisivel");
    } else{
        paciente.classList.remove("invisivel");
    }

*/