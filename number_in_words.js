"use strict"
function numberToWords(number) {
  // Your code here
  //let angka = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  let huruf = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas","dua belas","tiga belas",
  "empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];
  let nilai = [];
  let number_tmp = 0;

  if(number >= 0 && number < 20){
    return huruf[number];}

    else if (number >= 20 && number < 100){
      return huruf[Math.floor(number/10)] + " puluh " + numberToWords(number%10)
  }

    else if (number >= 100 && number < 200){
      return "seratus " + numberToWords(number-100)
  }

    else if(number >= 200 && number < 1000){
      return huruf[Math.floor(number/100)] + " ratus " + numberToWords(number%100)
  }

    else if(number >= 1000 && number < 2000){
      return "seribu " + numberToWords(number%1000)
  }

    else if(number >= 2000 && number < 10000){
      return huruf[Math.floor(number/1000)] + " ribu " + numberToWords(number%1000)
  }

    else if(number >= 10000 && number < 20000){
      return huruf[Math.floor(number/1000)] + " ribu " + numberToWords(number%1000)
    }

    else if(number >= 20000 && number < 100000){
      return numberToWords([Math.floor(number/1000)]) + " ribu " + numberToWords(number%1000)
    }

    else if(number >= 100000 && number < 200000){
      return numberToWords([Math.floor(number/1000)]) + " ribu " + numberToWords(number%1000)
    }

    else if(number >= 200000 && number <1000000){
      return numberToWords([Math.floor(number/1000)]) + " ribu " + numberToWords(number%1000)
    }

    else if(number < 1000000000){
      return numberToWords((number -(number%1000000))/1000000) + " juta " + numberToWords(number%1000000)
    }

    else if(number < 1000000000000){
      return numberToWords((number-(number%1000000000))/1000000000) + " milyar "+ numberToWords(number%1000000000)
    }

    else if(number < 1000000000000000){
      return numberToWords((number-(number%1000000000000))/1000000000000)+ " triliun " + numberToWords(number%1000000000000)
    }

}
// Driver code
console.log(numberToWords(9500));
console.log(numberToWords(95000));
console.log(numberToWords(950000));
console.log(numberToWords(9500000));
console.log(numberToWords(95000000));
console.log(numberToWords(950000000));
console.log(numberToWords(9500000000));
console.log(numberToWords(95000000000));
console.log(numberToWords(950000000000));
console.log(numberToWords(955000000000000));

module.exports = {
  numberToWords: numberToWords
}






//
//  else if(number < 10000000000000){
//    return numberToWords((number-(number-10000000000))/10000000000) + " miliar " + numberToWords(number%10000000000)
//  }

//     else if(number >= 1000000 && number < 2000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-1000000)
//     }
//
//     else if(number >= 2000000 && number < 3000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-2000000)
//     }
//
//     else if(number >= 3000000 && number < 4000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-3000000)
//     }
//
//     else if(number >= 4000000 && number < 5000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-4000000)
//     }
//
//     else if(number >= 5000000 && number < 6000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-5000000)
//     }
//
//     else if(number >= 6000000 && number < 7000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-6000000)
//     }
//
//     else if(number >= 7000000 && number < 8000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-7000000)
//     }
// ///
//     else if(number >= 8000000 && number < 9000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-8000000)
//     }
//
//     else if(number >= 9000000 && number < 20000000){
//       return numberToWords([Math.floor(number/1000000)]) + " juta " + numberToWords(number-9000000)
//     }
//
//     else if(number >= 10000000){}
