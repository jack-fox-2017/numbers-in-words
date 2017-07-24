function numberToWords(number) {
  // Your code here

  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas', 'tiga belas', 'empat belas', 'lima belas','enam belas','tujuh belas','delapan belas','sembilan belas']


  if (number<20) {
    return words[number]
  }
  else if (number<100) {
    return numberToWords((number-(number%10))/10) + ' puluh ' + numberToWords(number%10)
  }
  else if (number<200) {
    return 'seratus ' + numberToWords(number%100)
  }
  else if (number<1000) {
    return numberToWords((number-(number%100))/100) + ' ratus ' + numberToWords(number%100)
  }
  else if (number<2000) {
    return 'seribu ' + numberToWords(number%1000)
  }
  // else if (number<10000) {
  //   return numberToWords((number-(number%1000))/1000) + ' ribu ' + numberToWords(number%1000)
  // }
  // else if (number<100000) {
  //   return numberToWords((number-(number%1000))/1000) + ' ribu ' + numberToWords(number%1000)
  // }
  else if (number<1000000) {
    return numberToWords((number-(number%1000))/1000) + ' ribu ' + numberToWords(number%1000)
  }
  // else if (number<10000000) {
  //   return numberToWords((number-(number%1000000))/1000000) + ' juta ' + numberToWords(number%1000000)
  // }
  // else if (number<100000000) {
  //   return numberToWords((number-(number%1000000))/1000000) + ' juta ' + numberToWords(number%1000000)
  // }
  else if (number<1000000000) {
    return numberToWords((number-(number%1000000))/1000000) + ' juta ' + numberToWords(number%1000000)
  }
  // else if (number<10000000000) {
  //   return numberToWords((number-(number%1000000000))/1000000000) + ' milyar ' + numberToWords(number%1000000000)
  // }
  // else if (number<100000000000) {
  //   return numberToWords((number-(number%1000000000))/1000000000) + ' milyar ' + numberToWords(number%1000000000)
  // }
  else if (number<1000000000000) {
    return numberToWords((number-(number%1000000000))/1000000000) + ' milyar ' + numberToWords(number%1000000000)
  }
  // else if (number<10000000000000) {
  //   return numberToWords((number-(number%1000000000000))/1000000000000) + ' triliun ' + numberToWords(number%1000000000000)
  // }
  // else if (number<100000000000000) {
  //   return numberToWords((number-(number%1000000000000))/1000000000000) + ' triliun ' + numberToWords(number%1000000000000)
  // }
  else if (number<1000000000000000) {
    return numberToWords((number-(number%1000000000000))/1000000000000) + ' triliun ' + numberToWords(number%1000000000000)
  }

}

// Driver code
// console.log(numberToWords(1000000));
console.log(1, numberToWords(1));
console.log(19, numberToWords(19));
console.log('----------------------------------');

console.log(20, numberToWords(20));
console.log(25, numberToWords(25));
console.log(99, numberToWords(99));
console.log('----------------------------------');


console.log(100, numberToWords(100));
console.log(119, numberToWords(119));
console.log(120, numberToWords(120));
console.log(125, numberToWords(125));
console.log('----------------------------------');


console.log(200, numberToWords(200));
console.log(981, numberToWords(981));
console.log(999, numberToWords(999));
console.log('----------------------------------');


console.log(1000, numberToWords(1000));
console.log(1200, numberToWords(1200));
console.log(1220, numberToWords(1220));
console.log(1225, numberToWords(1225));
console.log('----------------------------------');


console.log(2000, numberToWords(2000));
console.log(2100, numberToWords(2100));
console.log(2230, numberToWords(2230));
console.log(2999, numberToWords(2999));
console.log(9999, numberToWords(9999));
console.log('----------------------------------');


console.log(10000, numberToWords(10000));
console.log(12345, numberToWords(12345));
console.log('----------------------------------');


console.log(20000, numberToWords(20000));
console.log(99999, numberToWords(99999));
console.log('----------------------------------');


console.log(100000, numberToWords(100000));
console.log(100001, numberToWords(100001));
console.log(120000, numberToWords(120000));
console.log(290000, numberToWords(290000));
console.log(999999, numberToWords(999999));
console.log('----------------------------------');


console.log(1000000, numberToWords(1000000));
console.log(2000000, numberToWords(2000000));
console.log(2999999, numberToWords(2999999));
console.log(9999999, numberToWords(9999999));
console.log('----------------------------------');


console.log(10000000, numberToWords(10000000));
console.log(20000000, numberToWords(20000000));
console.log(99999999, numberToWords(99999999));
console.log('----------------------------------');


console.log(100000000, numberToWords(100000000));
console.log(200000000, numberToWords(200000000));
console.log(999999999, numberToWords(999999999));
console.log('----------------------------------');


console.log(1000000000, numberToWords(1000000000));
console.log(2000000000, numberToWords(2000000000));
console.log(9999999999, numberToWords(9999999999));
console.log('----------------------------------');


console.log(10000000000, numberToWords(10000000000));
console.log(20000000000, numberToWords(20000000000));
console.log(99999999999, numberToWords(99999999999));
console.log('----------------------------------');


console.log(100000000000, numberToWords(100000000000));
console.log(200000000000, numberToWords(200000000000));
console.log(999999999999, numberToWords(999999999999));
console.log('----------------------------------');


console.log(1000000000000, numberToWords(1000000000000));
console.log(2000000000000, numberToWords(2000000000000));
console.log(9999999999999, numberToWords(9999999999999));
console.log('----------------------------------');


console.log(10000000000000, numberToWords(10000000000000));
console.log(20000000000000, numberToWords(20000000000000));
console.log(99999999999999, numberToWords(99999999999999));
console.log('----------------------------------');


console.log(100000000000000, numberToWords(100000000000000));
console.log(200000000000000, numberToWords(200000000000000));
console.log(999999999999999, numberToWords(999999999999999));


module.exports = {
  numberToWords: numberToWords
}
