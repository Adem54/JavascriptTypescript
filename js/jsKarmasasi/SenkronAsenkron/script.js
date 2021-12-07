//Senkron ve Asenkron Programlama

//BILMEMIZ GEREKENLER
//1)Javascript Single thread ve Senkron olarak calisir
//Javascriptte o anda calisan kod parcacigi bir thread dir yani o anda yaptigi islemdir ve senkrn bir sekilde calistirir yani sirali bir sekilde calistirir..
//Thread- ornegin console.log("Merhaba") bu javascript icin  bir thread dir is parcacigi o an ki calstirmis oldugu koddur thread 
//Javascript senkron bir dildir ve ayni anda yalnizca tek bir is yapar...

const func1=()=>{
  console.log("Func 1 console Log 1");
  console.log("Func 1 Console Log 2");
 // alert("Alert Message");
}
//alert islemi bir konfirmasyon bekler biz alert e tiklayarak ok diyene kadar tum islemi bloklayacak thread i bloklayacak ve bir sonraki adima gecmeyecek...

const func2=()=>{
  console.log("Func 2 console Log 1");
  console.log("Func 2 Console Log 2");
}

func1();
func2();

//Senkron islemlerdeki problemimiz sudur islemler sirali gittigi icin eger islem biryerde tikanirsa aynen alertte kullanidan onay almadan ilerlemedigi gibi herhangi biryerde bir problem cikar ve program  bloklanirsa islemimiz devam etmez ve orda kalir senkron programlamadan dolayi...Hem onun icin hem de bizim sitemize cok fazla ziyaretci ve veri akis oluyor ve biz daha iyi performans almak icin de asenkron proramlamaya ithiyac duyariz ama her zaman en iyis anenkron dur diyemeyiz bazen de sitemiz cok yogun bir site olmayacaktir diyelim ki sadece sirket calisanlarinin kullanacagi bir site olacktir o zaman senkron programlama ismizi fazlasi ile gorecektir

let x=10;
console.log("1.gelen veri "+ x);

setTimeout(()=>{
  x=x+5;
},1000)//Burasi x i 1 saniye gec gonderdigi icin alttaki console burayi beklemeden calistirdi ve alttaki x 10 olarak geldi...Iste senkron olayindan dolayi tek bir islem yapiyor ve islem esnasinda herhangi bir problem olursa islem akisimizda sorun oluyor...

console.log("2.gelen veri "+ x);

x=x+5;
console.log("3.gelen veri "+ x);

//Simdi biz javascript ile api den uzak sunuculardan veri cekme olaylari ile yogun bir sekilde ugrasiyor olacagiz kimi zaman sunucu kaynak li problemlerden bekledigimiz veri gec gelebilir veya aksakliklar cikabilir iste senkron programlamada bu tarz problemlerde veriyi almadan calismasina devem ediyor ki bu buyuk bir problemdir bizim icin.....
//Senkron calismada performans problemi de yasiyoruz..

//Javascriptte biz asenkron programlama ile calismak isteriz cunku
//Ayni anda birden fazla islem yapmak isteriz
//Bir apiden alip da kullanacagimiz verileri kullanacagimz yerlere gelmeden once onlari alip almadigimizdan emin olmak isteriz yani veri kaynagindan veriyi almadan veriyi kullanacagimiz methodlari calistirmak istemeyiz iste bu kontrol un bizim elimizde bunu kendi kontrolumuz altinda yapmak isteriz...

//Javascript asenkron calismada callback, promise ve async await yapisini kullanir

console.log("Fonks calisma sirasi--Call Stack");
//Call Stack=>Fonksiyonlarin calisma sirasini gosterir

function func3(){
  console.log("Ben func3 um!");
  func4();
  console.log("Ben tekrar func3 um!");

}

function func4(){
  console.log("Ben func4 um");
  func5();
  console.log("Ben tekrar func4 um!");
}

function func5(){
  console.log("Ben func5 im");
}

func3();

//func3 u calistirmaya baslar icerisinde func4 u calistirir ve func4 un icine girer sonra da onun icinde de func5 i calistirmaya baslar ve console.log u calistirir func5 in calismasi bittikten sonra devame eder func4 un icinde sonra tekrar bir console log calistirip func4 bitene kadar devam eder ve  func4 u bitirip func3 un icinde devam eder ve func3 icinde de console u calistirip foncksiyonu bitirir.Single thread calistigi icin sirayla calstiriyor ayni anda 2 sey calistirmiyor... 


