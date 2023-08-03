const inputBruto = document.querySelector('#brutoInput');
console.log(inputBruto);
const outputBruto = document.querySelector('#brutoOutput');

inputBruto.addEventListener("input", (e) => {
    let value = e.target.value;

    let dizimoCulto = (value*0.1).toFixed();
    let dizimoBeneficencia = ((value*0.1)/3).toFixed();
    let ofertaPatrimonio = (((value*0.1)/3)*2).toFixed();
    let total = +dizimoCulto + +dizimoBeneficencia + +ofertaPatrimonio;
    let restante = value - total;
    outputBruto.innerText = `R$${value} - Valor Bruto\n
    ----------------------------------\n
    Dízimos e Ofertas
    R$${dizimoCulto} - Culto\n
    R$${dizimoBeneficencia} - Beneficência\n
    R$${ofertaPatrimonio} - Patrimônio\n
    ----------------------------------\n
    Total à dizimar
    R$${total}
    ----------------------------------\n
    Sobra - seu salário real
    R$${restante}
    `
})