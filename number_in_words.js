var firstOne = true;
function numberToWords(number) {
  // Your code here
  var satuan = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']

  var split = number.toString().split('')
  var length = split.length
  if ((split[0] == 0 && length === 1) || length == 0) {
  	return ''
  } else if (length === 1) {
  	return satuan[number - 1]
  } else {
  	var result = []
  	var nextCall = (split.slice(1).join(''));

  	var puluhanBool = (length + 1) % 3 === 0
  	var ratusanBool = (length) % 3 === 0
  	var seBool = false
  	var notMultiZero = split[0] != 0 && split[1] != 0

  	if (split[0] == 1) {//se
  		if (puluhanBool || ratusanBool ) {
  			seBool = true
  		}
  	}

  	if (puluhanBool && split[0] == 1 && split[1] != 0) { //belas
  		if (seBool) {
  			result.push('sebelas')
  		} else {
	  		result.push(satuan[split[1] - 1])
	  		result.push('belas')
  		}

  		nextCall = (split.slice(2).join(''))
  	} else if (puluhanBool) { //puluh
  		if (seBool) {
  			result.push('sepuluh')
  		} else {
	  		result.push(satuan[split[0] - 1])
	  		result.push('puluh')
  		}
  	} else if (ratusanBool) { //ratus
  		if (seBool) {
  			result.push('seratus')
  		} else {
	  		result.push(satuan[split[0] - 1])
	  		result.push('ratus')
	  	}
  	} else {
  		if (!(firstOne && split[0] == 1 && length === 4) && split[0] >= 1) //jika bukan (1 dan pada urutan pertama)
  			result.push(satuan[split[0] - 1]) //satuan
  	}

  	if (length === 4) {
  		if ( (firstOne && split[0] == 1)  ) {
  			result.push('seribu')
  		} else {
  			result.push('ribu')
  		}
  	}
  	else if (length === 7) result.push('juta')
  	else if (length === 10) result.push('miliar')
  	else if (length === 13) result.push('triliun')

  	firstOne = false
  	return result.join(' ') + ' ' + (numberToWords(nextCall))
  }
}

// Driver code
console.log(numberToWords(4310));

module.exports = {
  numberToWords: numberToWords
}
