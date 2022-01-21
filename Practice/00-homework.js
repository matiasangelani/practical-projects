'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let noBinary = 0, decimal = 0; //'1101'

  for(let value of num)
    if(value > 1)
      noBinary = 1;
      
  if(noBinary){
    return "No es un número binario";
  }else {
    for(let i = 0; i < num.length; i++){
      decimal = decimal + num[i] * Math.pow(2, num.length - 1 - i);
    }
  }

  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrayBinary = [];

  while(num >= 1){
    arrayBinary.unshift(Math.floor(num % 2));
    num = Math.floor(num/2);
  }

  return arrayBinary.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}