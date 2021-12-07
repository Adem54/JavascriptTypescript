//Var,let,const

let age;//let i baslangic degeri olarak tanimlayabiliriz.... 

age=40;
console.log(age);

age=42;
console.log(42);
//Let degisen ve degisebilen ifadeler icin kullanilir

//const ise degismeyen degerler icin kullanilir ama tamamen degismeyen demek degildir bu bir dizi veya obje icindeki elemanlar degisebilmektedir...

//CONTS KISITLARI....
//1)const name;//Const a baslangic degeri vermek zorundayiz....yoksa hata aliriz
const name="Adem";//isim degismeyen birseydir ondan dolayi const ile belirliyoruz...

//2)name="Zehra";//Uncaught TypeError: Assignment to constant variable. boyle bir hata aliriz const ile belirlene bir decleratiojn yaptiktan sonra yeni bir deger atayamayiz...

//let ile const un yapailecegi tum islemleri yapabiliyoruz ama ayni zamanda degerleri de degstirebiliyruz ve baslangic degeri de atayabiliyoruz...Peki neden const kullaniyoruz o zaman
let name2="Arin";//name i daha onceden const ile kullandigimiz icin tekrardan let ile decelera edemeyeiz
console.log(name);

name2="Zehra";
//Neden Const kullaniriz?
//Const a ihtiyac duymayi gectim kutuphane ve catilarda const let den daha cok kullanilir
//Bunun sebebi sudur let ile atanan bir degiskenin sonradan degistirilebilmesi yani constta olmayan o ozellikk aslindas avantaj degil dezavantajdir yani burda aslinda avantaj olan const un yaptigidir..
//Bir degisken i biz tek bir concept icinde kullanmak isteriz biz programlamada aslinda bir degiskenin tanimlayip deger atadiktan sonra nomral sartlar altinda tekrardan dogrudan ayni degiskene bir deger atamayiz da onun yerine fonksiyon ve baska degiskenler ile ona deger atariz dinamik bir kod yazabilmek icin...dolayisi biz cok uzun kodlar y azdigimizi dusunursek bize hic farketmeden let ile tanimladigimiz bir degiskene yeni bir degeri farkkinda olmadan atamak yerine const ile tanimmlayip onun degismemesini isteme refleksi yazilimda omasi gereken ve yaygin olan bir yontemdir....

//Neden Let kullaniriz?
//Let i nerde kullaniriz?Ozel olarak degismesnini istediigimiz decleration lar icin kullaniriz...

let str="";
//Burda dikkat edelim i let ile tanimlanmis cunku i nin devamli artmasi isteniyor.....ondan dolayi let kullanilir
//ayni sekilde i de burda bir sayac gorevi gordugu icin ne oluyor let ile tanimlaniyor
for(let i=0; i<10; i++){
    str=str.concat(i);
    console.log(str)
}

//Biz const a atanan degerin degismeycegini soyledik ama asagida bu iddiayi curuten ornekler var
const myArr=[1,2,4];
myArr[2]=12;
console.log(myArr);
myArr.pop();//array in son eleman ini kaldirir...
console.log(myArr);

const student={
    name:"Arin",
    age:5
}

student.name="Zehra";
student.age=17;
console.log(student);

//Goruldugu gibi hem dizi hem de obje icerisinde degisme meydana geldi const ile tanimlamamiza ragmen...
//Ama biz const ile array ve dizi tanimladigimiz zaman degerini degil aslnda referansini ifade ediyoruz...

//Bilgisayar hafizasini kutu olarak dusunelim ve diyoruz ki bu kutunun ismi myArr olsun diyoruz ornegin

//BURASI COOK ONEMLI!!!!!!!
//Const ile biz referans tip lerin referanslarini yani adreslerini degistiremeyiz....yoksa degerlerini degistirebilirizi dizi ve objelerde
//Biz myArr de tanimladigiimiz referans deger ile yani adres de degil de o adres deki deger de degisiklik yaparsak const ile sorun yasanmaz ama biz gelip myArr ye yep yeni bir dizi atamaya kalkarsak o zaman iste referansi degistirmis oluyoruz ki iste o zaman hata aliriz....
//Referans tipler mutable dir yani degisebilir degeri degisebilir demektir bu ama hafizadaki yer i adersi degismez, referansi degismez...Immutable tipler ise deger tiplerdir onlar degismez demektir yani bir bir deger tipe bir deger atadigimiz zaman sonra o deger tipi tutup baska bir tipe atarsak her ne kadar degerleri ayni olsa bile bellekte o degeri atamiuyor o degerden bir tane bellekte kopya olusturup onu veriyor yani kendisi degismiyor degisitirilemiyor asla....

