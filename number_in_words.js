function numberToWords(number) {
  // Your code here
  let string = ["", "satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas","dua belas","tiga belas", "empat belas","lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  // let ratusan = ["","seratus"]
  // let ratusa
  if(number<20){
    return string[number]
  }
  else if(number<100){
    return numberToWords(Math.floor(number/10)) + " puluh " +numberToWords(number%10)
  }
  else if (number <200) {
    return "seratus " + numberToWords(number-100)
  }
  else if (number <1000){
    return numberToWords(Math.floor(number/100)) + " ratus " + numberToWords(number%100)
  }
  else if (number <2000) {
    return "seribu " + numberToWords(number-1000)
  }
  else if (number <10000) {
    return numberToWords(Math.floor(number/1000)) + " ribu " + numberToWords(number%1000)
  }
  else if (number <20000) {
    return numberToWords(Math.floor(number/1000))+ " ribu "+ numberToWords(number%1000)
  }
  else if (number<1000000) {
    return numberToWords((number -(number %1000))/1000) + " ribu " + numberToWords(number%1000)
  }
  else if (number < 1000000000) {
    return numberToWords((number -(number %1000000))/1000000) + " juta " + numberToWords(number%1000000)
  }
  else if(number <1000000000000){
    return numberToWords((number - (number%1000000000))/1000000000) + " milyar " + numberToWords(number%1000000000)
  }
  else if(number< 1000000000000000){
    return numberToWords((number - (number%1000000000000))/1000000000000) +" triliun " + numberToWords(number%1000000000000)
  }
}

// Driver code
console.log(numberToWords(7));
console.log(numberToWords(17));
console.log(numberToWords(92));
console.log(numberToWords(101));
console.log(numberToWords(141));
console.log(numberToWords(203));
console.log(numberToWords(444));
console.log(numberToWords(600));
console.log(numberToWords(1999));
console.log(numberToWords(5001));
console.log(numberToWords(9871));
console.log(numberToWords(219871));
console.log(numberToWords(800000));
console.log(numberToWords(999000000));
console.log(numberToWords(999900000000));
console.log(numberToWords(999900000000000));
// console.log(numberToWords());



// console.log(numberToWords(88));
module.exports = {
  numberToWords: numberToWords
}
