
//Javascript

//map,filter ve reduce methodlari bizim iterate edilebilen yapilara uyguladimgiz fonksiyonlardir, yani dizilerimize uyguladigimiz fonksiyonlardir
//Bu fonksiyonlar bizim icin cok hayati oneme sahiptir bunlari cok iyi ogrenmeliyiz...

let cart=[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Kalem", quantity:5, unitPrice:1000},
    {id:3, productName:"Sarz aleti", quantity:7, unitPrice:1200},
    {id:4, productName:"Masa", quantity:8, unitPrice:2000},
    {id:5, productName:"Bardak", quantity:12, unitPrice:800},
    {id:6, productName:"Klavye", quantity:14, unitPrice:300},

]
//Bu veriler genellikle alisveris sepetinden gelen verilerdir, ve bu veri bize baska bir sistemden data olarak gelecektir..
//Bizim back-end den gelen bu datayi bir button araciligi ile ekrana basmamiz gerekecek gecek hayatta

//COOK ONEMLI..ASAGIDAKI KISIM COK IYI ANLASILMALI....REACT IN TAM ANLASILABILEMSI ICIN
//Front-end de datalar yonetilirken bizim cok dikkat etmemiz gereken bir mesele var o da durum yonetimidir. Durum denilince state manangement elimizde bir data var, bunlar single-page-applicationdir-SPA dir. Dolayisi ile biz bir datayi degistirdigijmiz zaman bunu haberdar etmemiz gerekiyor bizim datamizin degistigi haberini vermemiz gerekiyor 

//Ornegin biz sepete yeni bir urun ekliyoruz,push ekleme isini yapar...
cart.push({id:7, productName:"Laptop", quantity:20, unitPrice:5000})

//Biz bu hareketi yaptigimizda cart in bellekteki yerini degistirmiyoruz yani referans degismiyor,React,Angular,Vue.js degisimi referansin degismesi ile ele alirlar.Dolayisi ile bu uygulamalarda data nin degistigini bildirmemiz gerekiyor cunku React datanin degistginini cart dizisinin icindeki eleman sayisinin degismesinden anlayamiyor..sistemi oyle old icin..Bizim ne yapmamiz gerekiyor bizim referansi da degisitiriyor olmamiz gerekiyor
//Hemen bir ornek yapalim...REFERANS TIPLERE HARIKA ORNEK!!!!
//Dizi bir referans tip oldugu icin bizim dizimiz bir fonksiyona parametre olarak verilip fonksiyon icinde bir degisiklige ugradigi zaman disardaki dizinin son hali de degisecektir neden cunku biz parametreye dizinin degerini degil refernasini yani adresini gonderiyourz ve de o dizinin esit olduug degisken de dolayisi ile degisiklige ugruyor....
function addToCart(sepet){//sepeti veriyoruz ve 1 urun ekliyoruz...
    sepet.push({id:8, productName:"Mause", quantity:23, unitPrice:2300})
}

addToCart(cart)

console.log(cart)

let sayi=10;
function sayiTopla(number){
    number+=1;
}
//Ama burda sayi:!0 dedigimiz zaman sayi degerini aktarip gecer gider gerisine karismaz onun icin bu ikisini karistirmayalimm...Deger tiplerde deger atanir ve isi biter sayi degiskeni ile isi kalmaz.....gerisine karismaz....
 
sayiTopla(sayi)
console.log(sayi)

//Demekki front-end teknolojilerinde referansini degismesi cok onemlidir...Referansi degistirmek bize cok ciddi avantajlar saglayacak..Referansi degistirdigmiz zaman React in haberi oluyor...

//MAP.....MAP I COK KULLANACAGIZ COK IYI KAVRAMALIYIZ...
//Ekrana yazacagimiz kismi simule edelim..Ornegin Sepeti gormek istiyorusunuz o ekranda yapacagimiz genel calisma cart.map ile olmalidir.
//map iterasyon yapyor array imizi tek tek dolasiyor ve dolasirken de sunu yapiyor, map in en onemli olay sudur iterate ediyor yani tek tek geziyor ve her bir eleman uzerinde istedigi degisiklik ve calismamlari yapip uzerinde islem yapilmis olarak bu arrayi donuyor.Tek tek dolasirken her bir elemana takma isim veriyor ve o sira ile dizi elemanlari ni temsil ediyor, istersek de herhangi bir elemanin icindeki orn propertylerden birine birsey ekleme cikarma ve uzennde oynama yapma islemi  yapilabilir

cart.map(product=>console.log(product.productName))

//Yapacagimiz islemler birden fazla satir tutabilir

cart.map(product=>{
    console.log(product.productName+ ":  "  + product.unitPrice * product.quantity)
})

//Biz normalde Reactta ne yapiyoruz ul arasinda li ler icine her bir urunu geceriz...Buna alisalim onemli....

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+ product.productName+ ":  "  + product.unitPrice * product.quantity+ " </li>")
})
console.log("</ul>")

let array=cart.map(product=>{
 
    if(product.unitPrice>200){
        product.unitPrice=product.unitPrice+5000;
        return product;
    }else{
        return product;
    }
})
//Eger return edersek yeni bir dizi dondurecektir burasi cok kritik bilgidir..
console.log(array)
console.log(cart)

var sayilar = [1, 4, 5, 8, 10];

var yeniDizi = sayilar.map(function(deger){
    return deger * 5;
})

console.log(yeniDizi.toString());    // Çıktı : 5,20,25,40,50
//Yeri gelmişken hatırlatayım, toString fonksiyonu, dizi elemanlarını araya virgül koyarak döndürür. 

