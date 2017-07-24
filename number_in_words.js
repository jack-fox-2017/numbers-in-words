function numberToWords(number) {
  // Your code here
  angka = ['',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  kata = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas']
  terbilang = ''

  num = number.toString().length
  if(num === 9){
    get = Math.floor(number/100000000)
    if(get ===1){
      terbilang += ' seratus '
      return terbilang + numberToWords(number - get * 100000000)
    } else {
      terbilang += kata[get] + ' ratus '
      return terbilang + numberToWords(number - get * 100000000)
    }
  } else if(num === 8){
    get = Math.floor(number/10000000)
    if(get ===1){
      terbilang += ' sepuluh '
      return terbilang + numberToWords(number - get * 10000000)
    } else {
      terbilang += kata[get] + ' puluh '
      return terbilang + numberToWords(number - get * 10000000)
    }
  } else if(num === 7){
    get = Math.floor(number/1000000)
    if(get === 1){
      terbilang += ' sejuta '
      return terbilang + numberToWords(number - get * 1000000)
    } else {
      terbilang += kata[get] + ' juta '
      return terbilang + numberToWords(number - get * 1000000)
    }
  } else if(num === 6){
    get = Math.floor(number/100000)
    if(get === 1){
      terbilang += ' seratus '
      return terbilang + numberToWords(number - get * 100000)
    } else {
      terbilang += kata[get] + ' ratus '
      return terbilang + numberToWords(number - get * 100000)
    }
  } else if(num === 5){
    get = Math.floor(number/10000)
    if(get === 1){
      terbilang += ' sepuluh '
      return terbilang + numberToWords(number - get * 10000)
    } else {
      terbilang += kata[get] + ' puluh '
      return terbilang + numberToWords(number - get * 10000)
    }
  } else if(num === 4){
    get = Math.floor(number/1000)
    if(get === 1){
      terbilang += ' seribu '
      return terbilang + numberToWords(number - get * 1000)
    } else {
      terbilang += kata[get] + ' ribu '
      return terbilang + numberToWords(number - get * 1000)
    }
  } else if(num === 3){
    get = Math.floor(number/100)
    if(get === 1){
      terbilang += ' seratus '
      return terbilang + numberToWords(number - get * 100)
    } else {
      terbilang += kata[get] + ' ratus '
      return terbilang + numberToWords(number - get * 100)
    }
  } else if(number > 19 && num === 2){
    get = Math.floor(number/10)
    terbilang += kata[get] + ' puluh '
    return terbilang + numberToWords(number - get * 10)
  } else if(number > 0 && number < 20){
        terbilang += kata[number]
        return terbilang
  }
}

// Driver code
console.log(numberToWords(123456789));

module.exports = {
  numberToWords: numberToWords
}
