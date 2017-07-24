function numberToWords(number)
{
  // Your code here
  var ones=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan', 'sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','tujuh belas','enam belas','delapan belas','sembilan belas'];
  var tens=['','','dua puluh','tiga puluh','empat puluh','lima puluh','enam puluh','tuju puluh','delapan puluh','sembilan puluh'];

  if(number<20)return ones[number];
  else if(number<100)return numberToWords(Math.floor(number/10))+" puluh "+numberToWords(number%10)
  else if(number<200)return "Seratus "+numberToWords(number-100)
  else if(number<1000)return numberToWords(Math.floor(number/100))+" ratus "+numberToWords(number%100)
  else if(number<2000)return "Seribu "+numberToWords(number-1000)
  else if(number<10000)return numberToWords(Math.floor(number/1000))+" ribu "+numberToWords(number%1000)
  else if(number<20000)return numberToWords(Math.floor(number/1000))+" ribu "+numberToWords(number%1000)
  else if(number<1000000)return numberToWords((number-(number%1000))/1000)+" ribu "+numberToWords(number%1000)//di bawah sejuta
  else if(number<1000000000)return numberToWords((number-(number%1000000))/1000000)+" juta "+numberToWords(number%1000000)//di bawah miliyar
  else if(number<1000000000000)return numberToWords((number-(number%1000000000))/1000000000)+" miliyar "+numberToWords(number%1000000000)//di bawah trilion
  else if(number<1000000000000000)return numberToWords((number-(number%1000000000000))/1000000000000)+" triliun "+numberToWords(number%1000000000000)//di bawah kuadriliun
}

// Driver code
console.log(numberToWords(1890678543876));
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
