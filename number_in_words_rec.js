function numberToWords(number,temp) {
  // Your code here
  var digit = [9,8,7,6,5,4,3,2,1,0];
  var word = ['sembilan','delapan','tujuh','enam','lima','empat','tiga','dua','satu','kosong']
  if(temp===undefined){var temp = [];}
  var perkalian =0;
  var num = number.toString()
  if(num.length>14) {
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*100000000000
        if (digit[i]===1) {
          temp.push('seratus');
        } else {
          temp.push(word[i]);
          temp.push('ratus');
        }
      }
    }
  } else if(num.length>13) {
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*10000000000000
        if (digit[i]===1 && num[1]==='0') {
          temp.push('sepuluh milyar');
        } else if (digit[i]===1 && num[1]==='1') {
          number = number - num[1]*1000000000000
          temp.push('sebelas milyar');
        } else if (digit[i]===1){
          for (var i = 0; i < digit.length; i++) {
            if(num[1]===digit[i].toString()){
              number = number - num[1]*1000000000000
              temp.push(word[i]);
            }
          }
          temp.push('belas Triliyun');
        } else {
        temp.push(word[i]);
        temp.push('puluh');
        }
      }
    }
  } else if(num.length>12) {;
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*1000000000000
        temp.push(word[i]);
        temp.push('Triliyun');
      }
      //console.log('number ',number);
    }
  } else if(num.length>11) {
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*100000000000
        if (digit[i]===1) {
          temp.push('seratus');
        } else {
          temp.push(word[i]);
          temp.push('ratus');
        }
      }
    }
  } else if(num.length>10) {
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*10000000000
        if (digit[i]===1 && num[1]==='0') {
          temp.push('sepuluh milyar');
        } else if (digit[i]===1 && num[1]==='1') {
          number = number - num[1]*1000000000
          temp.push('sebelas milyar');
        } else if (digit[i]===1){
          for (var i = 0; i < digit.length; i++) {
            if(num[1]===digit[i].toString()){
              number = number - num[1]*1000000000
              temp.push(word[i]);
            }
          }
          temp.push('belas milyar');
        } else {
        temp.push(word[i]);
        temp.push('puluh');
        }
      }
    }
  } else if(num.length>9) {;
    for (var i = 0; i < digit.length; i++) {
      if(num[0]===digit[i].toString()){
        number = number - digit[i]*1000000000
        temp.push(word[i]);
        temp.push('Milyar');
      }
      //console.log('number ',number);
    }
  } else if(num.length>8) {
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*100000000
          if (digit[i]===1) {
            temp.push('seratus');
          } else {
            temp.push(word[i]);
            temp.push('ratus');
          }
        }

      }
    } else if(num.length>7) {
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*10000000
          if (digit[i]===1 && num[1]==='0') {
            temp.push('sepuluh juta');
          } else if (digit[i]===1 && num[1]==='1') {
            number = number - num[1]*1000000
            temp.push('sebelas juta');
          } else if (digit[i]===1){
            for (var i = 0; i < digit.length; i++) {
              if(num[1]===digit[i].toString()){
                number = number - num[1]*1000000
                temp.push(word[i]);
              }
            }
            temp.push('belas juta');
          } else {
          temp.push(word[i]);
          temp.push('puluh');
          }
        }
      }
    } else if(num.length>6) {;
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*1000000
          temp.push(word[i]);
          temp.push('juta');
        }
        //console.log('number ',number);
      }
    } else if(num.length>5) {;
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*100000
          if (digit[i]===1) {
            temp.push('seratus');
          } else {
            temp.push(word[i]);
            temp.push('ratus');
          }
        }
        //console.log('number ',number);
      }
    } else if(num.length>4) {
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*10000
          if (digit[i]===1 && num[1]==='0') {
            temp.push('sepuluh ribu');
          } else if (digit[i]===1 && num[1]==='1') {
            number = number - num[1]*1000
            temp.push('sebelas ribu');
          } else if (digit[i]===1){
            for (var i = 0; i < digit.length; i++) {
              if(num[1]===digit[i].toString()){
                number = number - num[1]*1000
                temp.push(word[i]);
              }
            }
            temp.push('belas ribu');
          } else {
          temp.push(word[i]);
          temp.push('puluh ribu');
          }
        }
      }
    } else if(num.length>3) {;
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*1000
          if (digit[i]===1) {
            temp.push('seribu');
          } else {
            temp.push(word[i]);
            temp.push('ribu');
          }
        }
        //console.log('number ',number);
      }
    } else if(num.length>2) {;
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*100
          if (digit[i]===1) {
            temp.push('seratus');
          } else {
            temp.push(word[i]);
            temp.push('ratus');
          }
        }
        //console.log('number ',number);
      }
    } else if(num.length>1) {
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]*10
          if (digit[i]===1 && num[1]==='0') {
            //number = number - num[1]*10
            temp.push('sepuluh');
          } else if (digit[i]===1 && num[1]==='1') {
            number = number - num[1]*10
            temp.push('sebelas');
          } else if (digit[i]===1){
            for (var i = 0; i < digit.length; i++) {
              if(num[1]===digit[i].toString()){
                number = number - num[1]*10
                temp.push(word[i]);
              }
            }
            temp.push('belas');
          } else {
          temp.push(word[i]);
          temp.push('puluh');
          }
        }
      }
    } else {
      for (var i = 0; i < digit.length; i++) {
        if(num[0]===digit[i].toString()){
          number = number - digit[i]
          temp.push(word[i]);
        }
      }
    }

  if (number>0) {
    return numberToWords(number,temp);
  } else {
    return temp.join(' ');
  }
}



// Driver code
//console.log(numberToWords(1000000));
// console.log(numberToWords(1001010));
// console.log(numberToWords(110));
// console.log(numberToWords(12));
// console.log(numberToWords(11));
// console.log(numberToWords(19));
// console.log(numberToWords(27));
// console.log(numberToWords(100));
// console.log(numberToWords(127));
// console.log(numberToWords(8770));
// console.log(numberToWords(8771));
// console.log(numberToWords(10000));
// console.log(numberToWords(10500));
// console.log(numberToWords(28770));
// console.log(numberToWords(11100));
// console.log(numberToWords(13100));
// console.log(numberToWords(110100000));
// console.log(numberToWords(113100));
// console.log(numberToWords(213100));
// console.log(numberToWords(1131110));
// console.log(numberToWords(2131320));
// console.log(numberToWords(11131110));
// console.log(numberToWords(22131320));
// console.log(numberToWords(231131110));
// console.log(numberToWords(122131320));
// console.log(numberToWords(111111111));
// console.log(numberToWords(999999999));
console.log(numberToWords(41213123123882));

module.exports = {
  numberToWords: numberToWords
}
