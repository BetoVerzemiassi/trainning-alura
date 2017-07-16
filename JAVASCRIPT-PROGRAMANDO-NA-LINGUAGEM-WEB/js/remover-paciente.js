var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);

    // poderia fazer dessa maneira abaixo
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;//TR = paciente = remover
    
    // paiDoAlvo.remove();
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();//this palavra reservada do javascript a quem o evento está atrelado, o this faz referência ao paciente
//     });
// });