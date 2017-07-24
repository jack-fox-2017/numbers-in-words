function numberToWords(number) {
  var arr = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  var arr2 = ['seratus','seribu','sepuluh ribu','seratus ribu']

  if (number <=11) {
    return arr[number];
  }
  else if (number <= 19) {
    var num = number % 10;
    return numberToWords(num) + ' ' + 'belas'
  }
  else if (number <=99) {
    var num = Math.floor(number / 10);
    var num2 = number % 10;
    return numberToWords(num) + ' '+ 'puluh' + ' ' + numberToWords(num2)
  }
  else if (number == 100){
    return arr2[0]
  }
  else if (number <=999) {
    var num = Math.floor(number / 100);
    var num2 = Math.floor(number % 100);
    return numberToWords(num) + ' '+ 'ratus' + ' ' + numberToWords(num2)
  }
  else if (number <=1000){
    return arr2[1]
  }
  else if (number <=9999) {
    var num = Math.floor(number / 1000);
    var num2 = Math.floor(number % 1000);
    return numberToWords(num) + ' '+ 'ribu' + ' ' + numberToWords(num2)
  }
  else if (number <=10000) {
    return arr2[2]
  }
  else if (number <=99999) {
    var num = Math.floor(number / 10000);
    var num2 = Math.floor(number % 10000);
    return numberToWords(num) + ' '+ 'puluh ribu' + ' ' + numberToWords(num2)
  }
  else if (number <=100000) {
    return arr2[3]
  }
  else if (number <=999999) {
    var num = Math.floor(number / 100000);
    var num2 = Math.floor(number % 10000);
    return numberToWords(num) + ' '+ 'ratus' + ' ' + numberToWords(num2)
  }


}

// Driver code
console.log(numberToWords(1250));

module.exports = {
  numberToWords: numberToWords
}
