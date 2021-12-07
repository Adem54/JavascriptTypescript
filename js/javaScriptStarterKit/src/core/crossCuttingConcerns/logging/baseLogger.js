
//Birden fazla class yazacagimiz icin default u kaldiralim...
export class BaseLogger {//Base isminin yaninda defaultLogger olarak da ismini cok ca goruruz
  
        log(data){//Bu bizim icin bir sablondur
            console.log("Default logger: "+ data)
        }

    
    }
//Logger class inin log fonksiyonu
//Loglama islemini google in filebase ine yazabilirsiniz, veya elastic search e yazabilirsiniz hizli sorgulamalar icin, veya mongo db ye ya da bir alt yapimiz olsun isteyen istedigi yere yazsin dememiz gerekiyor...





//BaseLogger in icindeki tum operasyonlari onu inherit eden class larda da kullanabiliriz...Base a ait olan operasyon veya degerleri kullanabilmek icin super keywordunu class icinde kullanmayiz ama biz eger direk BaseLogger icinde olan bir operasyon u mesela log gibi direk BaseLogger i inherit eden bir class icinde kullanirsak o zaman BaseLogger dan oraya gelecek olan log operasyonunu ezmis oluyorum....

//Simdi biz log islemini nerde yapiyorduk userService imiz icinde ki operasyonlarda...Orda kullanmayi deneeyelim...