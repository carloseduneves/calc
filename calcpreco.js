




const calc = function(valor){
    let porcentagem = parseFloat(valor * (35 / 100));
    let finalValue = parseFloat(valor * 5 + porcentagem);

    return finalValue;
};


const btnCalcular = document.querySelector('.calcular').addEventListener('click', function(){
    let input = document.querySelector('.valor').value;
    let res = document.querySelector('.res').textContent = calc(input);
});



