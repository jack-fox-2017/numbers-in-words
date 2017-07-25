function numberToWords(number) {
  // Your code here
  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
  if(number < 20) {
  	return words[number];
  }
  else if (number < 100) {
  	return numberToWords((number - (number % 10))/10) + " puluh " + numberToWords(number % 10);
  }
  else if (number < 200) {
  	return "seratus " + numberToWords(number - 100);
  }
}

// Driver code
console.log(numberToWords(5));
console.log(numberToWords(13));
console.log(numberToWords(76));
console.log(numberToWords(123));

module.exports = {
  numberToWords: numberToWords
}
