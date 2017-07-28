function numberInWords(num){

  var strArr = ['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas'];

  if (num <= 11)
  {
    return strArr[num];
  }
  if (num <20 )
  {
    return numberInWords((num%10)) +' belas'
  }
  if (num < 100)
  {
    return numberInWords((num-(num%10))/10) + ' puluh ' + numberInWords(num%10)
  }
  if (num < 200)
  {
    return 'Seratus '+ numberInWords(num%100)
  }
  if (num < 1000)
  {
    return numberInWords((num-(num%100))/100)+' ratus '+numberInWords(num%100)
  }
  if (num < 2000)
  {
    return 'Seribu '+ numberInWords(num%1000)
  }
  if (num < 1000000)
  {
    return numberInWords((num-(num%1000))/1000)+' Ribu '+numberInWords(num%1000)
  }
  if (num < 1000000000)
  {
    return numberInWords((num-(num%1000000))/1000000)+' Juta '+numberInWords(num%1000000)
  }
  if (num < 1000000000000)
  {
    return numberInWords((num-(num%1000000000))/1000000000)+' Miliar '+numberInWords(num%1000000000)
  }
  if (num < 10000000000000000)
  {
    return numberInWords((num-(num%1000000000000))/1000000000000)+' Triliyun'+numberInWords(num%1000000000000)
  }
}

console.log(numberInWords(1000000000000000))
