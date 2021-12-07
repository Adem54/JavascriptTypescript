let products=[
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"Hp Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Casper Laptop", unitPrice:17000},
]
//Burasi ornegin hepsiburada.com un ana sayfasi gibi dusunelim ordaki urunler
//React ve diger framework ler elimizde bulunan bir datayi ekrana basmak icin kullanilir
//Ve bunu da ul icinde li yi for ile donduruyorduk onceden ama simdi tabi map gibi methodlari kullanacagiz...
//products dizisnin icindeki her bir eleman html deki liste elemanidir unutmayalim...

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}`))
console.log("<ul>")
//map bizim icin array i donuyor, product takma ismini kullaniyor product her bir urunu temsil ediyor yani her bir obje yi temsil ediyor ve obje icinden de hangi properties nin degerini almak istersek onu alabiliriz...Burda da product.name degerlerini li ler icinde listeliyruz
//Bu tek satirlik islem idi, birden fazla satirlik islem de  yapabiliriz..O zaman da suslu parantez acariz...
console.log("Birden fazla satirda islem yaparsak map ile")

console.log("<ul>")
    products.map(product=>{
    console.log(product);

    console.log(`<li>${product.name}`);
})
console.log("<ul>")
//React te map i cok fazla kullanacagiz....
//map ile biz bir dizi icindeki objelerin her bir elemanina mudahele edebiliyoruz ve listeyi degistirebiliyuoruz sonra degistirdigimiz listeyi return edip tekrar baska bir method la yeni bir filtreleme vs basska bir sey de yapabiliyoruz...

//Filtered Methodu
//Elimizdeki arrayi filtrelemeye yariyor ve donus olarak da yeni bir array olarak donuyor....Burasi onemli donus degeri de yine bir array...0 eleman bile olsa sonucu bizim icin bir arraydir....Bu sundan dolayi cok onemli cunku statemanangement denilen bir olay var, bir data degistiginde ekran yeniden sekilleniyor ekran yeniden rander ediliyor(tum parcalar tekrar dan birlesip guncelleniyor).Render edilmesi icin eger referans tipse referansin degismesi gerekiyor..burasi cok kritik burayi analamk gererkiyor, filter yeni bir array olusturuyor dolayisi ile yeni bir referans olusuyor, referanasi degistirdigimiz anda ekran yeniden render ediliyor o yuzden slice veya splice degilde filtered i kullaniyoruz, onlar referansi degistirmiyor, degistirmesi icin ugrasmamiz gerekiyor
console.log("Filtered methodu");//C# daki where methduna benziyor
let filteredProducts=products.filter(product=>product.unitPrice>15000);
console.log(filteredProducts);
//Yeni bir array olusturuyor ve her bir elemani suzdugunde, filtreledigi elemani icerisine atiyor.Yeni bir array olusturuyor bir new leme yapiyor ve ekran render ediliyor..

//Reduce Methodu
//Reduce methodu nispeten daha az kullaniliyor
//Akumulator gorevi goruyor-C# daki aggregate gibi calisir...
//Ornegin hepsiburada.com dasiniz ve sepetin totalini gostermek istiyorsunuz, her bir urun icin
//toplami hesaplayacagim icin ona acc(accumulator) diyoruz, ve accumulatorun bir baslangic degeri var o reduce parantezi icindeki en sagdaki 0 dir ve biz total fiyati hesaplayacagiz diyelim ki sepette alinan urunleri totaldeki fiyatini hesaplarken bunu kullanabiliriz
console.log("Reduce methodu")
let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)
//Reduce methodu dogrudan en son toplami  donecektir

//map i yeni objeler uretmek icinde kullanabiliyoruz....bir map yapip onu return etmisiz burda yan yeni bir obje
let cartTotal2=products.filter(p=>p.unitPrice>10000)
.map(p=>{
    p.unitPrice=p.unitPrice*1.8
    return p//p yi getirmesi gerekiyor ki islem yapmaya devam edecek, reduce uygulayacak
})
.reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)

//Yukarda yapilan map islemi ile map orijinal liste olan products listesinin icindeki fiyatlari 
//degistiriyor tek tek ve fiyatlari 1.8 ile carparak her bir urun icin KDV hesapliyor ve artik fiyatlar 1.8 ile carpilmis KDV hesaplanmis olarak karsimiza gelir...
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element)
    
}

//Burda da map ile biz bir liste icindeki objelerin ayri ayri properties lerine mudaha edebiliyoruz ve listeyi degistirebiliyoruz....burasi cok onemli....
//filter ana array olan products a dokunmaz kendisi yeni bir array olusturur

let cartTotal3=products.filter(p=>p.unitPrice>10000)
.map(p=>{
    p.unitPrice=p.unitPrice*0.5
    return p
})

console.log(cartTotal3)