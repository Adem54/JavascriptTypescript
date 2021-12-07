//Api Nedir?Application Programming Interface
//Api ler bir uygulamanin ozelliklerinin baska uygulamalar tarafindan kullanilmasini saglayan ara bir katmandir
//Github Api-Kendi basina bir uygulama-Istegi aliyor gidiyor arkada veritabanina sahip uygulamadan verileri aliyor ve istege json verisi ile karsilik veriyor

//Api ler her zaman Web-Api olmak zorunda degil.Her uygulamanin kendi icinde APi si olabilir
//Uygulamalar neden Api ye ihtiyac duyuyor...
//Eger Api lerimiz olmasa idi, github daki bir kullanicinin repo bilgileirini ancak onlarin html iceriklerini alarak ulasmaya calisirdik ama o da efektif bir yontem degildir...
//REST API-Web applicaton lar arasinda iletisim kurmaya yariyor-REPRESENTAL
//SOAP MIMARIS
//REst yapisi cok hizlidir, stateless herhangi bir siteyi tutmuyor..Rest api sadece kullanicinin gonderdigi istegi donuyor ama onceki isteklerijni kaydetmiyor.Stateless oldugu icin zaten cok daha hizli davraniyor...Rest api lere http isteklerinde bulunurz...
//Bize Json objesi donduruyor....
//Bircok programlama dili ile rest api yi kullnabili\z,Python,C#,Javascript ile.Biz restapi yi bircok dille birlikte kullaniyoruz...
//Apilerin yapisi degisebilirler

//SetTimeout, setTimeInterval,clearInterval
setTimeout(function(){
    console.log("Naber")
},2000);//Belli bir islemi, belli bir zaman sonra calistirabiliyoruz
//Burda islemin uzunluguna gore 2000sn artabilir ornegin icerdeki islem 3 sn surer 2 sn de bekleme suresi ile birlikte 5sn surebilir...
let i=0;
let value=setInterval(() => {
    //1 saniye araliklarla fonksiyonu surekli calistiracak
    i++
    console.log("i: ",i);
}, 1000);

//Set interval i biz istedgimiz yerde durdurmak iicin clear Interval kullaniriz
document.querySelector("#btn").addEventListener("click", function(){
    clearInterval(value);//biz butona basinca sen setInterval i durdur demis oluoruz...
})
