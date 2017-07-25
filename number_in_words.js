function numberToWords(number) {
  // Your code here
  let numWord = ' satu dua tiga empat lima enam tujuh delapan sembilan sepuluh sebelas belas'.split(' ');
  let seNumWord = 'seratus seribu'.split(' ');
  let largeNum = [10, 100, 1000, Math.pow(10,6), Math.pow(10,9), Math.pow(10,12), Math.pow(10,15)];
  let largeNumWord = ' puluh ratus ribu juta milyar trilliun'.split(' ');
  if(number < 12){
    return numWord[number];
  }
  if(number > 11 && number < 20){
    return numWord[number.toString().split('')[1]] +' '+ numWord[12];
  }
  if(number < Math.pow(10, 15)){
    for(let i=0; i<largeNum.length; i++){
      if(number < largeNum[i]){
        if(number.toString().split('')[0] == 1 && i<4){
          return 'se'+largeNumWord[i] +' '+ numberToWords(number%largeNum[i-1]);
        }
        return numberToWords((number - (number%largeNum[i-1]))/largeNum[i-1]) +" "+ largeNumWord[i] +" "+ numberToWords(number%largeNum[i-1]);
      }
    }
  }
}

// Driver code
console.log(numberToWords(1112123456789));
console.log(numberToWords(123456789));
console.log(numberToWords(789));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(99));
console.log(numberToWords(999));
console.log(numberToWords(201));
console.log(numberToWords(111));
console.log(numberToWords(1000));
console.log(numberToWords(12));

module.exports = {
  numberToWords: numberToWords
}
