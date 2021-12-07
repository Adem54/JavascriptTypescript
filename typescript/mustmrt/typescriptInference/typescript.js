{
    //Infurance 
    var kanal = {
        name: "React Dersleri",
        follower: 1345
    };
    //Biz typescriptte tip belirtmeden dogrudasn bir deger atamasi yaparsak, o zaman typescript biz hangi degeri atarsak o degiskenin tipini artik bizim atadigimiz deger cikarimi yaparak tipini belirliyor
    var number1 = 24;
    //number1="Adem"; number1 e ben once sayi yani number turunde bir deger girip sonra gelip ona eger string girmeye calisirsam typescript hata verecektir cunku ona ilk atama yaparken sayi atadigimiz icin artik onun tipi number oldu ve biz ona string deger atayamayiz...
    var kanal2 = {
        isim: "React D",
        takipci: 2323
    };
    ;
    var kanal3 = {
        isim: "React Ders",
        takipci: 2376
    };
    var kanal4 = {
        isim: "React Dersler"
    };
    //Bir objeye degerleri girerken direk deger ismini girersek bu deger burda zorunlu demektir..
    //Yani biz eger bir obje icindeki propertieslerin tipini belirlerken yazdgimiz propertiesleri biz obje nin propertieslerinin atamasini yaparken girmek zorundayz yoksa hata aliriz
    //Peki biz burda bir obje olustururken once tipini yazarken tipini yazdgiimiz degiskenlerden opsiyonel yapmak istedigimiz olursa ne yapariz, opsiyonel dusunudugumz veri tipinin yanina sorun isareti koyariz...
    //Bu sekilde donecegi deger tipini de gosterebiliriz istersek
    var topla = function (sayi1, sayi2) { return sayi1 + sayi2; };
    console.log(topla(4, 6));
    var topla2 = function (number1, number2) { return number1 + number2; };
    //topla2 fonksiyonunun type i Topla2 dir
    var sonuc = String(topla2(12, 3)); //sonuc da number olarak gozukuyor ustune gelince ama onu da stringe cevirebiliriz
    var sonuc2 = topla2(7, 8);
    var kanal7 = {
        isim: "Diger",
        takipci: 2323
    };
    //Diziler
    //Bu sekilde dogrudan verileri girerek dizi ve obje olusturursak typescript girilen degerden cikarim yaparak yani inference yaparak girilen deger tiplerini o degiskenin tippi olara atamis oluyor...
    //interface Kanal3 {isim:string,takipci:number};
    //Daha once olstrdugumuz bir tip olan Kanal3 tipinin bir dizi type olabilmesi icin asagidaki gibi kullaniriz..
    var kanallar = [
        {
            isim: "React Dersleri",
            takipci: 1580
        }, {
            isim: "Vue.js Dersleri",
            takipci: 1510
        }
    ];
    //Dizi olustururken Array<Kanal3> sekilde de olusturabiliriz
    var kanallar2 = [
        {
            isim: "React Dersleri",
            takipci: 1580
        }, {
            isim: "Vue.js Dersleri",
            takipci: 1510
        }
    ];
    var kanal8 = [
        {
            isim: "Youtube Kanali",
            takipci: 2323 //Burasi da sadece number tipinde olabilir..
        },
        {
            isim: "React Dersleri",
            takipci: 2323 //Burasi da sadece number tipinde olabilir..
        }
    ];
}
//Kisacasi biz typescript ile C# mantigindaki gibi guvenli tip dili gibi calismamizi sagliyor ve bu sayede biz uygulamalairmizi daha global, daha surdurulebilir ve daha kontrol altina alinabilir, daha SOLID e uygun yazabiliriz...Tum tipleri kontrol altina alabiliyoruz....
