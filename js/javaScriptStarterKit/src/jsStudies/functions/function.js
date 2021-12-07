//Sepete ekleme islemini simule ediyoruz...
//Bir urun detayinda sepete ekleme olur
//Bir ana sayfada sepete ekleme olur
//Bir de musteriye gonderilen urun mailleri ile birlikte spete ekleme buttonu gonderiyoruz yani sepete ekleme olayini defalarca kullaniyoruz o zaman fonksiyon olusturmaliyiz ve bir kere yazip surekli gittigtimiz yerlerde kullanmaliyiz...
//Herzaman biz merkezi yazip yazdigimizi gidip kullanmaliyiz..

function addToCart(productName) {
    console.log(productName)
    return productName;
}
// String concetenation  yani string ile degiskeni toplamak
addToCart("Elma")
let myProduct=addToCart("Telefon");
console.log(myProduct)
//Bu tur fonksiyonlari genellikle ayri dosyalarda tutariz mesela sepetle ilgili fonksiyonlari geliriz sepet.js isimli dosyada tutariz ve onun icinde sepetle iligili tum fonksiyonlari buluruz, sepete ekle,sepetten cikar, sepette topla gibi...

//Simdi buraya dikkat!
addToCart() //Undefined gelir hata vermez bu C# da direk hata verir..
//Undefined olarak doner parametre vermedigimiz icin, tanimlanmamis   
//null ile undefined ile karistirmayalim
//Undefined demek ben aslinda yogum, yok tanimlanmamis bellekte ona dair hicbirsey olusturmadik ve gondermedik!!!!!!tanimlanmamis, tanimli degil!!!
//Ayrica parametreye gidip sayi da verebiliriz cunku javascript tip guvenli bir degil bizim onu kendimiz yapacagiz eger yapmak istersek ama bu C# da olsa idi parametrede tipi ile yazariz ve oraya baska tip girilirse hata alinir...

//Default parametre atama!!!!
function addMyCart(productName="Armut", quantity){
    console.log("Sepete eklendi! "+ productName +": "+" adet:  "+ quantity)
}

addMyCart("Yumurta", 10);
//Fonksiyonun ismi ve parametrelerine fonksiyonun imzasi diyoruz...

//Parametreler sirassi ile verildigi icin bu durumda productName e 10 verecek ama quantity ise undefined gelecektir..
addMyCart(10);

//Peki biz 2 parametresi olan fonksiyonumuza 1 paramtre atamak istiyoruz ve atadigmiz parametre de 2.parametreye deger olarak gitmesini istersek nasil yapariz....
addMyCart(undefined, 10)

//Ama biz fonksiyonumuzun parametresine default deger atayacaklrimizi en son yazarsak hic sorun olmaz
//DEFAULT DEGER ATAMAK ISTEDIGIMIZ PARAMETRELERI EN SON ATAMALIYIZ....
function addMyFirstCard(quantity, productName="Kiraz"){
    console.log("Sepete eklendi! "+ productName +": "+" adet:  "+ quantity)
}

addMyFirstCard(15)//Simdi artik sorun olmadan productName default deger i alir, bizim verdigiimiz parametre degeri de quantity e gider


//Arrow function
//Biz bir fonksiyonu da bir degiseken atayabiliriz fonksiyon da referans turudur
//Tek satirda kullanacaksak suslu parantez yazmadan direk return de yazabiliriiz...
let sayHello = ()=>{
    console.log("Hello World!")

}

//Anonim Fonksiyonlar-Herhangi bir isim atanmamis fonksiyona verilen isimdir
//Anonim fonksiyonlara parametrede atayarak kullanabiilirz ayrica da anonim fonksiyonlari herhangi bir degere de atayabiliriz...
function Selam(){
    console.log("Selam");
}


//Anonim fonksiyonu parametre olarak baska bir fonksiyona atayabiliriz.Bu callback olarak bilinir

//Dis fonksiyonun degiskenlerine erisebilmesi icin onu dis fonksiyonun icinden Return ederiz...Bu bir clouser fonksiyon olarak bilinir

var dizi=[function(){console.log("Birinci Fonksiyon")}, function(){console.log("Ikinci fonksiyon")}, function(){console.log("Ucuncu fonksiyon")}];

