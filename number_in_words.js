function numberToWords(number) {
  // Your code here
  let arr01 = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];

  if (number <= 11){
    return arr01[number];
  }
  if(number >=12 && number <=19){
    let num = number % 10;
    return numberToWords(num) + ' ' + 'belas';
  }
  if(number >= 20 && number <= 99){
    let num = Math.floor(number / 10);
    let num2 = number % 10;
    return numberToWords(num) + ' ' + 'puluh' + ' ' + numberToWords(num2);
  }
  if(number >= 100 && number <= 999){
    let num = Math.floor(number / 100);
    let num2 = number % 100;
    if(num===1){
      return 'seratus' + ' ' + numberToWords(num2);
    }
    return numberToWords(num) + ' ' + 'ratus' + ' ' + numberToWords(num2);
  }
  if(number >= 1000 && number <= 9999){
    let num = Math.floor(number / 1000);
    let num2 = number % 1000;
    if(num===1){
      return 'seribu' + ' ' + numberToWords(num2);
    }
    return numberToWords(num) + ' ' + 'ribu' + ' ' + numberToWords(num2);
  }
  if(number >= 10000 && number <=99999){
    let num = Math.floor(number / 10000);
    let num2 = number % 10000;
    if(num===1){
      return 'sepuluh ribu' + ' ' + numberToWords(num2);
    }
    else if(num>1 && num<10){
      return numberToWords(num) + ' ' + 'puluh' + ' ' + numberToWords(num2);
    }
    return numberToWords(num) + ' ' + 'puluh ribu' + ' ' + numberToWords(num2);
  }
}

// Driver code
//console.log(numberToWords(1000000));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(9999));
//console.log(numberToWords(99999));

module.exports = {
  numberToWords: numberToWords
}
