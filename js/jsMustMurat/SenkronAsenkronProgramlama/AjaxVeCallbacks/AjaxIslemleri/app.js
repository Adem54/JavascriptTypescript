//Senkron Islemler
//Zaman sirali islemler demektir
//process1();
//process2();
//process3();

//Bizim senkron 3 tane islmimiz varsa sira ile bu su anlama gelir process2 baslamak icin process1 in bitmesini beklemek zorundadir,process3() de baslamak icin process1 ve process2 nin bitmesini beklemek zorundadir...
//Javascriptte bazi isler senkron bazilari asenkrondur ama daha cok asenkron islemler ilerler
//Yani bir yerden veri bekler diger fonksiyon baslamak icin ve o veri gelmeden islemine baslayamaz..
//Senkron islemlerdeki problemimiz sudur islemler sirali gittigi icin eger islem biryerde tikanirsa aynen alertte kullanidan onay almadan ilerlemedigi gibi herhangi biryerde bir problem cikar ve program  bloklanirsa islemimiz devam etmez ve orda kalir senkron programlamadan dolayi...Hem onun icin hem de bizim sitemize cok fazla ziyaretci ve veri akis oluyor ve biz daha iyi performans almak icin de asenkron proramlamaya ithiyac duyariz ama her zaman en iyis anenkron dur diyemeyiz bazen de sitemiz cok yogun bir site olmayacaktir diyelim ki sadece sirket calisanlarinin kullanacagi bir site olacktir o zaman senkron programlama ismizi fazlasi ile gorecektir

//BURASI ONEMLI!!
//Simdi biz javascript ile api den uzak sunuculardan veri cekme olaylari ile yogun bir sekilde ugrasiyor olacagiz kimi zaman sunucu kaynak li problemlerden bekledigimiz veri gec gelebilir veya aksakliklar cikabilir iste senkron programlamada bu tarz problemlerde veriyi almadan calismasina devem ediyor ki bu buyuk bir problemdir bizim icin.....
//Senkron calismada performans problemi de yasiyoruz..

//Javascriptte biz asenkron programlama ile calismak isteriz cunku
//Ayni anda birden fazla islem yapmak isteriz
//Bir apiden alip da kullanacagimiz verileri kullanacagimz yerlere gelmeden once onlari alip almadigimizdan emin olmak isteriz yani veri kaynagindan veriyi almadan veriyi kullanacagimiz methodlari calistirmak istemeyiz iste bu kontrol un bizim elimizde bunu kendi kontrolumuz altinda yapmak isteriz...

//Javascript asenkron calismada callback, promise ve async await yapisini kullanir
//BU BILGI ONEMLI.....
//Callbackler asenkron oldugu icin calismaya basliyor ama once senkronlar yani call stack ler biter ondan sonra onlar calisir ki callback ler senkron olanlar calisirken o esnada calisiyorlar zaten yani onlari calisraak bekliyorlar ki ondan dolay bekleme saniyeleri bitiyor ve senkronlar biter bitmez calisiyorlar yani senkronlar btiitkten sonra bekleme saniyeleri baslamiyor bunu zaten console ekraninda gelis hizlarindan anlayabiliriz

//Hemen hatirlayalim eventlistener lar yani kulandiigmiz addEventlistener methodu bir callback tir yani asenkron calisan bir methoddur unutmayalim...
//Asenkron Islemler! 
//process1();
//process2();
//process3();

//Asenkron Yapilar
//Ajax
//Fetch(Promise)
//Node.js

//Asenkron ile Mucadele
//Callback(es6 oncesi)
//ES6 Promise
//Async-Await

//Json-Javascript object notation
//Normal objelerler-object literal ile olustrudugmuz objelere cok benziyor
//Asenkron bir sekilde veri alis verisi yaparkan, apilerden veri cekerken verileri json olarak aliriz

//Ajax-Asenkron javascript and Xml
//Veri alma ve Veri Gonderim Asenkron olarak
//Sayfa yenilenmeden asenkron veri almak
//Arka planda asenkron islemler
//XHR Objesi(XmlHttpRequest)=>Bu obje sayesinde asenkron olarak veri alma islemlerini gerceklestiririz bu obje internet tarayicilari icerisinde bulunan objedir
//Json & xml-Verilermiz hem json objesi seklinde hem de xml gelebilir ancak json formati cok daha hizli ve cok daha basit bir yapida old icin json olarak gelir veri alisverisimiz..

//Ajax Nasil Calisir
//Biz bir butona tiklayinca
//1-XmlhttpRequest objesi olusur-Browser da
//2-Server a veya Apiye bir tane HttpRequest gonderilir  get,post,put,delete-Browser dan
//3-Bu request internet uzerinden gidiyor ve o server a ulasiyor-Internet araciligi ile
//4-Server a ulastigi anda HttpReques bir process e giriyor,talep isleme aliniyor
//5-Server da isleme girdikten sonra bize bir response olusturuyor json olarak ve onu yine internet uzerinden bize asenkron olarak gonderiyor(browser a gonderiyor)
//6-Alinan data arka planda asenkron olarak kullanabiliyoruz ve aldigmiz dataya gore sayfamizin icerigi guncelleneniyor.Simdi burdaki kritik olay sayfa yenilenmeden veri bize geliyor, yani o veriyi almadan kullaniciya gostermemis oluyor


