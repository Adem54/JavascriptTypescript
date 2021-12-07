//Fonksiyonlar
//1-Bir fonks parametresine fonks calisitirirken oldugundan daha fazla parametre girebiliriz herhangi bir problem olmuyor javascript sirasi ile parametreleri kullanir fazla kalanlara ise herhangi bir hata vermez

function topla(sayi1,sayi2){
  return sayi1+ sayi2;
}
console.log(topla(4,8,12,3));

//2-Ama eger paremtre de bulunan parametre sayisindan daha az parametre kullanirsak
console.log(topla(14));//o zaman da eksik kalan parametre  yerine undefined atanacaktir....ve burda sonuc Nan gelir cunku toplayamaz onu Not A Number=Nan

//3-Javascriptte fonksiyonlari bir degere atayabiliriz
let myFunction=function(sayi1,sayi2){
  return sayi1*sayi2;
}


//4)Fonksiyon icinde fonksiyon kullanmak
//Bu cok onemli.....Fonks icinde fonksiyon kullanabiliriz.....
function doMultiple(x,y,fn){
  var z=x*y;
  return fn(z);
}

function showNumber(z){
  console.log(z+10);
}
console.log("----------------------")
doMultiple(12,8,showNumber);