console.log("Promise")

//Callbackler eger sayilari artarsa o zaman iyice karisik hale gelebiliyor ve hata yonetimi ve kontrolu iyice zorlasiyor....

//Promise
//Biz bir istek gondeririz ve cevabimizin gelmesini beklemeye durururz bu duruma pending durumu denir.Cevap alana kadar bekleme durumudur
//Response1-Data dondurur
//Response2-Olumsuz durum, yani data yi alamiyordur olumsuz doner...
//Biz bir rest-api ye bir fonksiyon ile istek gonderince status pending oluyor ve fonksiyon kendi icinde bir tane promise olusturuyor, promise dedigimiz bir objedir.Promise icinde iki deger cok onemli, biz beklerken pending durumunda olan state durumu ve value ozelligi
//PROMISE DE 3 FARKLI DURUM VARDIR!
//Durum1-Bekleme durumu-Beklerken status pending, value-undefined
//Durum2-Veriyi aldi fonks ve bize promise vasitasi ile veriyi doner.Bu fonksiyon promise icinde resolve adinda javascript icinden gelen veriyi resolve ile datayi doner ve state:fulfilled yani resolve olur, value de resolve icinde gonderilen data mizdir
//Durum3-Veriyi almakta herhangi problemn yaasarsak da bize olumsuz sonucu haber verecek onu  yine promise icinde reject olarak donecek ve state:rejected, value:rejectin icinde gonderilen error olacaktir...
//Eger islmeimiz basarili birsekilde gerceklesmisse then ile aliriz yok ama sonuc olumsuz olursa catch ile alacaiz, pending durumunda ise zaten biz bekleyeceiz ama hemen deger dondugunde then ve catch ile veriyi aliriz..

function getData(data) {//Promise objesi donduren fonksiyonumuz
return new Promise(function(resolve,reject){
    setTimeout(function(){
        if(typeof data === "string"){
            resolve("Olumlu sonuc!");
        }
      //Reject icinde hazir Error objemiz icerisine kendi mesaimiz yazdirabiliyoruz
        reject(new Error("Lutfen string bir deger girin!!"));
    },3000)
})
} 
getData("Merhaba")
.then(response=>console.log(response))
.catch(error=>console.log(error));
//Bu sekilde yalniz da kullanabiliriz...
getData("Hallo").catch(error=>console.error(error));
//error.console ile hata mesajini yazdirirsak kirmizi renkli bir sekilde hata mesaji verecek


function addTwo(number){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }else {
                reject(new Error("Lutfen bir sayi girin!"))
            }
        },3000)
    })
}

const response=addTwo(10)
.then(response=>{
   
    response*2})
.then(res=>res*10)
.catch(error=>console.error(error));
response.then(res=>console.log(res));
//Promislerde bir den fazla then kullanabiliriz ama bir defa catch kullanabiliriz....Uygulamamizin herhangi biryerinde hata oludgu anda bu reject  ile geri doner, reject ile ger donen yapiyi da biz catch ile aliriz..