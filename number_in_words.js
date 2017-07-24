function numberToWords(number) {
  // Your code here
  var numStr = number.toString()
  var digit1 = numStr.charAt(0)
  var digit2 = numStr.charAt(1)
  var digit3 = numStr.charAt(2)

  var words = [
    [0,''],
    [1,'satu'],
    [2,'dua'],
    [3, 'tiga'],
    [4, 'empat'],
    [5, 'lima'],
    [6, 'enam'],
    [7, 'tujuh'],
    [8, 'delapan'],
    [9, 'sembilan'],
    [10, 'sepuluh'],
    [11, 'sebelas'],
    [12, 'dua belas'],
    [13, 'tiga belas'],
    [14, 'empat belas'],
    [15, 'lima belas'],
    [16, 'enam belas'],
    [17, 'tujuh belas'],
    [18, 'delapan belas'],
    [19, 'sembilan belas']
  ]

  // 0-19
  if (number>0 && number<=19) {
    return words[number][1]
  }
  // 20-99
  else if (number>=20 && number<=99) {
    return words[digit1][1] + ' puluh ' + words[digit2][1]
  }
  // 100-999
  else if (number>=100 && number<=999) {
    // seratusan
    if (digit1==1 && digit2==0 && digit3==0) {
      return 'seratus'
    }
    else if (digit1==1 && (digit2+digit3)<=19) {
      return 'seratus ' + words[digit2+digit3][1]
    }
    else if (digit1==1) {
      return 'seratus ' + words[digit2][1] + ' puluh ' + words[digit3][1]
    }
    // 200-999
    else if (digit2==0 && digit3==0) {
      return words[digit1][1] + ' ratus'
    }
    else if ((digit2+digit3)<=19) {
      return words[digit1][1] + ' ratus ' + words[digit2+digit3]
    }
    else {
      return words[digit1][1] + ' ratus ' + words[digit2][1] + ' puluh ' + words[digit3][1]
    }
  }

}

// Driver code
// console.log(numberToWords(1000000));
console.log(1, numberToWords(1));
console.log(19, numberToWords(19));
console.log(20, numberToWords(20));
console.log(25, numberToWords(25));
console.log(99, numberToWords(99));
console.log(100, numberToWords(100));
console.log(119, numberToWords(119));
console.log(200, numberToWords(200));
console.log(981, numberToWords(981));
console.log(999, numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
