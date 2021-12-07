var huawei = {
    marka: "Huawei",
    model: "P30",
    deger: 600,     // Dolar 
    onKamera: 8,
    arkaKamera: 48 
};

var samsung = {
    marka: "Samsung",
    model: "Galaxy A70",
    deger: 700,     // Dolar
    onKamera: 5,
    arkaKamera: 32
}

//Bu şekilde istediğiniz kadar obje oluşturabilirsiniz. Şimdi telefon adında bir obje oluşturuyorum ve içerisine dört adet metot/fonksiyon ekliyorum. Bu metotlardan telefonAdi metodu, marka ve model birlikte olmak üzere telefonun tam adını döndürecek. Diğer metot olan tlFiyat metodu ise dolar olarak telefon değerini TL'ye çevirip döndürecek. Üçüncü metot olan kameraBilgileri metodu telefona ait kamera bilgilerini toplu halde döndürecek. Son olarak ise hafizaBilgileri metodu ise telefona ait geçerli hafızayı ve arttırılabilir maksimum hafızayı GB cinsinden döndürecek.

var telefon = {
    telefonAdi : function(){
        return this.marka + " " + this.model;
    },
    tlFiyat : function(){
        var dolarKuru = 5.70;
        return dolarKuru * this.deger + " TL";
    },
    kameraBilgileri : function(){
        return "Ön kamera : " + this.onKamera + " Arka Kamera : " + this.arkaKamera;
    },
    hafizaBilgileri : function(hafiza,maxHafiza){
        return "Telefon Hafızası :" + hafiza + " GB, Arttırılabilir Max Hafıza : " + maxHafiza + " GB";
    }
}


//BURASI COK ONEMLI...BURAYA DIKKAT
//Dikkat ettiyseniz yukarıda tanımladığım telefon objesinde bilgi içeren herhangi bir alan yok. Aklınıza şu soru gelebilir; telefon nesnesi içinde bilgi yoksa buradaki this ifadeleri ne oluyor? Öyle ya this ifadesi o nesne içindeki alanlara erişimi sağlıyordu. Burada bilgi yoksa this'ler ne işe yarıyor.İşte call ve apply tam olarak burada devreye giriyor zaten. Oluşturduğum samsung ve huawei nesnelerini, telefon adlı nesneye parametre olarak gönderip, telefon nesnesinde yer alan metotları, appyle ve call ile çalıştırmak mümkün. Yani telefon nesnesi, kendisine gelen samsung ve huawei parametrelerini miras alıp, sanki kendisi bu nesneymiş gibi davranıyor. İlgin değil mi?Peki nasıl oluyor buna bir göz atalım.

console.log(telefon.telefonAdi.call(samsung))

telefon.telefonAdi.apply(samsung)

//Bu ifadeler aslında şu anlama geliyor; telefon nesnesi içinde yer alan telefonAdi metodunu bul ve samsung nesnesini paramtre olarak çağır. Yukarıdaki iki ifade de bize "Samsung Galaxy A70" bilgisini verecektir.

//Başka bir metodu çağıralım. Örneğin, tlFiyat metodunu çağırmak istersek;

console.log( telefon.tlFiyat.call(huawei) );
console.log( telefon.tlFiyat.call(samsung) );