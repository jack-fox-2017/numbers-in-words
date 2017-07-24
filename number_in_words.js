function numberToWords(number) {
  // Your code here
  var word = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh',
              'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

  var ribu = Math.pow(10, 3);
  var juta = Math.pow(10, 6);
  var milyar = Math.pow(10, 9);
  var triliun = Math.pow(10, 12);

  if (number < 20) {
    return word[number];
  }

  else if (number < Math.pow(10, 2)) {
    return numberToWords((number - (number%10))/10) + ' puluh ' + numberToWords(number%10);
  }

  else if (number <200) {
    return 'seratus ' + numberToWords(number%100);
  }

  else if (number < Math.pow(10, 3)) {
    return numberToWords((number - (number%100))/100) + ' ratus ' + numberToWords(number%100);
  }

  else if (number < 2000) {
    return 'seribu ' + numberToWords(number%ribu);
  }

  else if (number < Math.pow(10, 6)) {
    return numberToWords((number - (number%ribu))/ribu) + ' ribu ' + numberToWords(number%ribu);
  }

  else if (number < Math.pow(10, 9)) {
    return numberToWords((number - (number%juta))/juta) + ' juta ' + numberToWords(number%juta);
  }

  else if (number < Math.pow(10, 12)) {
    return numberToWords((number - (number%milyar))/milyar) + ' milyar ' + numberToWords(number%milyar);
  }

  else if (number < Math.pow(10, 15)) {
    return numberToWords((number - (number%triliun))/triliun) + ' triliun ' + numberToWords(number%triliun);
  }

}

// Driver code
// console.log(numberToWords(1000000));
// console.log(numberToWords(999999999345325));
// console.log(numberToWords(4567654));
console.log(numberToWords(20));

module.exports = {
  numberToWords: numberToWords
}
