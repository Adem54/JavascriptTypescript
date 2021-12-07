//Arrow Functions
//Fonskiyon olusturmanin yeni yontemi

//1)Impilisit return ustu kapali donurme ozelligi en cok kullanilan ozelligidir
//2)Arrow function bir degiskene atandigi zaman yaptigimiz atamadan daha once cagiramiyoruz olusturduktan sonra cagirmamiz gerekiyor...Ama function keywordu ile olusturulan fonksiyonlar heryerde cagiralabiliyor



topla(5,8)

function topla(sayi1, sayi2){
    console.log(sayi1+ sayi2)
   
}
//function keywordu ile olusturdugumuz bir fonksiyonu javascript bizim icin sayfanin en basina aliyor ve biz function ile olusturugumuz topla fonksiyonunu olusturmadan once de kullanabiliriiz....

//console.log(arrowTopla(4,8))
//Uncaught ReferenceError: Cannot access 'arrowTopla' before initialization bu hatayi alacagiz...

const arrowTopla=(sayi1,sayi2)=>{
    return sayi1+ sayi2;
}

//Implisit return
//Eger tek bir satirda yazacaksak kodumuzu o zaman suslu ifadeye ihtiyacimiz yok ve arrow function onu direk zaten return ediyor bize ekstra return yazmaya gerek yok
const newTopla=(sayi1,sayi2)=>sayi1+sayi2;
console.log(newTopla(12,8))