
			// alert("Olá Mundo");
			// console.log("Olá mundo");
			// console.log(document);
			// console.log(document.querySelector("h1"));
			var titulo = document.querySelector(".titulo");
			console.log(titulo.textContent);
			titulo.textContent = "Aparecida Nutricionista";
			

			/*Aula 02*/

			var paciente = document.querySelector("#primeiro-paciente");

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
			}	

			if (altura <= 0 || altura >= 3.00) {
			    // console.log("Altura inválida!");
			    alturaEhValida = false;
			    tdImc.textContent = "Altura inválida!";
			}

			if(alturaEhValida && pesoEhValido){
				var imc = peso / (altura * altura);
				tdIMC.textContent = imc;
			}			
			
			// console.log(paciente);
			// console.log(tdPeso);
			// console.log(peso);
			// console.log(altura);