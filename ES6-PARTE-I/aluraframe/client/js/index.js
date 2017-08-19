var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){   

    event.preventDefault();
    var tr = document.createElement('tr');

    /**
     A primeira vez que passarmos o forEach, teremos acesso ao primeiro elemento (#data), 
     nas vezes seguintes acessaremos a #quantidade e o #valor. Depois, criaremos um td 
     dinamicamente que não conterá nenhuma informação e informaremos que o conteúdo do 
     mesmo será campo.value. Com o appendChild, adicionaremos a td como filho.
     */

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    /**
     Ele terá criado uma td para cada campo. O que precisamos fazer é incluir uma tr na tabela.
     */
    
    var tdVolume = document.createElement('td');    
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    //limpa campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();//campo data ganha o foco
});