
//BASINA HIC BIR DEGISKEN ATMASI YAPMIYORUZ AMA YINE DE GORUNTULEYEBILIYORUZ
a=22;//hic bir degiken kullanmadan bir sayi tanimladik, integer ve hic sorun yasamadik
console.log(a);
console.log(typeof(a));



//Javascriptte bir programi calistirdigimiz zaman o yazdigimiz kodlar calisirmadan once hoisting oluyor

var a;
var a=3;//var degiskeni declare etmemizi saglar
//Degisken declare edildikten hemen sonra javascript compiler tarafindan initialize edilir, calistirilmaya hazir hale getirilir bellege atilir degisken
//Peki bu degiskenin karsiligi ne, a=3 dedigimiz zanman yani bir deger atadigimi zaman da assign etmis oluyoruz
//DEgiskenin basina var koymazsak declare etmemis oluyoruz...
//Declare edilen tum degiskenler programin en ustune alinir
//JAVASCRIPT TANIMLANAN DECLARE EDILEN TUM DEGERLERI PROGRAMIN EN USTUNE ALIYOR VE INITALIZE EDIYOR YANI BASLATIYOR 
console.log("sayi1: "+ sayi1);//undefined gelir...Neden cunku console.log un da ustunde ilk basta javascript biz sayi1 e var ile tanimladigimiz icin javascriipt onu initalise edip bellekte olusturdu ama biz ona assigmentii console dan sonra uyaptik yani ona gorev atmasini sayi atamasini sonradan yaptik ondan dolayi not defined demiyor ama undefined yani degisken var ama atmasi yok diyor...
var sayi1=12;

//console.log(sayi2)//sayi2 is not defined hatasi aliriz cunku hic tanimlamadikkkk

//Declare
//Initialize
//Assignment

//TUM DECLARE EDILMIS YANI VAR,LET,CONST ILE TANIMLANIS VARIABLES LAR JAVASCRIPT TARAFINDAN PROGRAMIN EN USTUNE ALINIR..

function test(){
    a=3;
}

//Biz basina var koymadan tanimladigimiz degiskenler global skop altinda tanimlanacaktir...unutmayalim...Tabi bu fonksiyonu calistirdigimiz zaman gecerli olmaya baslayacaktir..Ama biz o degiskeni var ile beraber kullansa idik o zaman o test methoduna ozgu degisken olacakti..

//ONEMLI!!!!
//HOISTING KAVRAMI YANI PROGRAMIN VAR ILE TANIMLADIGIMIZ DEGISKENLERI PROGRAMIN BASINDA TANIMLAMASI VAR ICIN GECERLIDIR LET VE CONST TA GECERLI DEGILDIR...

//FONKSIYONLAR DA DA HOISTING GECERLIDIR ve BU SAYEDE BIZ FONKSIYONU TANIMLAMADAN ONCE CAGIRABILIORUZ VE BU HARIKA BIR YONTEM AMA BU ARROW FUNCTIONS LAR ICIN GECERLI DEGILDRI....AYRICA EXPRESSION FUNCTIONLAR ICINDE GECERLI DEGILDIR YANI BIR DEGISKENE ATANAN FONKSIYONLAR
//Biz fonksiyonu tanimladiigmi zaman javascript onu icindeki ozelliklerle birlikte en basa, en uste tasiyor ve onu initialize ediyor.....Dolayisi ile de biz fonksiyonlarimizi istidedgimiz yerde cagirabiliyoruz

test2();
function test2(){
    console.log("test2")
}

//Javascript in hoisting siralamasi. yani declare edilen elementleri javascript en uste hangi siraya gore aliyor 
//1-Degiskenlerin declare ve initalize islemleri
//2-Fonksiyonlar
//3-Assignment

//Ama 
var test3=3;
function test3(){
    return 13;
}
console.log(" test3 type:  "+typeof(test3))//number gelir seebep bu javascriptin hoisting de siralam olarak  once var degiskenini en uste aliyor sonra function lari aliyordu sebebi budur ondan dolayi test3 karsimiza number tipi olarak cikiyor

//Yukardaki tanimalamayi javascript su sekilde yorumlayacaktir....
//1-var test3; seklinde once bir initializse islemi yapar
//2-Sonra function lari tanimlar function test3(){}
//3-Son olarak da atama assignment islemi yapari text3=3 der ve test 3 son olaran number olarak kalacaktir....

//JAVASCRIPT BU SEKILDE DAVRRANIYOR HOISTING DE
//Javacript nasil ele aliyor bakalim
//Javascript programi calistirmadan once hoist ediyor...
var x=3;
var y=4;
var test4=8;

function test4(){
    return 1;
}

test4();

//Javascript ustteki x,y,test4 degiskenleri ile test4 fonksiyonunu nasil ele alacak bakalim

//1-Once degiskenleri sayfanin en basinda en ustunde initalize eder...
var x;
var y;
var test4;

//2.Degiskenlerden sonra sayfanin en ustunde fonskiuyonlari tanimlar initalize eder
function test4(){
    return 1;
}
//3.Degisken ve fonks dan sonra da degiskenlerin assigment larini verir degerlerinin atmasini yapar ve test4 degiskeni tip son oolarak number olur
x=3;
y=4;
test4=8;

//Assignment ile declare i karstirmayalim javascript en son assigmentlari alir once declare edilen degisken ve fonksiyonlari initaliaze etmeye baslar hoisting kavrami ile....
//Yani
var test5=function(){
    return 23;
}
//Bu bir declare degil assignment islemidir dolayisi ile javascript bunu initalize ettikten sonra assignemnt edilen degiskenler kismini yazarken yazacaktir yani once degisknler in initalise, sonra fonks initalise en son da assignmentler.....dollayisi ile test5 in tipi fonksiyondur fonskiyonlar da birer nesnedir ve referans tiplerdir...