//React te map i cok fazla kullanacagiz....
//map ile biz bir dizi icindeki objelerin her bir elemanina mudahele edebiliyoruz ve listeyi degistirebiliyuoruz sonra degistirdigimiz listeyi return edip tekrar baska bir method la yeni bir filtreleme vs basska bir sey de yapabiliyoruz...

//Örnek 2: Elimizde, işçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 2500 TL'nin üzerinde olanlarınkine %5, altında olanlarınkine de %10 zam yapan bir array map oluşturalım.
var maaslar = [ 2750, 3250, 2400, 2200, 2600, 4000, 2100 ];

let yeniMaaslar=maaslar.map(value=>{
            if(value>2500){
               return  value=value+value*(5/100)
            }else {
               return value=value+value*(10/100)
            }
})

console.log(yeniMaaslar)
console.log(maaslar)


let musteriMaaslar=[
    {name:"Adem",salary:2750},
    {name:"Ahmet",salary:1750},
    {name:"Kemal",salary:2000},
    {name:"Necmi",salary:3750},
    {name:"Sercan",salary:3250}
]

var yeniMusteriMaaslari=musteriMaaslar.map((musteri)=>{
    if(musteri.salary>2000){
        musteri.salary=musteri.salary+musteri.salary*(5/100)
        return musteri;
    }else {
        musteri.salary=musteri.salary+musteri.salary*(10/100)
        return musteri;
    }
})


console.log(yeniMusteriMaaslari)
console.log(musteriMaaslar)


//Yukarda  yaptigimiz 2 tane farkli ornek te direk musteri maaslari dizi icerisine integer degisken olarak konulup sonra maas oranina gore zamlar yapildiktan sonra geri donunce return ile tabi ki orijinal dizi de herhangi biir maas degisikligi olmadi ama map ile islemden gecirdigimiz dizimizi atadigimiz yeniMaaslar isimli dizimize yeni degisiklikler gelmis oldu. Ancak biz maas miktarini musteri ismi ile beraber obje olarak dizi icerisine atarsak o zaman da return ile diziye dondugumuz de dizinin ilk hali olan musteriMaaslar isimli dizi nin icindeki objelerde de maas durumlarini verilen maasa gore degistgi goruluyor bunun sebebi iste REFERANS tip oldugu icindir....Ama biz tabi istersek de disardsa bos bir tane dizi olusturup onun icine atmak istegimiz elemani push ile de ekleyebiliriz...Ama return denildigi zaman donulen dizi farki bir dizidir y eni bir referans olusturularak, yeni bir adrees olustutularak karsimiza gelen bir dizidir, bunu da bilelim......


//AYNI MI DEGIL MI BAKALIM-BIZ MAP ISLEMINDEN GECIRDIGMIZ BIR DIZIYI HIC BIR ISLEM YAPMADAN DIREK RETURN ETTIGIMIZDE DE FARKLI BIR DIZI YANI FARKLI  BIR REFERNAS, FARKLI BIR ADRES OLUSUYOR..BUNU UNUTMAYALIMM...
console.log(cart)
let mynewCart=cart.map(product=> {
    return product})
    console.log(mynewCart)
    console.log(cart)

    if(mynewCart==cart){
        console.log("Esittir")
    }else {
        console.log("Esit degildir")
    }

//RETURN DEGERI ILE VERIYI DONDUREREK SONRASNDA DA BASKA METHODLARLA CALISMAYA DEVAM EDEBILIRIIZ....


//INDEKS DEGERI KULLANARAK MAP METHODUNU DA KULLANABILIRIZ
//Örnek 3: Şu ana kadar yaptığımız örneklerde parametrelerden sadece dizi değeri döndüreni kullandık. Bu örneğimizde index kullanımına da değinelim. Aşağıdaki örnekte, bazı sayıların karesi, bazılarının ise küpünün alınması istenmiştir.Karesi istenen sayıların indekslerine bir bakalım. Biliyorsunuz, dizilerin indeks numaraları 0'dan başları. Bu  yüzden karesi istenen sayıların indeksleri: 0, 2 ve 4'tür.Küpü istenen sayıların indeksleri ise 1,3 ve 5'tir. Aslında soru diyor ki; indeksi çift olan sayıların karesini, tek olan sayıların da küpünü al. Problemi tespit etmek çözmenin yarısıdır derler, gerçekten de öyle. O zaman çözüme geçelim.
var sayilar = [2, 4, 5, 7, 8, 9];
var yeni = sayilar.map(function(deger,indeks){
    if(indeks % 2 == 0)
        return Math.pow(deger,2);
    else
        return Math.pow(deger,3);
});

console.log(yeni.toString());

// Çıktısı : 4,64,25,343,64,729



//Filter Methodu
//Datamiz icinde arama yaparken filtrelme yapaken kullaniriz...
//Filtrelemek deki derdigimiz filtrelenmis veriyi yeni bir dizi olusturarak donmesidir yani yeni bir adres te donuyor yeni bir refernas da donuyyor....

//C# daki where gibi, link sorgusu gibi dusuneibliriz
let quantityOver2=cart.filter(product=>product.quantity>7)
//Tek tek dizi icini dolasir ve sarta uyanlari filter methodu ile olusan yepyeni bir diziye atar.

console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc+product.unitPrice,0)//0 akumulatorun ilk degeridir.. 
//Mesela sepette alinan urunlerin toplamfiyatini hesaplarken burasi kullanilabilir..cok kullanisli toplaya toplaya gidecek acc dedigimiz parametrede topalanacak unitPrice degeri
console.log(total)
//Biz burda da logic kurabiliiriz...eger product ismiz
let total2 = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log(total2)

//React ta bizim isimiz map,filter le dir en cok ama bazen reduce de kullaniriz....