dizi[2]();//Fonksiyonu bu sekilde cagirabiliriz...

//Simdi de arrow fonksiyonlarla tekrar duzenleyelim...

let dizi2=[
    ()=>console.log("Birinci fonksiyon"),
    ()=>console.log("Ikinci fonksiyon"),
    ()=>console.log("Ucuncu fonksiyon")
]

dizi2[2]();

//Anonim fonksiyonu gericagirma-callback olark cagirma
//Anonim fonksiyonun callback olarak cagirilmasi yaygin bir kullanim seklidir
//Fonksiyonun her elemaninda callback fonksiyonu calistirabilmek icin array_map fonksiyonu kullanalim
//array_map fonksiyonu bir callback fonksiyonu ve bir diziyi arguman olarak kabul eder.Dizinin her elemani boyunca yinelenir ve callback fonksiyonu her bir ogeye uygulanir.Callback, dizi degerini degistirecek bir deger dondurmesi ve array_map in degitirilen diziyi dondurmesi gerekir
//NOT:array_map , kendisine ilettginiz dizinin bir kopyasi uzerinde calisir.Orijinal diziye dokunulmadan kalir...

//Once callback kullanmadan normal yolla yapalim
console.log("Callback kullanmadan!")
var arr=[1,2,3,4,5]
var x=[]

for(var i of arr){
    x.push(i*i);
}
console.log(x);


//Simdi de callback kullanarak yapalim...
//callback fonksiyonu ile array_map() fonksiyonu kullanarak yapalim
console.log("Callback kullanarak")

let myArr=[1,2,3,4,5]

var yeni_arr=myArr.map((sayi)=> sayi*sayi);
console.log(yeni_arr);
console.log(myArr);

//Arrow function ile normal function arasinda this keywordunun kullanimi konusunda bir farklilik vardir ondan dolayi nerde arrow function nerde normal fonksiyon kullanacagimiza karar veririz...

//Arrow function ile normal function farki nedir?
//Arrow function-implisit ozelligi ustu kapali
//Arrow function yani oklu fonksiyon yani anonim fonksiyonu olusturduktan sonra cagirabiliriz olusturdugumz yerden once cagiramayiz...

//topla isimli fonksiyonunu bizi function ismi ile olusturdugumuz icin bu normal bir fonksiyondur ve biz bu fonksiyonu olusturdugumuz satirin oncesinde de cagirabilirz...Cunku javascript bizim icin bunu kod calismadan once sayfanin en basina alacak...

console.log(topla(4,7));
function topla(sayi1, sayi2){
    return sayi1 + sayi2;
}


 // console.log(topla2(4,8)) //Bunu yapamayiz hata aliriz....cunku arrow function tanimlandigi satirdan sonra kullanilabilir...
const topla2=(sayi1, sayi2)=> {
    return sayi1 + sayi2;
}
console.log(topla2(4,8))

//Biz arrow function mi kullancagiz yoksa normal function mi kullancagiz buna karar veririz... 


//BURASI COK ONEMLI!!
//SURDURULEBILIR SEKILDE PAREMETRELERI VERMEK!!!!
//Biz bu sekilde urun ile ilgili her elemanimiizi ayri ayri parametreye girmek surdurulebilir bir kullanim degildir..Bunu tercih etmemeliyiz cunku yarin oburgun birkac tane daha parametre eklememiz gerekirse o zaman da gelip buray eklemeye devam ederiz ve burayi sisiriirz...
//Birde javascript typesafety bir dil olmadigi icin de biz bu fonkksiyonu bircok farkli yerde kullanirsak oralarda paremetreleri hangi tip ve ne olarak girecegimizi bile hatirlayamayiz ki bu C# da bize bu gosteriliyor ama javascriptte bu yok ondan da dolayi bu sekilde direk yazmak cok da mantikli degil..Ozellikle de bu tip durumlar icin biz objeler olustururuz...
//Her parametreye ayri ayri gecmek yerine 3 paremetreyi ayri ayri yazmaky yerine 3 pareametreli bir obje olustururuz yarin oburgun ekstra bir ozellik daha ihtiyacimiz olursa o zaman da direk objeye ekleriz ve fonksiyon da da kullanabiliriz...
function AddToCart2(productName,quantity,unitPrice){

}