function task(message){
  let n=1000000;
  while (n>0) {
    n--;
  }
  console.log(message);
}

console.log("1");

setTimeout(()=>{
  console.log("2");
},1000);

console.log("3");
console.log("4");

task("Islem Tamamlandi!");

setTimeout(()=>{
  console.log("5");
},2000)

task("Islem tamamlandi2");

//Burda dikkat edelim ilgin bir olay var setTimeout da 1 sn beklemesi gerektigi icin hic setTimeout icindeki consolea girmiyor ve devvam ediyor task fonksiyonuna giriyor o esnada setTimeout daki 1 saniye sona eriyor ama senkron programlama mantigina gore task fonks unun calisturmaya basladigi icin onu bitirmeden setTime out icindeki console  u calistirmiyor ondan dolayi setTimeout daki console task methodunun sonlanmasini bekliyor calisabilmek icin...

//setTimeOut un calismasinin diger fonksiuyonlara gore farki nedir?
//setTimeOut un icindeki bir callback fonksiyon var old icin javascript calistirirken onu callback fonksiyonmlar sirasina aliyor ama diger normal fonksiyonlar ise Call Stack sirasina aliyor ve once call stackdaki fonksiyonlari calistiriyor islemleri calistiriyor javascript call stack daki islemler bitince call back daki fonksiyonlari calistiriyor.....


//Callback fonksiyonlar Asenkron fonksiyonlardir...
//setTimeout un kendisi call stack icindeki bir fonksiyondur ama setTimeout icindeki fonksiyon callbackk fonksiyonudur setTime out calisiyor ama icindeki fonksiyon bekliyor
//Bu islemlerinin sirasini event loop ile takip ediyor javascript

//BU BILGI ONEMLI.....
//Callbackler asenkron oldugu icin calismaya basliyor ama once senkronlar yani call stack ler biter ondan sonra onlar calisir ki callback ler senkron olanlar calisirken o esnada calisiyorlar zaten yani onlari calisraak bekliyorlar ki ondan dolay bekleme saniyeleri bitiyor ve senkronlar biter bitmez calisiyorlar yani senkronlar btiitkten sonra bekleme saniyeleri baslamiyor bunu zaten console ekraninda gelis hizlarindan anlayabiliriz

//Hemen hatirlayalim eventlistener lar yani kulandiigmiz addEventlistener methodu bir callback tir yani asenkron calisan bir methoddur unutmayalim...

const books=[
  {name:"Pinball 1973",
  author:"Haruki Murakami"
},
{name:"Ozgurluk",
author:"Zaygmunt Bauman"
},{name:"Turkiye de Cagdaslasma",
author:"Niyazi Berkes"
}
]

const listBooks=()=>{
  books.map((book, index)=>{
    console.log(book, index);
  })
}

listBooks();

//Biz yeni bir kitap eklememize ragman yeni kitabimiz eklenmemis oluyor biz
const addNewBook=(newBook, callback)=>{
  books.push(newBook);
  callback();
}


addNewBook({name:"Berlin Hatiralarim",
author:"Husrev Gerede"
}, listBooks);
//addNewBook fonksiyonunda bizim problemimiz su idi ki biz yeni bir kitap objesi ekliyoruz ama listeleme fonksiyonu daha once calistigi icin  ne yapmiyor bizim ekledigimiz kitabi gostermiyor peki biz buyuk projeler yaptigimizda ekleme nerededir onu takip etmemiz zor olur ondan dolayi biz ekledigimz veriyi garanti altina almak icin callback yani biz ekledigimiz elemani gorebilmek icin, onu ekldigmizi garanti altina alabilmek icin biz callback calistiririz yani tam ekldikten sonraya callback calistirarak ekledigimiz verinuin biz ekledikten sonra da sonucumuzu almak gormek istgeriz..

//Javascript senkron calisiyor ama biz bircok farkli veri ile api den gelen veriler ile vs calisarak onlari siraya koymaya ihtiyacimiz var dolayisi ile de burda biz gelen verilerin skntisiz bir sekilde eklenebilmesi icin verileri kontrolumuz dahilinde calismasini isteriz..onun icinde asenkrona ihtiyac duyariz yani callback e ihtiyac duyariz....
