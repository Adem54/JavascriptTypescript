//Fonksiyonlar 2 sekilde olusturulur


//Biz bir fonksyonu tanimladiktan once de bir fonksiyonu calistirabiliriz demektir bu...
console.log(square(12));

//1-Function decleration-function statement
function square(num){
    return num*num;
}
//fonksiyonu gorebilmek icin ise invoke etmemiz gerekiyor ve asagida invoke etmis oluyoruz....
//Invoke
console.log(square(5));

//
console.log(square)//Burda biz fonksiyonun kensini yazdiriyoruz calistirmiyoruz

//Function deceleration---HOISTED
//fonksiyonlar da biz tanimladiktan sonra javascript en ustte yani ilk once, fonksiyonlari da tanimliyor --hoisting
//Biz tanimladiktan once de bir fonksiyonu calistirabiliriz demektir bu...

//Parametre nedir?
//Fonksiyonu tanimlarken, yazarken parantez icine yazdigimiz degiskenlere parametre diyoruz
//Arguman?
//Fonksiyonu calistirirken parantez icine yazdigimiz degerlere de arguman diyoruz...

//Function Expression
//Biz bir fonksiyonu bir degiskene atiyorsak, degiskene atarken de fonksiyonu biz degiskene atiyorsak anonim bir fonksiyon olusturur ve degiskene atariz....

const topla=function(number1,number2){
    return number1+ number2;
}

console.log(topla)
console.log(topla(12,10));

//Neden Function Expression Function decleration dan daha cok kullanilir?

//FIRST-CLASS FUNCTIONS
//Biz fonksiyonlari degiskene atadigimiz zaman variable a yani, artik ona bir variable gibi davranabiliriz ve bizim icin artik first-class function olmus oluyor...
//Javascriptte biz fonksiyonlari bir degiskene atayabildigimz icin first-class function gibi yani ondan dolayi biz fonksiyonlari bir dizi icinde veya bir obje icinde de kullanabiliriz, tanimlayabiliriz yani aslinda bir degiskene atamis oluyoruz orda das

const myArr=[6,"Arin", function(){console.log("Merhaba")}]
//dizi icindeki fonksiyonumuzu calistiralim...
myArr[2]();//invoke ettik....

const myObj={
age:5,
name:"Arin",
func:function(){
console.log("Iyi Geceler")
}
}

myObj.func();//Invoke ettik....

//IIF-IMMEDIATELY INVOKE FUNCTION
//IIF-Immediately Invoke Function Expression-Aninda calistirilmis fonksiyonlar.Olusturuldugu gibi calistirilan fonksiyonlar...

(function myNewSayi(){return 5;})//Bu hali ile direk calistirmis oluyoruz direk invoke etmis oluyoruz fonks iyonu

// console.log(mySquare(8))-Hata aliriz cunku function expression yani function first-class da HOISTING yoktur...!!!!Tanimlandiktan once calistirilamaz....
const mySquare=function(num){
    return (num*num);
}

//Javascriptte firs-class function olmasinin bize getirdigi en buyuk avantajlardan bir tanesi bir bir fonksiyonu baska bir fonksiyona parametre olarak veya arguman olarak alabiliriz....
//FONKSIYONU FONKSIYONA PARAMTRE OLARAK ATAMAK!!!!
//first-class fonksiyon yani bir degiskene atanabilen fonks diger fonksiyonarlari arguman olarak alabiliyor

const addFive=function(num,func){
    console.log(num+ func())
}

addFive(10,function(){return 5});//10+5=>15
//BEST PRACTISE.....
//1)First class fonksiyon(degiskene atanmis fonksiyon) diger fonksiyonlari arguman olarak alabilir buna dikkat edelim.....
//2)Biz bir fonksiyonu baska bir fonksiyonun return ifadesindde de kullanabiliriz....
const myNewFunc=function(num){
    return function toDouble(){
        console.log(num*2);
    }
}
//Bir fonskiyonu baska bir fonksiyonun return ifadesinde kullaniyoruz....
myNewFunc(8);//invoke ettik ama herhangi bir donus alamadik,Neden?

//IC ICE FONKSIYONLAR BU SEKILDE CALISTIRILIR.....UNUTMAYALIM...
myNewFunc(8)();//10
//Bunlari biz ic ice gecen componentlerin calisma mantigi budur.....bif fonks baska bir fonks icersinden return olarak donebiliyor....

const result=myNewFunc(7);
console.log(result);
result();//14 u aliriz bu sekilde de ic ice bur fonsiyonu calistirabiliriz...

//IIFE-IMMEDIATELY INVOCABLE FUNCTIONAL EXPRESSION
//Bir fonksiyon olusturuldugu anda calismasini yani invoke edilmesini saglar...
//Biz bu yapilara nerde ihtiyac duyariz bunu dusunelim?
//Mesela sayfamiz yuklenirken bazi islemler yapmak isteriz ki bazi islemlerin tek seferde olup bitmesini isteyebiliriz birde mesela fonks icinde fonks olan ve en distaki fonksiyon  1 kere calisir ama icerdeki fonksiyon her seferinde calisir dolayisi ile biz bu ikisinin arasina bir degisken tanimlarsak o zaman o degisken sadece bu fonks icinde tanimlanmis olur ve global sciope olmamis olur ayni zamanda da sadece bu fonk has olmus olur ve de icerdeki fonks da bu degiskenin degerini istedigimiz gibi  degistirebiliriz.... 

//IIFE
const sum=function(){
    console.log(5+12);
    return 5;
}();

console.log(sum);//Biz IIFE seklinde olan fonksiyonlari calistirdiktan sonra degiskenimiz eger fonks dan return olan bir deger varsa onu donecektir ancak eger donecegi hicbir degeri yoksa o zaman undefined verecektir Ayrica gelip da sum() u ayrica invoke edersek hata aliriz cunku zaten invoke edlilmis bir fonk tekrar invoke edilmeye calisilirsa hata alinacaktir...

//EGER FONKSIYONU BIR DEGISKENE ATAYARAK DEGILDE DIREK KULLANIR ISEK-IIFE-IMMEDIATELY INVOCABLE FUNCTIONAL EXPRESSSION OLARAK O ZAMAN EN DISINA DA PARANTEZ KOYMAMIZ GEREKIYOR...
(function(){
    console.log(15+22);
    return 5;
})();

//javascript engine ilk function gordugu zaamn onu function decleration zannettigi icin functiona ismi eksik diye hata aliriz eger isimsiz bir islem yapmaya calisirsak eger....

(function myNumbers(){
    console.log(33+45);
})();

//COOOOK ONEMLI.......
//JAVASCRIPTTE DEKI HEMEN HEMEN HERSEY GIBI FONKSIYONLARDA BIRER NESNEDIR ASLINDA......BU COK ONEMLI BIR GBILGIDIR.....
function multiplyNumbers(num){
    console.log(num*num);
}
multiplyNumbers(18);
console.log(multiplyNumbers);

console.log(multiplyNumbers.name);
console.log(multiplyNumbers.length);
console.log(multiplyNumbers.prototype);
console.log(multiplyNumbers.arguments);


//constructor function nesnesi ile de bu sekilde nesneler olusturabiliriz....
function ShowPerson(name,surname){
    this.name=name;
    this.surname=surname;
}

let person1=new ShowPerson("Adem","Erbas");
console.log(person1.name);
console.log(person1.surname);