function addToCart3(product){
    //Biz bu sekilde console da product.productName diye yazarken parametreye verilecek degerin bir obje ve icerisinde productName isminde propert si olan bir obje oldugunu varsayiyoruz...
    //Iste bu tarz kullanimlarda biz im kendimizin parametreye gelecek degeri kontrol etmemiz gerekecektir bunlari da goz ardi etmeyelim...Typescript te burasi product gelecek diyerek zorunlu hale getirilebilir...
    console.log(product.productName)
    console.log(product.quantity)

    console.log(product.unitPrice)

}
//javascript tip guvenli bir dil olmadigi icin olusturdugumuz product1 objesi oldugunu varsayiyoruz biz parametrenin yani parametreye biz C# daki gib sen product tipisin diyemiyoruz ama oraya uyan ozel bir mesela product1 isminde obje olusturup direk o objeyi parametrede kullaniyruz...
let product1={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}
console.log("product1")
addToCart3(product1);

//REFERANS TIPLER
let product2={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}
let product3={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}

product2=product3;
product2.productName="KARPUZ";
console.log("product3 un productName: "+ product3.productName)//KARPUZ olarak gelecektir neden cunku referans tip olduklari icin deger ler degil adres tutulur...bu cok onemli her olustrulduklarinda once yeni bir adres olusturulur, icindeki degerler ayni olsa bile...
//DEGER TIPLER
let sayi1=10;
let sayi2=20;
sayi1=sayi2;
sayi2=100;
console.log(sayi1)//20


//YONETIMDEN GELEN TALEBE NASIL KARSILIK VERIRIZ!!!
//Yonetim diyor ki ayni anda bir den fazla urunu sepete ekleyebilelim diyoruz ve tumunu ekle butonu koyuyor daha dogrusu musteri bir urun alinca hemen ardindan bunu alanlar bunu da aldi diye alinan urun ile ilgili baska urunler de getiriyor ve oraya bir tane tumunu sepete ekle butonu koyuyor
//Bunu iterate edip ayri ayri da gonderebiliriz yani dongu ile dondererek birden fazla urunu gonderecegiz ....ama herzaman o sekilde yapmak bizi yorar ve best practise degildir...

function addToCart4(x){
    console.log(products)
    }

//Bir e-ticaret sitesinde urunleri listeledigimiz zaman karsimiza urunler geliyor ornegin laptoplar geliyor laptoplar nasil gelir liste seklinde o zaman bunlar biz dizi icinden geliyor ayrica laptoplarin her  birine ayri ayri bakacak olursak orda bir laptop da laptopun resmi,rengi,aciklamasi,fiyati,indirim orani vs bir suru bilgisi ile geliyor iste bunlar da objeler icinde geliyor C# da ise bunlar nesnelerle yani class larla gonderiliyor...
//Obje kapsullenmis, bir kutuya konulmus icinde farkli degiskenlerin oldugu bir degiskenler pakketi gibi dusunebiliriz...
//Gercek hayatta karsimiza farkli ozellikleri olan objeler gelir
//Convention array icinde objeler tanimlamak

//Bu arada suna dikkat edelim yukarda addToCart4 teki parametreye product ismini verdik aama o parametrenin obje olarak yazdigimiz products ile alakasi yok o tamamen parametredir yani  parametreye ne verilirse odur...
let products=[
    {productName:"Elma",
    unitPrice:10,
    quantity:5},
    {productName:"Armut",
    unitPrice:12,
    quantity:4},
    {productName:"Muz",
    unitPrice:18,
    quantity:7}
    
]

//Iste biz birden fazla urunu urun derken her bir urun bir objedir cuku obje icinde o urunun bir cok bilgisini ayni anda tutabiliyoruz...
//Urunlerimizi biz dizi lerin icine atariz ve bu diziyi parametreye gondeririz peki sonrasinda, biz dizinin icindeki urunleri kullanmak istersek nasil yapacagiz....
//Bu arada biz paremtreye products dizisinin referansini gonderiyoruz bunu untmayalim....Burasi onemli!!!!!Degerini degil referansini gonderiyoruz adresni gonderiyoruz....
addToCart4(products)
addToCart4("asdfa"+[1,2,3])

