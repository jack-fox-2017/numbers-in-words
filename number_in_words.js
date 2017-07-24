function toWord(number) {
  var word = [ '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan  belas'];

  if (number < 20) {
    return word[number];
  }
  else if (number < 100) {
    return toWord((number - (number % 10)) / 10) + ' puluh ' + toWord(number % 10)
  }
  else if (number < 1000) {
    return toWord((number - (number % 100)) / 100) + ' ratus ' + toWord(number % 100)
  }
  else if (number < 1000000) {
    return toWord((number - (number % 1000)) / 1000) + ' ribu ' + toWord(number % 1000)
  }
  else if (number < 1000000000) {
    return toWord((number - (number % 1000000)) / 1000000) + ' juta ' + toWord(number % 1000000)
  }
  else if (number < 1000000000000) {
    return toWord((number - (number % 1000000000)) / 1000000000) + ' milyar ' + toWord(number % 1000000000)
  }
  else if (number < 1000000000000000) {
    return toWord((number - (number % 1000000000000)) / 1000000000000) + ' triliun ' + toWord(number % 1000000000000)
  }
}

// Driver code
console.log(toWord(3));
console.log(toWord(19));
console.log(toWord(84));
console.log(toWord(245));
console.log(toWord(22670));
console.log(toWord(9999999));
console.log(toWord(9999999999));
console.log(toWord(989298999799694));

// Driver code
// console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }
