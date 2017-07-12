
			// alert("Olá Mundo");
			// console.log("Olá mundo");
			// console.log(document);
			// console.log(document.querySelector("h1"));
			var titulo = document.querySelector(".titulo");
			console.log(titulo.textContent);
			titulo.textContent = "Aparecida Nutricionista";
			

			/*Aula 02*/

			var paciente = document.querySelector("#primeiro-paciente");

			// var tdPeso = paciente.querySelector(".info-peso");
			// var tdAltura = paciente.querySelector(".info-altura");

			// var peso = tdPeso.textContent;
			// var altura = tdAltura.textContent;

			// var imc = peso / (altura * altura);
			// var tdImc = paciente.querySelector(".info-imc");
			// tdImc.textContent = imc;

			// // console.log(imc);

			// var tdIMC = paciente.querySelector(".info-imc");

			// var pesoEhValido = true;
			// var alturaEhValida = true;

			// if(peso <= 0 || peso >= 1000){
			// 	// console.log("Peso inválido!");
			// 	pesoEhValido = false;
			// 	tdImc.textContent = "Peso inválido!";
			// }	

			// if (altura <= 0 || altura >= 3.00) {
			//     // console.log("Altura inválida!");
			//     alturaEhValida = false;
			//     tdImc.textContent = "Altura inválida!";
			// }

			// if(alturaEhValida && pesoEhValido){
			// 	var imc = peso / (altura * altura);
			// 	tdIMC.textContent = imc;
			// }			
			
			// console.log(paciente);
			// console.log(tdPeso);
			// console.log(peso);
			// console.log(altura);

			/*Aula 03 Arrays, Loop e Estilos*/

			//querySelectorAll = busca todos os os elementos com a classe ou id
			//toFixed() = limita as casas decimais, entre parentese recebe o valor
			//style - manipula o estilo do elemento
			//backgroundColor - Modifica a cor de fundo do elemento HTML
			//classList.add - adicionando estilo ao elemento HTML

			var pacientes = document.querySelectorAll(".paciente");

			for(var i = 0; i < pacientes.length; i++){
				// console.log(pacientes[i]);

				var paciente = pacientes[i];

				var tdPeso = paciente.querySelector(".info-peso");
				var tdAltura = paciente.querySelector(".info-altura");

				var peso = tdPeso.textContent;
				var altura = tdAltura.textContent;

				var imc = peso / (altura * altura);
				var tdImc = paciente.querySelector(".info-imc");
				tdImc.textContent = imc;

				// console.log(imc);

				var tdIMC = paciente.querySelector(".info-imc");

				var pesoEhValido = true;
				var alturaEhValida = true;

				if(peso <= 0 || peso >= 1000){
					// console.log("Peso inválido!");
					pesoEhValido = false;
					tdImc.textContent = "Peso inválido!";
					// paciente.style.backgroundColor = "lightcoral";
					paciente.classList.add("paciente-invalido");
				}	

				if (altura <= 0 || altura >= 3.00) {
				    // console.log("Altura inválida!");
				    alturaEhValida = false;
				    tdImc.textContent = "Altura inválida!";
				    // paciente.style.backgroundColor = "lightcoral";
				    paciente.classList.add("paciente-invalido");
				}

				if(alturaEhValida && pesoEhValido){
					var imc = peso / (altura * altura);
					tdIMC.textContent = imc.toFixed(2);
				}		
			}


			/*Aula 04 Eventos, Formulários e Criando Elementos*/

			//addEventListener = escutador de eventos
			//event.preventDefault() = previne o comportamento padrão de um evento
			//value = pega o valor de em um campo
			//createElement = cria um elemento HTML	
			//appendChild = adiciona como filho o elemento passado como parâmetro

			var botaoAdicionar = document.querySelector("#adicionar-paciente");
			botaoAdicionar.addEventListener("click", function(event){
				event.preventDefault();

				var form = document.querySelector("#form-adiciona");

				//Capturando os valores
				var nome = form.nome.value;
				var peso = form.peso.value;
				var altura = form.altura.value;
				var gordura = form.gordura.value;

				//Criando a nova linha
				var pacienteTr  = document.createElement("tr");

				//Criando as TDs para cada item
				var nomeTd = document.createElement("td");
				var pesoTd = document.createElement("td");
				var alturaTd = document.createElement("td");
				var gorduraTd = document.createElement("td");
				var imcTd = document.createElement("td");

				//Colocando os dados nas TDs
				nomeTd.textContent = nome;
				pesoTd.textContent = peso;
				alturaTd.textContent = altura;
				gorduraTd.textContent = gordura;

				//Adicionando elemento dentro do outro
				pacienteTr .appendChild(nomeTd);
				pacienteTr .appendChild(pesoTd);
				pacienteTr .appendChild(alturaTd);
				pacienteTr .appendChild(gorduraTd);

				//Colocando as informações na tabela
				var tabela = document.querySelector("#tabela-pacientes");
    			tabela.appendChild(pacienteTr);
			});


				/*
				Qual código Javascript abaixo cria uma <div> como esta :
					<div>
					    <h1 class="titulo"> Mirror Fashion </h1>
					    <p> Uma loja de roupa fantástica</p>
					</div>
				*/
				
				var div = document.createElement("div");
				var h1 = document.createElement("h1");
				h1.classList.add("titulo");
				h1.textContent = "Mirror Fashion";

				var p = document.createElement("p");
				p.textContent = "Uma loja de roupa fantástica";

				div.appendChild(h1);
				div.appendChild(p);


				/*
				Para cada evento existente no JavaScript, há a propriedade 
				on + nomeDoEvent. No caso, temos onclick para o evento click, 
				onmouseover para o evento mouseover e assim por diante. Nesse caso, 
				a função que desejamos executar é atribuída direto na propriedade. 
				No entanto, essa forma tem uma limitação, como estamos guardando a 
				função em uma propriedade, se adicionarmos outra função, essa sobrescreverá a anterior.


				<button id="botao">clique-me</button>
				<script>

				    var botao = document.querySelector('#botao');

				    function botaoHandler() {

				        alert('Botão clicado');
				    }

				     function outroHandler() {

				        alert('Botão clicado também!');
				    }


				    botao.onclick = botaoHandler;
				    botao.onclick = outroHandler; // substitui botaoHandler
				</script>

				Sendo assim, a boa prática é trabalhar com addEventListener() mesmo que você
				só queria adicionar um único evento. Porque mais tarde, se outro desenvolvedor
				quiser adicionar outro evento para o mesmo elemento, não corremos o risco de 
				substituir a função já associada por outra.

				*/