//BURASI COK ONEMLI!!!SCOP OLAYI VAR BURDA!!!!
//function addToCart4(products){ console.log(products) } Burda olay cok nettir burda parametreye hangi deger verilirse o degeri console a yazdirir oraya basar bu cok net bir olay...
//function addToCart4(x){ console.log(products) } Ama burda ise durum tamamen farklidir buraya cok dikkat... burda console icinde yazidirilan deger products isminde bir degerdir ama parametrede x diye bir deger verilmis ama bu x degerinin ne oldugunu bilmiyoruz biz dolayisi ile fonksiyonun scopu yani blogu nun icinde ki products parametreden gelmeyeceginden dolayi, artik console daki products icin scop fonksiyonun blogu disindaki scope gecerlidir yani console icindeki products artik fonksiyon disinda boyle bir degisken var mi onu kontrol edecektir ve fonksiyon disinda products isminde degisken buldugu anda onu ekrana basacaktir....Bir ust global alanda products isminde ne varsa onu dikkate alacaktir....
//*Ama biz parametreye products dedigimiz anda artikkkk console a basilan deger ne olursa console sonuca onu verecektir ve console icindeki products in artik disardaki products ile alakasi kalmamaistir, ancak parametrede products yazilmazda baska birsey yazilirsa o zamaan disariya bakacaaktir ve global de buldugu producst i dikkate alacaktir...
//BURAYI IYI ANLAYALIM COOK ONEMLI.......

//REST ILE SURDURULEBILIR FONKSIYON OLUSTURMAK!!!!
function add(number1,number2){
        console.log(number1+number2);
}

add(20,30)

//Biz burda 2 tane sayi gonderiyoruz ama bu surekli degisken birsey olsun mesela ve bize her seferinde artarak gelen sayilar olsun, 3 parametreli, 4 parametreli ve surekli artan parametrelerle kalici biz cozum olsun istiyoruz yani bize kac tane parametre gelirse gelsin biz  bir kere yazalim o artik herzaman gecerli olsun istiyoruz....

//SURDURULEBILIR, KALICI BIR SISTEM KURMA...BIZIM HER ZAMAN HEDEFIMIZ SURDURULEBILIRLIK YANI biz 2 paremetreli fonks olusturuyoruz adam 3 paremetreli gonderiyor 3 paremetreli koyuyoruz bu sefer de adam 4 paremetreli gonderiyor ve sistemimiz patliyor ee o zaman her seferinde adam kac gonderecek onunla ugrasamayiz o zaman bizde diyecegiz ki oyle bir yapi kuralim ki adam kac tane gonderirse godnersin benim sistemim ona karsilik verebilsin iste buunun cozumu REST tir..
function add2(...numbers){//Gonderilen hersey bir aray altyapisi ile tutulmus oluyor ki bunun C# daki karsiligi params dir....
    console.log(numbers)
}

add2(20,30)
add2(20,30,40)
add2(20,30,40,50)

//BURAYI IYI ANLAYALIM1!!!!!!
//BURDAKI GUZELLIK SU BURAYI IYI ANLAYALIM, PAREMETREYE GONDERDGIIMIZ ELEMANLAR I GONDERMEDEN ONCE HERHANGI BIR DIZI ICINE ATMAK ZORUNDA DEGILIZ DOGRUDAN PARAMETREYE YAZIYORUZ O CIKTI OLARAK BIZE DIZI ICINDE GONDERIYOR.....

//ONEMLI!!!!!
//...numbers dedigimiz zaman biz add2 fonksiyonun a ornegin 20,30 gonderdigimiz zaman arka planda aynen su islem yapiliyor let numbers=[20,30] diye bir dizi oolusturuluyor bu da daemektir ki yeni bir referans olusturuluyor ve onun adresine  deeger olarak gonderiliyor...
//EVET ARTIIK GELEN TUM TALEPLERI KARSILAYABILIYORUZ HER ZAMAN SURDURULEBILIRLIGIE ODAKLANALIM VE GELEN FARKLI TALEPLER KARSISINDA SISTEMIMIZ NE KADAR SURDURULEBILIR VE GELEN TALEPLERI KARSILAYABILIR BUNU SORGULAYALIM
function add3(...numbers){
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
    
        total=total+numbers[index];
        
    }
    console.log(total)
}

