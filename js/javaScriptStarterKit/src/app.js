//console.log("Merhaba KodlamaIO");
var dolarDun=23
//console.log(dolarDun) ;dolarDun=12;
//console.log(dolarDun)

var dolarBugun=10.1
{
    var dolarBugun=10.5;
}
//console.log(dolarBugun)

const dolar=222;

//console.log(dolar);
let x=22;
x=32;
//console.log(x)
let sayilar=[2,4,5,6,[23,34,56]];
//console.log(sayilar)
for (let index = 0; index< sayilar.length; index++) 
{  
    const element = sayilar[index];
        //console.log(element);
}

var myNumber=12;//bu su anda integer olarak atadik
var myNumber="Adem Erbas";
//console.log(myNumber);
//Javascript type-safe bir dil degildir.Integer olarak atadigimiz bir degiskene devaminda string bir deger de atayabiliyruz veya bambaska bir tipde degerde atayabiliyoruz.Bunu c# da yapamayiz kesinlikle...ve c# da direk tipi ile beraber tanimlariz burda ise oyle birsey yok

//Ama lette ayni isimle 2 tane farkli
let myNumber1=14;
// let myNumber1="Adem";//let keywordu ile ayni degisken ismini 2. kez bastan tanimlayamayiz.Ancak deger atayabiliiriz farkli tip bir deger atyabiliriz...javascript tip guvenli olmadigi icin-not type safety biz let ile de farkli tip de degerleri atayabiliyoruz lette..
myNumber1="Mehmet"; 
//console.log(myNumber1);
//Objeler..property ve value lerinden olusur...
let student={id:1,name:"Engin"}
//Back-end den datalar json ile bu formatta geliyor
//console.log(student);

//Parametrede varsayilan deger atama
//Dikkat edelim biz burda ogrenci isminde parametre atiyoruz ve console a yazdirirken de o ogrenci parametresini yukardaki student objesi formatinda varsayarak bunu yapiyoruz..Dikkat edelim biz bunu varsayiyoruz yoksa bunun icin javascript in yaptigi birsey yok C# gibi
function save(ogrenci, puan=10) {
    //console.log(ogrenci.name+ "  : "+ puan)
}
//Uygulama yukardan asagi calisir burda single thread var yani...
//save(student);
save(15);//Undefined :10
//Burda biz student tipinde birsey girmedigimiz icin, yani studenti javascript bulamayacak dolayisi ile de undefined olarak javascript kendisi atayacaktir bunu....
//UNDEFINED HATA DEGILDIR...
//Biz bir fonksiyonda  parametrede deger tanimlayip sonra o fonksiyonu calistirirken parametresini bos birakirsak o zaman javascript yine hata vermiyor uygulama calisiyor ama undefined donuyor.Undefined hata verir demek degildir uygulama yine calisiyor ama undefined donuyor.... 
function save1(puan=10,ogrenci) {
    //console.log(ogrenci.name+ "  : "+ puan)
}
//save1(student); burda hata aliriz..
//Hatirlayalim c# da biz default bir parametreyi en sonda yazariz...en basa degil
//Biz bu default deger verdigimiz parametre yi ilk siraya javascriptte koyarsak fonksiyonu calisitirip parametreye deger olarak da obje verirsek o obje yi parametre de ilk sirada ne tanimlamissak ona atar...
//Yani ornegimizde student objesini parametreye atayinca student degerini puan yerine koyar sonra da , 2.parametre olan ogrenci girilmemis oluyor...
//Dolayisi ile ogrenci.name i yazdirmaya calistiginda , biz paramtreye herhangi bir ogrenci girmedigimiz icin, o ogrencinin de name i de yok, olmayan birseyin name ini property olarak name ini yazdirmaya calistigi icin hata verecektir  yoksa ogrenci parametresinin yerine birsey atamamak undefined birseydir

//PEKI BIZ FONKSIYONUMUZA 2 TANE PARAMETRE TANIMLADIK AMA FONKSIYONU CALISTIRIKEN 1 TEN PARAMETRE ATAMAK ISTIYORUM AMA ATADIGIM PARAMETRENINDE TANIMLARKEN 2.SIRADA TANIMLADIGIM PARAMETREYE DEGER OLARAK GITMESINI ISTIYORUM....NASIL YAPARIZ....
save1(undefined, student);//Engin  : 10

//Biz bir array olustururken koseli parantez olustururuz ve biz bir koseli parantez olusturdugumuz anda yepyeni bir referans aliriz...
let students=["Ahmet","Mehmet","Salih","Sercan"]
//console.log(students)
//dizi icerisinde yine dizi,array ve obje de yazabiliriz
let students2=[students, student, {city:"Ankara"}, [2,4,6],15,"Selim"]
//console.log(students2)

//Fonksiyonu Degiskene Atamak!!!
//Javascriptte biz bir degiskene fonksiyon atayabiliyoruz bu tur durumlarda fonksiyona da bir isim vermemize gerek yoktur...ve showProducts() seklinde cagiririz bunu
