//Callback functoins



//ASENKRON ISLEMLERI CALLBADCK SAYESINDE YONETEBILIRIZ

//AddEventlistener icinde callback fonksiyon vardir
//forEach kullanirken callback fonksiyon kullaniriz
//setTimeout fonks da callback fonksdur
//Kendi asenkron islemlerimizi de asenkron fonksiyonlar tarafindan yonetebiliriz..

//ASENKRON BIR DURUM OLUSTU!Bu su demektir biri calisirkne digeri de calisiyor ve islemler birbirini beklemiyor.. yani biri digerini bloklamiyor ama senkron durumlarda calisan bir islev sona ermeden digerlerinin calismasina izin vermiyor...

//process2 yi callback fonks olarak process1 prametresine gondeririz
/*
function process1(callback){
   setTimeout(() => {
    console.log("Process 1");
    callback();
   }, 3000);
}
function process2(){
    setTimeout(() => {
        console.log("Process 2");
    }, 2000);
   
}  */
//Bu fonksiyonlar ard arda calisacak normalde ancak...
//process1(process2);

//Process2 nin Process1 den sonra calismasi gerekirse ornek Process 2 den bir veri geliyor ve o gelen veri Process1 de parametrede kullanilacak dolayisi ile Process 2 gelsin ondan sonra Process1 calismasini istersek o zaman ne yapacagiz..(Bu senaryo ile cok karsilasacagiz...)
//Apilerden veriler hemen gelmezler ve zaman alir birz ama bizim kodlarimiz hemen asgi dogru aninda calisirsa gelen veriyi alamadan calisir ve o zaamndas kullanciiya veriyi gosteremez o zaman demekki asenkron programlama bizim icin coook onemliii...

//ASENKRON BIR DURUM VE APIDEN VERI ALIRKEN KI OLMA IHTIMALI DURUMU SIMULE EDIYORUZ....
//CALISIRKEN BIRBIRININ BEKLEMEZ ASENKRON DAN DOLAYI ISTE BIZ CALLBACK ILE BIZ ASENKRON DURUMUNU KONTROL ALTIINA ALIYURZ........
const langs=["Python","Java","C#"];
function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000)
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    },1000)
}
addLang("Javascript", getAllLangs);
//getAllLangs();