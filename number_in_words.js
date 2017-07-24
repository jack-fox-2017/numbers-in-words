function numberToWords(n) {
  let word = ' satu dua tiga empat lima enam tujuh delapan sembilan sepuluh sebelas'.split(' ');
  // console.log(word);
  if (n<12) {return word[n]}
  if (n<20) {return word[n%10]+' belas'}
  if (n<100) {return word[Math.floor(n/10)]+' puluh '+word[Math.floor(n%10)]}
  if (n==100) {return 'seratus'}
  if (n==1000) {return 'seribu'}
  if (n<200) {
    return 'seratus '+numberToWords(Math.floor(n%100))
  }
  if (n<1000) {
    return word[Math.floor(n/100)]+' ratus '+numberToWords(n%100);
  }
  if (n<2000) {
    return 'seribu '+numberToWords(n%1000);
  }

  if (n<1000000) {
    console.log(n/1000);
    return numberToWords(Math.floor(n/1000))+' ribu '+numberToWords(n%1000);
  }
  if (n<1000000000) {
    return numberToWords(Math.floor(n/1000000))+' juta '+numberToWords(n%1000000);
  }
  if (n<1000000000000) {
    return numberToWords(Math.floor(n/1000000000))+' miliar '+numberToWords(n%1000000000);
  }
  if (n<1000000000000000) {
    return numberToWords(Math.floor(n/1000000000000))+' trilliun '+numberToWords(n%1000000000000);
  }
}
// Driver code
// console.log(numberToWords(999111567890011));
console.log(numberToWords(1111111111111));

module.exports = {
  numberToWords: numberToWords
}