add3(20,30)
add3(20,30,40)
add3(20,30,40,50)


//BIRDEN FAZLA PARAMETREDE REST HER ZAMAN EN SON YAZILMALIDIR...
//Rest yaziminda dikkat etmemiz gereken sey sudur ki parametrede rest varsa rest i her zaman en son yazmaliyiz buna dikkat.....

//Peki biz rest i gelip de parametrede ilk siraya koyarsak 2.siraya koydgumuz number1 degeri ne olur number1 degeri patlayacaktir cunku bizim gonderdigmiz tum degerleri  rest operatoru alacaktir ondan dolayi bizim parametrede eger baska degerimz varsa onlar once yazilir rest en son yazilir..bunu unutma!!!
function add4(number1,...numbers){
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
    
        total=total+numbers[index];
        
    }
    console.log(total)
    console.log(number1)
}
add4(20,30)


//PEKI TAM TERSI BIR DURUM ILE KARSILASIRSAK!!!!
//BUNUN ADI SPREAD DIR BIZIM ELIMIZDEKI DIZIMIZIN ICINDEKI DEGERLERI TEKER TEKER AYIRARAK KULLANMAK ICIN VAR OLAN BIR SEYDIR ADI SPREAD DIR VE AYIR DEMEKTIR
//AMA BIZ VERDIGIMIZ TUM DEGERLERIN BIR DIZI ICINE ATILMASINI ISTERSEK VE DIZI OLARAK DONMESINI ISTERSEK O ZAMAN DA PARAMETREDE ...numbers degerine istedigimiz kadar degerleri atariz ve fonks icinde numbers diye donuldugu zaman dizi olarak almis oluruz yani elimizde bagimsiz olarak bulunan elemanlarimizi dizi icine cok kolay birsekilde atarak dizi icinde o elemanlari almis oluruz....
//Math.max(...values)
console.log(Math.max( 20,30,43,56,59,67))
//Ama benim elimde bir sayi dizini var ve api den geliyor o da ve dizi oolarak bulunuyor
let numbers3=[30,60,70,42,89]
//Bize boyle birsey gelirse direk elimizdeki dizimizi rest olarak yazarak isi bitirebiliriz...
console.log(Math.max(...numbers3));
console.log(...numbers3)//spread-ayir demektir zaten...30,60,70
console.log(numbers3)


//REST KULLANIM YERLERI
//1)Parametreye ne kadar deger girilirse girilsin tum girilen degerleri dizi icinde geri almak icin kullaniriz ki coook pratik bir kullanimdir bizim birbirinden bagimizsiz elemanlarimiz alir ve bize dizi icine atip geri verir..BUNUN ADI REST TIR
//2)Elimizde bir dizimiz var ve bu dizi icindeki tum elemanlerimizin Math.max() gibi hazir fonksiyondan gecmesi gerektigi durumlarda bu dizi icndeki tum degerlerin toplanmasi olur veya baska seyler olabilir yani mantik olarak bizden gonderilen dizi degerlerinin hepsi ile tek tek yapilacak islemlerden gecmesi gerekktigi zaman yine rest ile bu isi kolayca yapariz...BUNUN ADI DA SPREADDIR
//REST BIRBIRINDEN BAGIMSIZ DEGERLERIMIZI BIR DIZIDE TOPLAR
//SPREAD ISE BIR DIZI OLARAK BULUNAN ELEMANLARIMIZI BIRBIRINDEN BAGIMSIZ HALE GETIRIRI VE AYIRIR...


//DESTRUCTING

let regions=["Telemark","Grenland","Agder"]

//Simdi bize dizi ile gelen yapi birbirindeen tamamen farkli ve bambaska yapi oldugunu dusunelim yani her bir region farkli yapilardan olussun mesela ve iclerinde farkli farkli bizim ihtiaycimi olan degerler olsun bizim bunlardan istedigimize hemen ulasip kullanmamiz gereken bir durum olussun mesela

//let ile biz bir degisken olusturuyoruz

let [telemark,grenland,agder]=["Telemark","Grenland","Agder"]

console.log(telemark)//telemark degiskenine "Telemark" atandi
console.log(grenland)
console.log(agder)

let [telemark1, grenland1]=["Telemark","Grenland","Agder"]

