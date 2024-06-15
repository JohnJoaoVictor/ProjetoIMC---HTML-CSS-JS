
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function calcularFatorComorbidade(imc) {
if (imc < 18.5){
    fator = 10;
}
else if (imc => 18.5 && imc >= 24.9) {
    fator = 1;
}
else if (imc => 25.0 && imc >= 29.9) {
    fator = 6;
}
else if (imc => 30.0 && imc >= 34.9) {
    fator = 10;
}
else if (imc => 30.0 && imc >= 39.9) {
    fator = 20;
}
else {
    fator = 30;
}

}

function calcularPrecoA(plano, idade, imc) {
  switch (plano) {
      case 'basico':
          return 100 + (idade * 10 * (imc / 10));
      case 'standard':
          return (150 + (idade * 15)) * (imc / 10);
      case 'premium':
          return (200 - (imc * 10) + (idade * 20)) * (imc / 10);
  }

}

function calcularPrecoB(plano, imc, fator) {
  switch (plano) {
      case 'basico':
          return 100 + (fator * 10 * (imc / 10));
      case 'standard':
          return (150 + (fator * 15) * (imc / 10));
      case 'premium':
          return (200 - (imc * 10) + (fator * 20) * (imc / 10));
  }
  
}

function compararPlanos() {
  const idade = parseInt(document.getElementById('idade').value);
  const peso = parseInt(document.getElementById('peso').value);
  const altura = parseInt(document.getElementById('altura').value);

  const imc = calcularIMC(peso, altura);
  const fator = calcularFatorComorbidade(imc);

  const planos = ['basico', 'standard', 'premium'];

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>Plano</th>
                  <th>Operadora A</th>
                  <th>Operadora B</th>
                  <th>Mais Vantajoso</th>
              </tr>
          </thead>
          <tbody>
              ${planos.map(plano => {
                  const precoA = calcularPrecoA(plano, idade, imc).toFixed(2)
                  const precoB = calcularPrecoB(plano, idade, imc, fator).toFixed(2)
                  const vantajoso = precoA < precoB || precoA > precoB ? 'Operadora A' : 'Operadora B';
                  return `
                      <tr>
                          <td>${plano.charAt(0).toUpperCase() + plano.slice(1)}</td>
                          <td>R$ ${precoA}</td>
                          <td>R$ ${precoB}</td>
                          <td>${vantajoso}</td>
                      </tr>
                  `;
              }).join('')}
          </tbody>
      </table>
  `;
}
