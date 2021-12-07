//Ternary conditional Operators(uc degiskenli kosul operatorleri)
//kosul?Dogruysa : Yanlissa;

//Kullanim yerleri
//kosula bagli ekrana birsey yazdirirken kullaniriz...
//error dogru ise hata mesaji yanlissa componentin kendisni goster
const kopruDurumu="tadilat";
kopruDurumu ==="acik"
 ? console.log("Kopru Acik")
 : kopruDurumu === "kapali"
 ? console.log("kopru kapali")
 : console.log(kopruDurumu)


 const sayi=1;
 sayi ? console.log("sayi geccerli") : console.log("sayi gecersiz");
  
 //sayi bir integer dir bool degildir ama js de sayilarin da true veya false degerleri var eger bool gibi kosul icine koyarsak
 //null,undefined,0,"",Nan bunlar kosula konursa false gelir
 //0 dan buyuk tum sayilar true gelecek...
 //Dolu bir string her zaman truely dir

 //Ama [],{} bos dizi ve bos obje ler truely dir peki bos bir diziyi kontrol ederken ne yapariz gidip onun icindeki eleman sayisina bakariz...length ile..
 //Obje icin ise Object.keys dizi dondurur Object.keys.length bos mu ona bakariz...

 let students={name:"Adem", age:33}
 console.log(Object.keys(students)) //[name,age] olarak gelir
 console.log(Object.keys(students).length) //2