console.log(telemark1)
console.log(grenland1)

let [telemark2]=["Telemark","Grenland","Agder"]

console.log(telemark2)

//Yukardaki orneklerde gordugumuz gibi elimizde var olan bir dizinin elemanlarindan istedigimiz kadarini degiskenlere atamak istersek bu sekilde istersek sadece dizinin ilk degerini atariz istersek dizinin 2 degerini istersek de 3 degerini degiskenlere atariz...

let[telemark3,grenland3]=[{name:"Telemark", population:"50T"},"Grendland","Agder"]

console.log(telemark3)
console.log(telemark3.name + " | "+ telemark3.population)
console.log(grenland3)

let [{name,population}]=[{name:"Telemark", population:"50T"},"Grendland","Agder"]

console.log(name,population)

//GERCEK HAYAT KULLANIMLARINDA BUNLAR COK ISIMIZE YARAYACAK!!DIZI VEYA OBJE ELEMANLARIMIZI FARKLI FARKLI DEGISKENLERE ATAYIP UYGULAMANIN DEVAMINDA ARTIK DEGERLERI  O DEGISKEN ISIMLERI ILE KULLANMA, BURDA DESTRUCTRING DE OBJELERDE BU ISLEMI YAPARKEN ICINDE PROPERTIESLERIN VALUE LERI OLAN OBJENN PROPERTY ISIMLERI ILE AYNI ISIMLERE ATAMALIYIZ BU ONEMLI EGER ATAMAZSAK O ZAMAN FARKLI OLAN PROPERTIES UNDEFINED OLACAKTIR!!!

//BUNLAR BIZE APILERDEN BU SEKILDE GELECEKTIR UNUTMAYALIM....VE BIZ O VERILERIN ICINDEKI DEGERLERI FARKLI FARKLI DEGISKENLERE ATAMAK ISTEYECEGIZ HER ZAMAN!!! 

let [telemark4,grenland4,agder4,[telemarkCities,grønlandCities]]=[{name:"Telemark", population:"50T"},{name:"Grenland", population:"20T"},{name:"Agder", population:"30T"}, [
    ["Skien","Porsgrunn"],
    ["Drammen","Oslo"],
    ["Kristiansend","Arendal"]
]]

console.log(telemarkCities)

//BU OZELLIGI REACT TA COK KULLANACAGIZ BUNLARI COK IYI ANLAMALIYIZ!!!!!!
//DESTRUCT ETMEK-PARCALAMAK

//EGER OBJE ICINDEKI PROPERTIES LERE KARSILIK GELEN VALUE LERI DE KENDI ISTEDIGIMIZ DEGISKENLERE ATAMAK ISTERSEK O ZAMAN DA BU SEKILDE YAPABILIRIZ...
let newProductName, newUnitPrice, newQuantity;
//Javascript {} yazdgimiz zaman bunu bir blok olarak kabul ediyor ondan dolayi hata aliyoruz...yani bunu bir obje olarak degil de blok olarak kabul ediyor ama obje oldugnu anlamasi icin ise
  ({productName:newProductName,unitPrice: newUnitPrice,quantity: newQuantity}={productName:"Elma",unitPrice:10, quantity:5})

  //Bu kullanimlar genellikle fonksiyonun icinde kullanilir

console.log(newProductName,newUnitPrice)

let myNumber1,myNumber2,myNumber3;

[myNumber1, myNumber2, myNumber3]=[23,34,56]
//let ile degiskenleri once tanimlayip sonra onlari dizi icinde esitlemek ile direk dizi icine yazip dizinin basina let koymak ayni seydir.. unutmayalim.. let [myNumber1, myNumber2, myNumber3] 

console.log(myNumber1,myNumber2,myNumber3);

//GERCEK HAYATTAN BIR ORNEK!!!!!!!COK ONEMLI!!!
//Reactta ust komponentten buraya parametreler gonderilir params adi altinda bir suru gelir params., params. diye diye okumaya calisiriz ama onun yerine biz ne yapariz ust komponentten biliyoruz ki icinde title diye birsey var
let params={title:"Login1", description:"Login Islemi"}

function login({title,description}){
    console.log("<h1>"+title+"</h1>");
}

console.log("adem")