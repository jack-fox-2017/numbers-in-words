var angka =["nol","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];

// var puluhan = ["dua puluh","tiga puluh","empat puluh","lima puluh","enam puluh", "tujuh puluh","delapan puluh","sembilan puluh"];
// var jutaan = ["seribu", "juta", "miliar","triliun"];


function numberToWords(number) {

if (number < 20) {
  return angka[number]
}
 else if (number < 100) {
   return numberToWords ((number -(number % 10)) / 10) + " puluh " + numberToWords (number % 10)
 }
  else if (number < 200) {
    return " seratus " + numberToWords (number % 100)
  }

 else if (number < 1000) {
   return numberToWords ((number -(number % 100)) / 100) + " ratus " + numberToWords (number % 100)
 }
 else if (number < 2000) {
    return " seribu " + numberToWords (number % 1000)
   }
   else if (number < 100000){
     return numberToWords ((number -(number % 1000)) / 1000) + " ribu " + numberToWords (number % 1000)
   }
   else if (number < 1000000){
     return numberToWords ((number -(number % 100000)) / 100000) + " ratus " + numberToWords (number % 100000)
   }
   else if (number <1000000000){
     return numberToWords ((number -(number % 1000000)) / 1000000) + " juta " + numberToWords (number % 1000000)
   }
   else if (number < 1000000000000){
     return numberToWords ((number -(number % 1000000000)) / 1000000000) + " miliar " + numberToWords (number % 1000000000)
   }
   else if (number < 1000000000000000) {
     return numberToWords ((number -(number % 1000000000000)) / 1000000000000) + " triliun " + numberToWords (number % 1000000000000)
   }
  // Your code here
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(9));
console.log(numberToWords(99));
console.log(numberToWords(199));
console.log(numberToWords(999));
console.log(numberToWords(1999));
console.log(numberToWords(99999));
console.log(numberToWords(999999));
console.log(numberToWords(999999999));
console.log(numberToWords(9999999999));
console.log(numberToWords(99999999999));
module.exports = {
  numberToWords: numberToWords
}
