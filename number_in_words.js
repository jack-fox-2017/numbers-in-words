function numberToWords(number, word=[]) {
  // Your code here
  let str = number.toString();
  //console.log(str);
  let numLarge = [10,100,1000,10000,100000,1000000,10000000]
  let numLarName = ['puluh','ratus','ribu', 'puluh ribu','ratus ribu', 'juta', 'puluh juta'];
  for(let i=numLarge.length-1; i>=0; i--){
    //console.log(numLarge[i]);
    while(number >= numLarge[i]){
      //console.log(numLarge[i]);
      word.push(numWord(str[0]));
      //console.log(numWord(str[0]));
      if(str[0] == 1 && str[1] == 1 && str.length == 2){
        word.splice(word.length-1,1);
        word.push('sebelas');
      }
      else if(str[0] == 1 && str[1] > 1 && str.length == 2){
        word.splice(word.length-1,1);
        word.push(numWord(str[1])+' belas');
      }
      else if(str[0] == 1 && str[1] >= 0){
        word.splice(word.length-1,1);
        word.push('se'+numLarName[i]);
      }
      else{
        word.push(numLarName[i]);
      }
      //console.log(number-parseInt(str[0])*numLarge[i]);
      if(number<20){
        return word.join(' ');
      }
      else{
        //ini recursive
        return numberToWords(number-(parseInt(str[0])*numLarge[i]), word);
      }
    }
  }
  word.push(numWord(str[0]));
  return word.join(' ');
}

//added function for satuan
function numWord(num){
  let numUnit = [1,2,3,4,5,6,7,8,9];
  let numUnitName = ['satu','dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  for(let j=0; j<numUnit.length; j++){
    if(num == numUnit[j]){
      return numUnitName[j];
    }
  }
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(999));
console.log(numberToWords(201));
console.log(numberToWords(111));
console.log(numberToWords(10));
console.log(numberToWords(12));

module.exports = {
  numberToWords: numberToWords
}