//Simdi bir ornek yapacagiz example.txt icindeki verimizi butona basinca sayfa yenilenmeden almaya calisacagiz
//Butona tiklayarak isleme baslariz..
document.querySelector("#btn").addEventListener("click",function(){
    //Browser da bulunan XMLHttpRequest objesini olustururuz
    const xhr=new XMLHttpRequest();
    console.log(xhr);
    //XmlHttpRequest objemiz icinde bir cok ozellik vardir
    //readyState -server a baglanmadigimzda 0 gelir
    //readyState-0-request not initalized-herhangi bir istekde bulunulmadi
    //readyState-1-server-connection established 
    //readyState-2-srequest received 
    //readyState-3-processing request 
    //readyState-4-request finished and response is ready 
    //response,response.Text ile veri gelir ve string olarak gelir json olarak bizde onu json.parse ile cevirerek kullaniriz,ayrica responseXML diye de bir ozellik var eger veri XML formatinda gelirse de veryi burdan aliriz..
    //Icerisinde status ozelligi  kodlari vardir...ve buraya gelen sayidan ne tur bir response aldgimizi da anlayabiliriz yani bu status kodlarini biz kontrol yaparken kullaniriz...
    /*  Http Status 
   200-OK
   400-Bad Request-gecersiz syntax dan dolayi server istegi anlayamiyor
   403-Forbidden
   404-Not found-olmayan bir sayfa
   505-Internal Server Error
   */
//statusText- bu da status durumunun text ini gonderir bize
//onReadyState diye bir ozellik vardir bu da readyState durumu degistgi zaman cagirilacak bir fonksiyon tanimlariz.Bu sayede ajax islemlermzi gerceklestiririz
//onload,onerror,onprogress seklinde ozellikelrimiz de mevcuttur

//XMLHttpRequest ile Adim adim Yapilacak Islemler
//Oncelikle biz 1 tane XMLHttpRequest objesi olusturduk yukarda
//Daha sonra biz bir tane baglanti ssaglamamiz gerekiyor onun icinde open fonksiyonunu kullaniriz

//onreadystatechange bir eventtir---unutmayalim, bu event ne en ufak bir degisiklikte tetikelenecektir ve biz bunu tetiklendiginde bir fonksiyon calisacak sekilde ayarlayarak kontrol ederiz...
//Ne zaman calistiriliyor-readyStateChange e bir fonks atariz ve onreadyStateChange degistigi zaman bu fonksiyonumuz calistirilir..xhr icindeki readyState imiz degistikce bu fonksiyonumuz calistirilacak
/*
xhr.onreadystatechange=function(){
    console.log(this.readyState);//Ready state lerimiz 1,2,3,4 seklinde 4 kjez calistgini goruyoruz
    1-Server ile baglanti saglandi.state degisti-readyState-1-server-connection established-status 0 olur cunku sadece baglanti saglanir herhangi bir request gonderilmez henuz
   readyState-2-request received-status 200-istek gonderiliyor henuz text alinmiyor burda 
    readyState-3-processing request -status-200-Bu bir text dosyasidir textini aliyoruz burda...
    readyState-4-request finished and response is ready-status 200-Burasi artik respons hazir ve 200 den de basarili oldugunu anlayabiliriz bu durum da ise tamam artik veriyi alabilirsin dmeektir
    if(this.readyState === 4 && this.status === 2){
        console.log(this.response);//Responsu da burdsa aliriz
        console.log(this.responseText);//Response textimizi bu sekilde alabiliriz...
    }
    console.log(this.status);
} */
//Ancak onreadystatechange ye bir tane fonks atamak eski bir yontem, bizim ayrica responsumuz hazir oldugu zaman calisacak bir fonksiyonumuz var.Bizim xhr objemizi icinde ki onload methodumuz, veya fonksiyonumuz a bir fonks atarsak responsumuz hazir oldugunda calisacaktir....Birdaha dikkat edelim bu fonks sadece responsumuz hazir oldugunda calisir....

//Biz xhr objesi icindeki onprogress eventini da kullanabiliriz...bu da readystate 3 oldugu zaman calisacaktir...
xhr.onprogress=function(){
    console.log("Process isleniyor.....", this.readyState);
}


//readtstate in 4 olmasi demek response hazir dmektir ki response hata mesaji da olabilir sonucta onun icin biz burda redisstate in 4 olacagindan eminiz ama sonucun 200 oldugundan emin degiliz onun icin status 200 u kontrol etmeliyiz...
xhr.onload=function(){
    if(this.status===200){
        console.log(this.readyState + "   "+  this.status);
        console.log(this.responseText);//4-200
        //Algimiz responsu div icine yazdiralim
        let div=document.querySelector("div");
        div.innerText=xhr.responseText;
       
    }
}
xhr.open("GET","example.txt",true);//true dedgimiz zaman bu islmein asenkron olmasini istiyoruz demis oluyoruz...
xhr.send();//get request yaptigimiz icin send parantezine herhangi bir string yazmiyoruz ancak post request islemi yaptimgz zaman send icindeki paranteze herhangi bir sting gondermek zorunda kalacaktik.Burda sadece deger almak istedigimiz icn ve get request gonderdigimiz icin sadece xhr.send() gonderiyoruz
})