//
// myArr=[34,56,78] biz myArr= [] yeni bir dizi actigmiz anda bellekte bir tane dizi olusturuuz....
//Bu arada bellekte bir yer tutmalari ancak bir deger atama ile olacaktir deger atanana kadar bellekte yer kaplamayacaktir....
console.log(myArr)
//student={} obje parantezlerini actigimiz anda yeni bir adres veya referans olsuturmus olacaktir bellekte

//OBJE NIN DEGISTIRILEMSINE IZIN VERMEK ISTEMEZSEK!!!!!!
//Peki biz eger student nesnesinin iceriginin de degismesini istemez isem ne yapacagim?????
Object.freeze(student);

student.age=24;//Bunu yapmama ragmen icerigi degistiremiyoruz cunku Object.freeze ile student nesnemi degistirilemez hale getirdik
console.log(student)

//Neden Var kullaniriz veya neden var kullanilir??
var myAge=40;
//VAR-FUNCTIONAL SCOPE-GLOBAL SCOPE....
myAge=42;
//Var functional scope veya global scope olarak calisir
console.log("Var functioal ve global scope,,,")
var x=1;
console.log(x);
if(x===1){//If bir fonksiyon olmadiigi icin if in icindeki x  ifden sonra x in tanimlandigi ilk yerde de gecerli olacaktir....
    var x=10;
    console.log(x);
}

console.log(x);

//LET-BLOG SCOPE------Suslu parantez icindeki her alan bir scope dur kendine ozel alanidir demektir...ve orda tanimlanan degisken disarda gecerli olmayacaktir..ama var da boyle degil, varda block scope yok functional ve global scope var...
console.log("let block scope...")
let y=10;
console.log(y);//10
if(y===10){
    let y=20;
    console.log(y);//20
}

console.log(y);//10

//Global Scope-Var- COK ONEMLI......
var z=35;//globale ait olan bir ozellik olarak gozukuyor...
console.log(window.z);//35
//window nesnesi ekranda gordugumuz hersey.....
//var ile olusturdugum bir degisken window nesnesine ait bir property olarak gozukuyor......
console.log(window)

//Ayni seyi let ile denedigimiz zaman
let k=10;
console.log(window.k);//undefined cunku let in global scope u yok....

//HOISTING...

//var a;//decleration yapildi ama assignment yapilmadi ve undefined oluyor bir deger atanmadigi icin...
console.log(a);//Direk bu sekilde tanimlarsak referans hatasi aliriz ama yukarda deceleration yaparsak da sonra yazdirirsak o zaman da undefined hatasi aliyruz

var a=10;//burda hem decleration hem de assignment yapar ama ust te yazdirirsak  o zaman da undefined hatasi aliriz sanki console(a) nin ustunde bir decleration islemi yapilmis gibi kabul ediyor...Buna hoisting deniyor..

//Javascript kodu okumaya baslagi zaman degiskenlerin once en ustte tanimliyor
//Decleration.--- var a; gibi onlari en ustte tanimliyor.....
//Functions
//Assignment-assignment yapildiginda bellekte oolusuyor degiskenler

//Fonksiyonlarda da ayni sey mevcuttur yani su sekilde biz bir fonksiyonu tanimladiktan sonra kendinen once onu calstirabiliriz tabi bu arrow function lar icin gecerli degildir
//Cunku javascript dedigimiz gibi fonksiyonlari da calismaya baslarken en ustte degisken decleration yaptiktan sonra fonkiyonlari da en ustte tanimliyor ilk basta....

console.log(topla(12,34));//46 aliriz...
function topla(sayi1,sayi2){
    return sayi1+sayi2;
}

//let ve const ta var daki hoisting mantigi  yoktur...






