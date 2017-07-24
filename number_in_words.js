function numberToWords(number) {
  // Your code here
  var num = [
    [0, ''],
    [1, 'satu'],
    [2, 'dua'],
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
  var forIndex = number.toString();

  if (forIndex.length == 15) {
    var depan = forIndex[0] + forIndex[1] + forIndex[2];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'triliun ' + numberToWords(number - (toInt * 1000000000000))
  }
  if (forIndex.length == 14) {
    var duaDepan = forIndex[0] + forIndex[1];
    var toInt2 = parseInt(duaDepan);
    return numberToWords(toInt2) + 'triliun ' + numberToWords(number - (toInt2 * 1000000000000))
  }
  if (forIndex.length == 13) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'triliun ' + numberToWords(number - (toInt * 1000000000000))
  }
  if (forIndex.length == 12) {
    var depan = forIndex[0] + forIndex[1] + forIndex[2];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'miliar ' + numberToWords(number - (toInt * 1000000000))
  }
  if (forIndex.length == 11) {
    var duaDepan = forIndex[0] + forIndex[1];
    var toInt2 = parseInt(duaDepan);
    return numberToWords(toInt2) + 'miliar ' + numberToWords(number - (toInt2 * 1000000000))
  }
  if (forIndex.length == 10) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'miliar ' + numberToWords(number - (toInt * 1000000000))
  }
  if (forIndex.length == 9) {
    var depan = forIndex[0] + forIndex[1] + forIndex[2];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'juta ' + numberToWords(number - (toInt * 1000000))
  }
  if (forIndex.length == 8) {
    var duaDepan = forIndex[0] + forIndex[1];
    var toInt2 = parseInt(duaDepan);
    return numberToWords(toInt2) + 'juta ' + numberToWords(number - (toInt2 * 1000000))
  }
  if (forIndex.length == 7) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'juta ' + numberToWords(number - (toInt * 1000000))
  }
  if (forIndex.length == 6) {
    var depan = forIndex[0] + forIndex[1] + forIndex[2];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'ribu ' + numberToWords(number - (toInt * 1000))
  }
  if (forIndex.length == 5) {
    var duaDepan = forIndex[0] + forIndex[1];
    var toInt2 = parseInt(duaDepan);
    return numberToWords(toInt2) + 'ribu ' + numberToWords(number - (toInt2 * 1000))
  }
  if (forIndex.length == 4) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    if (toInt === 1) {
      return 'seribu ' + numberToWords(number - (toInt * 1000))
    }
    return numberToWords(toInt) + 'ribu ' + numberToWords(number - (toInt * 1000))
  }
  if (forIndex.length == 3) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    if (toInt === 1) {
      return 'seratus ' + numberToWords(number - (toInt * 100))
    }
    return numberToWords(toInt) + 'ratus ' + numberToWords(number - (toInt * 100))
  }
  if (forIndex.length == 2 && number > 19) {
    var depan = forIndex[0];
    var toInt = parseInt(depan);
    return numberToWords(toInt) + 'puluh ' + numberToWords(number - (toInt * 10))
  }
  else {
    for (var i = 0; i < num.length; i++) {
      if (number == 0) {
        return num[0][1]
      }
      if (number == num[i][0]) {
        return num[i][1] + ' '
      }
    }
  }
}

// Driver code
console.log('5 = ' + numberToWords(5));
console.log('95 = ' + numberToWords(95));
console.log('243 = ' + numberToWords(243));
console.log('143 = ' + numberToWords(143));
console.log('4200 = ' + numberToWords(4200));
console.log('1343 = ' + numberToWords(1343));
console.log('71000 = ' + numberToWords(71000));
console.log('13473 = ' + numberToWords(13473));
console.log('670000 = ' + numberToWords(670000));
console.log('130000 = ' + numberToWords(130000));
console.log('6702000 = ' + numberToWords(6702000));
console.log('1300400 = ' + numberToWords(1300400));
console.log('76702000 = ' + numberToWords(76702000));
console.log('13004400 = ' + numberToWords(13004400));
console.log('897670200 = ' + numberToWords(897670200));
console.log('132567040 = ' + numberToWords(130567040));
console.log('8976702400 = ' + numberToWords(8976702400));
console.log('1306567040 = ' + numberToWords(1306567040));
console.log('89767330200 = ' + numberToWords(89767330200));
console.log('13056755040 = ' + numberToWords(13056755040));
console.log('111111111110 = ' + numberToWords(111111111110));
console.log('999000000000 = ' + numberToWords(999000000000));
console.log('1111111111110 = ' + numberToWords(1111111111111));
console.log('9990000000000 = ' + numberToWords(9990000000000));
console.log('11111111111100 = ' + numberToWords(11111111111100));
console.log('99900000000010 = ' + numberToWords(99900000000010));
console.log('111111111110110 = ' + numberToWords(111111111110110));
console.log('999000000000000 = ' + numberToWords(999000000000000));




module.exports = {
  numberToWords: numberToWords
}
