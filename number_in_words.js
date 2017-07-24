function numberToWords(number) {
  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];

  if (number < 20) {
    return words[number];
  }
  else if (number < 100) {
    return numberToWords((number - (number % 10))/10) + ' puluh ' + numberToWords(number % 10)
  }
  else if (number < 200) {
    return 'seratus ' + numberToWords(number % 100)
  }
  else if (number < 1000) {
    return numberToWords((number - (number % 100))/100) + ' ratus ' + numberToWords(number % 100)
  }
  else if (number < 2000) {
    return 'seribu ' + numberToWords(number % 1000)
  }
  // else if (number < 10000) {
  //   return numberToWords((number - (number % 1000))/1000) + ' ribu ' + numberToWords(number % 1000)
  // }
  // else if (number < 20000) {
  //   return 'ribu ' + numberToWords(number % 10000)
  // }
  else if (number < 1000000) {
    return numberToWords((number - (number % 1000))/1000) + ' ribu ' +
    numberToWords(number % 1000)
  }
  else if (number < 1000000000) {
    return numberToWords((number - (number % 1000000))/1000000) + ' juta ' +
    numberToWords(number % 1000000)
  }
  else if (number < 1000000000000) {
    return numberToWords((number - (number % 1000000000))/1000000000) + ' milyar ' + numberToWords (number % 1000000000)
  }
  else if (number < 1000000000000000) {
    return numberToWords((number - (number % 1000000000000))/1000000000000) + ' triliun ' + numberToWords (number % 1000000000000)
  }

}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(19));
console.log(numberToWords(89));
console.log(numberToWords(899));
console.log(numberToWords(125));
console.log(numberToWords(1000));
console.log(numberToWords(3002));
console.log(numberToWords(1002));
console.log(numberToWords(1999));
console.log(numberToWords(10988));
console.log(numberToWords(23000));
console.log(numberToWords(999999));
console.log(numberToWords(199000));
console.log(numberToWords(19000));
console.log(numberToWords(909000));
console.log(numberToWords(999999999));
console.log(numberToWords(9909000000));
console.log(numberToWords(199999999999999));
console.log(numberToWords(999999999));


module.exports = {
  numberToWords: numberToWords
}
