document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); 

const idade = parseInt(document.getElementById('idade').value);
console.log(idade);

const peso = parseFloat(document.getElementById('idade').value); //valores que são inseridos de acordo com o que o usuário digita
console.log(peso)

const altura = parseFloat(document.getElementById('idade').value);
console.log(altura)

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2); // Calculo do IMC

const planoSaudeA = calculoPlanoA(idade, imc);
const planoSaudeB = calculoPlanoB(imc);

mostrarResultado(planoSaudeA, planoSaudeB);

});


function calculoPlanoA(idade, imc) { //calculo do Plano de Saúde A utilizando os parâmetros (idade, imc)

   const basico = 100 + (idade * 10 * (imc / 10));
   const standart = (150 + (idade * 15)) * (imc / 10);
   const premium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

   return {basico, standart, premium };
}

function calculoPlanoB(imc) { //mesma coisa do calculoPlanoA, só que utilizando o parâmetro(imc)

   let fatorcomor;

   if (imc <= 18,5) {
    fatorcomor = 10;
   }
   else if (imc > 18,5 && imc <= 24,9) {
    fatorcomor = 1;
   }
   else if (imc > 25,0 && imc <= 29,9) {
    fatorcomor = 6;
   }
   else if (imc > 30,0 && imc <= 34,9) {
    fatorcomor = 10;
   }
   else if (imc > 35,0 && imc <= 39,9) {
    fatorcomor = 20;
   }
   else {
    fatorcomor = 30;
   }

   const basico = 100 + (fatorcomor * 10 * (imc / 10));
   const standart = (150 + (fatorcomor * 15)) * (imc / 10);
   const premium = (200 - (imc * 10) + (fatorcomor * 20)) * (imc / 10);

   return { basico, standart, premium };
}

function mostrarResultado(planoSaudeA, planoSaudeB) {
   const resultadoDiv = document.getElementById('resultado');

   melhorBasico = planoSaudeA.basico < planoSaudeB.basico ? 'Operadora A' : 'OperadoraB';
   melhorStandart = planoSaudeA.standart < planoSaudeB.standart ? 'Operadora A' : 'OperadoraB';
   melhorPremium = planoSaudeA.premium < planoSaudeB.premium ? 'Operadora A' : 'OperadoraB';

   resultadoDiv.innerHTML = `
    <h2 id="title">Resultado Dos Planos</h2>
      <table class="table">
        <thead>
        <tr id="tr-head">
            <th class="th-head">Plano</th>
            <th class="th-head">Operadora A</th> 
            <th class="th-head">Operadora B</th>
        </tr>
        </thead>
        
        <tbody>
            <tr>
                <td id="basico">Plano Básico</td>
                <td class="resultbasico">
                  R$ ${planoSaudeA.basico.toFixed(2)}
                  ${melhorBasico === 'Operadora A' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                </td>
                <td class="resultbasico">
                  R$ ${planoSaudeB.basico.toFixed(2)}
                  ${melhorBasico === 'Operadora B' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                </td>
            </tr>

             <tr>
                  <td id="standart">Standard</td>
                  <td class="resultstandart">
                      R$ ${planoSaudeA.standart.toFixed(2)}
                      ${melhorStandart === 'Operadora A' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                  </td>
                  <td class="resultstandart">
                      R$ ${planoSaudeB.standart.toFixed(2)}
                      ${melhorStandart === 'Operadora B' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                  </td>
              </tr>
              <tr>
                  <td id="premium">Premium</td>
                  <td class="resultpremium">
                      R$ ${planoSaudeA.premium.toFixed(2)}
                      ${melhorPremium === 'Operadora A' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                  </td>
                  <td class="resultpremium">
                      R$ ${planoSaudeB.premium.toFixed(2)}
                      ${melhorPremium === 'Operadora B' ? '<span class="badge badge-success">Melhor Plano</span>' : ''}
                  </td>
              </tr>
        </tbody>
      </table>

      `
}
