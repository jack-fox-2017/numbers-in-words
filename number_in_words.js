function numberToWords(number) {
  // Your code here
  var words = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  // if(number == 0){
  //   return ""
  // }
  if(number < 12){
    return words[number];
  }
  if(number < 20){
    return numberToWords(number - 10) + " belas";
  }
  if(number < 100){
    return numberToWords(parseInt(number/10)) + " puluh " + numberToWords(number%10);
  }
  if(number < 200){
    return "seratus " + numberToWords(number-100);
  }
  if(number < 1000){
    return numberToWords(parseInt(number/100)) + " ratus " + numberToWords(number%100);
  }
  if(number < 2000){
    return "seribu " + numberToWords(number-1000);
  }
  // if(number < 10000){
  //   return numberToWords(parseInt(number/1000)) + " ribu " + numberToWords(number%1000);
  // }
  // if(number < 100000){
  //   return numberToWords(parseInt(number/1000)) + " ribu " + numberToWords(number%1000);
  // }
  if(number < 1000000){
    return numberToWords(parseInt(number/1000)) + " ribu " + numberToWords(number%1000);
  }
  // if(number < 10000000){
  //   return numberToWords(parseInt(number/1000000)) + " juta " + numberToWords(number%1000000);
  // }
  // if(number < 100000000){
  //   return numberToWords(parseInt(number/1000000)) + " juta " + numberToWords(number%1000000);
  // }
  if(number < 1000000000){
    return numberToWords(parseInt(number/1000000)) + " juta " + numberToWords(number%1000000);
  }
  // if(number < 10000000000){
  //   return numberToWords(parseInt(number/1000000)) + " milyar " + numberToWords(number%1000000);
  // }
  // if(number < 100000000000){
  //   return numberToWords(parseInt(number/1000000)) + " milyar " + numberToWords(number%1000000);
  // }
  if(number < 1000000000000){ //4
    return numberToWords(parseInt(number/1000000000)) + " milyar " + numberToWords(number%1000000000);
  }
  // if(number < 10000000000000){ //10 4
  //   return numberToWords(parseInt(number/1000000)) + " triliun " + numberToWords(number%1000000);
  // }
  // if(number < 100000000000000){ //100 4
  //   return numberToWords(parseInt(number/1000000)) + " triliun " + numberToWords(number%1000000);
  // }
  if(number < 1000000000000000){ //1000 4
    return numberToWords(parseInt(number/1000000000000)) + " triliun " + numberToWords(number%1000000000000);
  }
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(10));
console.log(numberToWords(90000000000));
// console.log(numberToWords(31789929025281));
// console.log(numberToWords(999000000000000));

//console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
