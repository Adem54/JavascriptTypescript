//Veri tipleri

var sample=null;
console.log(typeof(sample));//null gelir ama bu bir hatadir


var a=4;
console.log("a: "+ a)

var a=14;//Biz burda a da degisiklik yapiyoruz ama bu degisiklik bu satidan sonra gecerlidir onceki satirlar a nin bir onceki degerini alacaktir...
console.log("a: "+ a)

var a="four";
console.log("a: "+ a)
//Javascript dinamik data tipleri kullanir ama C# gibi diller de biz data tipi ismi ile beraber olustururuz bi rdegiskeni o data tipinden baska tipe direk ceviremeyiz...

//Kullanicidan veri alip bunu yazdiirma


//var name = window. prompt("Enter your name: "); 
//let lastName=window.prompt("Enter your lastName: ");
//alert("Your name is " + name+ "Your lastName is "+ lastName); 

//document.write(name+ lastName);


//let number1=prompt("sayi1 giriniz: ");
//let number2=prompt("sayi2 giriniz: ");


//let toplam=parseInt(number1)+parseInt(number2); 
//alert(toplam);
//Ekrandan gelen deger string olarak geliyor ve biz toplama islemini gerdeklestiremiuyoruz ondan dolayi biz aldigimiz degerleri parseInt ile integer e cevirip ondan sonra islemimizi yapariz...



//== ile === farki

let x=5;
let y="5";

if (x===y) {
    console.log("x ve y esittir")
}else {
    console.log("x ve ye esit degildir")
}
//== degiskenlerin sadece degerine bakar esit mi diye veri tiplerine bakmaz....
//Problem sudurki == te integer olan 5 ile string olan 5 i ayni olarak goruyor iste biz bunu asabilmek icin === esit kullaniriz..
//=== hem deger tipi olarak hem de veri tipi olarak esit olmasina bakar...


var sayi3=4;
console.log(sayi3++);//4-sayi3 u yazip sonra ++ artma islemleri gerceklestirdigimiz icin ayni satirda armtyacaktir bir alt satirdan itibaren artisi gorebiliriz
console.log(sayi3);//5

console.log(++sayi3);//Ama burda ise once ++ artma islemi sonra sayi3 yazdigimiz icin burda direk yazildigi satirda artisi gorebiliriz...
console.log(sayi3--);//Bir alt satirda azaltmaya baslayacaktir
let sayi4= -100;
if(sayi4){
    console.log(`${sayi4} sonucu true geliyor`)
}else{
    console.log(`${sayi4} sonucu false geliyor`)
}

//Truely og falsely---

const sayi5=1;
sayi5 ? console.log("sayi geccerli") : console.log("sayi gecersiz");
 
//sayi bir integer dir bool degildir ama js de sayilarin da true veya false degerleri var eger bool gibi kosul icine koyarsak
//null,undefined,0,"",Nan bunlar kosula konursa false gelir
//0 dan buyuk tum sayilar true gelecek...
//Dolu bir string her zaman truely dir

//Ama [],{} bos dizi ve bos obje ler truely dir peki bos bir diziyi kontrol ederken ne yapariz gidip onun icindeki eleman sayisina bakariz...length ile..
//Obje icin ise Object.keys dizi dondurur Object.keys.length bos mu ona bakariz...

let students={name:"Adem", age:33}
console.log(Object.keys(students)) //[name,age] olarak gelir
console.log(Object.keys(students).length) //2