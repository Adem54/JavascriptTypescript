//JAVASCRIPT OBJECT ORIENTED
//Biz class lari degiskenlerimizi tutarken ve de operasyonmlari yani fonksiyonlari tutarken kullaniriz
//Deger tutucu class lar ve operasyon tutucu class lar
//Bizim bir suru fonksiyonlarmiz var mesela ve biz fonksiyonlarmzi gruplandirmak isteyebiliriz ve bunlar i biz nesnelerin icinde tutup bunlara bagimliliklar eklersek o zaman cok faydalidir
//Biz bunlara servisler diyoruz cunku uygulamalarda sepete urun eklyoruz urun cikariyoruz, sepeti guncelliyoruz yani sepet ile ilgili  yaptigimiz islemleri mesela bir class icine yerlestirebiliriz ornegin...
//Fonksiyonmlarimiz gruplamak amacli class larin icine ekliyoruz

//export disardan import edilebilir demektir
//default ise ben user servici import ettigimde default olarak bunu import et demektir...
export default class UserService{
    
    add(){
        console.log("kullanici eklendi")
    }

    list(){
        console.log("Kullanici listelendi")
    }

    getById(id){
        console.log("kullanici detayi listelendi.")
    }

}

//Biz bunu ekranlarimizda kullanacagiz