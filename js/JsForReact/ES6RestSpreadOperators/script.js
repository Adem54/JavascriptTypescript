//Rest-Spread-Toplama-Ayirma

//ISTE BURAYA DIKKAT!!!!!BEST PRACTISE
//Diyelim ki elimizde bir nesne var ve nesne üzerinde bir değişiklik yapmak istiyoruz. Aynı zamanda orijinal nesnenin korunmasını, herhangi bir değişikliğe uğramasını istemiyoruz. Peki bunu nasıl başarabiliriz? JavaScript’de değişmezliği nasıl sağlarız?

//Orijinal nesneyi değiştirmek yerine değişikliklerin uygulandığı yeni bir nesne döndürmek bu aşamada güzel bir çözümdür.
//JavaScript’de değişmezliği sağlamanın bir kaç yolu var. Bunlardan bir tanesi yeni gelen object spread operatörü.

const boy = {
    eye: "green",
    length: 178
}
const newBoy = {
    ...boy,
    eye: "blue" //Bizim sonradan yazdigimiz eye:"blue" properti si rest ile alinan eye:"green" i eziyor...
}
console.log(boy) //{eye:green, length:178}
console.log(newBoy) //{eye:blue, length:178} 

//React projelerinde en onemli kullanim amaclarindan bir tanesi de immitubility degismezlik kuralina riayet edebilmektir.Immutibility en basit tabiri ile bir objenin veya diziinin icindeki degerlerin tek tek degistirilmesi bunu yaparsak biz obje veya diziyi mutate etmes oluruz.Biz react yasam dongusunde degisiklik yaparken mutate etmeden degisiklikleri yapiyoruz.Bir obje icinde degisiklik yapacaksak , degisiklikleri iceren yeni bir obje olusturuyoruz ve bunu onceki obje ile yer degistiriyoruz

let user = {
    name: "Adem",
    age: 33,
    city: "Skien"
}

//REACT UZERINDE BOYLE BIR DEGISIKLIGI BIZ ASLA YAPMIYORUZ...ORJINAL OBJEMIZI VEYA DIZIMIZI MUHAFAZA EDIYORUZ VE DEGISIKLIGI DE ATAYACAGIMIZ YENI BIR DIZI OLUSTURUYORUZ...VE O DIZI UZERINDE DEGISIKLIKLERIMIZI YAPIYORUZ...
user.city = "Stavenger"

//PEKI USER OBJESINI GUNCELLEMEMIZ GEREKIRSE NASIL YAPIYORUZ...
//  bu hatali kkullanim cunku 
let newUser = {
    name: "Zehra",
    ...user
}

console.log(newUser) //{name:"Adem", age:33,city:"Skien"} Degisiklik gerceklesmez cunku biz yapacsgiimiz degisiklige ait propertyyi ilk sirada yaziyoruz ama ayni proeprty nin user icindeki degeri en son yazilinca bizim degisikligimiz i ezip hicbir degisiklik olmamasini sagliyor ondan dolayi bizrest i biz ilk siraya yapacagimz degisikkllikleri son siraya yazmaliyiz......ONCE ANA OBJEMIZ GELIR SONRA YAPILACAK DEGISIKLIK PROPERTYILERININ YENI DEGERLERINI ATARIZ CUNKU EN SON YAZILAN DEGERI GORURUZ HER ZAMAN....


//BEST PRACTISE DOGRU KULLANIM..REST ILK SIRAYA YAZILIR...
let newUser1 = {
    ...user,
    name: "Zehra"
}

console.log(newUser1)
//{name:"Zehra", age:33,city:"Skien"}

let initialState = {
    loading: false,
    errorMessage = "",
    cars: ["Mercedes", "BMW", "Audi"]
}

//dipatch({type:"Araba_ekle",payload:"Tofas"})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "araba ekle":
            return {
                ...state, cars: [...state.cars, "Tofas"]
            }
            default:
                return state;
    }
}
//Dikkat edelim bizim yeni dizimiz icinde, arabalar dizimiz icinde hicbirseyi kaybetmiyoru
//state.cars=["Mercedes", "BMW","Audi","Tofas"] seklinde almis olacagiz
//state in icindeki cars dizisini mutate etmeden elemanlarini yeni bir diziye kopyalayarak uzerine de yeni bir eleman ekleyerek guncellemis oluyoruz...
//Burda olan  sey sudur aslinda cars i biz guncelledigimizde yeni bir dizi yeni bir obje olusturuyoruz bunu olusturdugumuzda hafiza da biz eski obje ve yeni dizinin yerini degistiriyoruz adresini degistiriyoruz, referansini degistiriyoruz
//Biz eger state.cars.push("Tofas") islemini yapsa idik biz yine state  icindeki cars icine bir eleman eklemis olacaktik ancak bunu yaptigimizda Ram da hafizamizda state mesela 001 lokkasyonda degeri tutuyor obje adresinin yeri biz push ile yapinca hafizadakki adresi referansi degistirmis olmuyoruz, ve bunu bilgisayar , react anlamiyor ve islem yapmiyor render etmiyor iste bundan dolayi bizde 
//yeni bir obje olusturrarak bu islemi yapinca o zaman react anliyor ve biz de diyoruz artik senin state in bu obje degil guncel olan objedir diyoruz ve state in oldugu yere bakiyor ki React state in yen i adresi var o zaman state degismis diyor ve ancak bu sayede react ecosisteminde degisiklikler algilaniyor ve algilanan degisiklikler kullanicinin tarayicisina  yansiyor



//SPREAD OPERATORU ILE FONKSIYON PARAMETRELERINE DIZI VE, OBJE KULLANIMI

function topla(sayi1, sayi2, sayi3) {
    return sayi1 + sayi2 + sayi3
}

const sayilar = [2, 4, 5]
//Bu sayilar dizisini direk topla fonksiyonunun parametresine giremeyiz boyle birsey yok...
//Ama spread operatoru ile dizi icindeki elemenlari ayirarak girebiliriz...
console.log(topla(...sayilar))


//SURDURULEBILIR BIR FONKS OLUSTUR VE SUREKLI DEGISKEN OLARAK GELEN PARAMETRE DEGERLERINI KARSILAYABILMEK ICIN...
//Ya da isteidigmz kadar sayi girilmesini istersek eger yani bir fonks olusturuyoruz ve kac tane parametre gelirse gelsin hepsinin de karsilamasini istersek bizim parametremiziin o zaman da yine rest operatorunden faydalaniriz gelen hepsiini topla diye

function topla2(...sayilar) {
    let topla = 0;
    for (let i = 0; i < sayilar.length; i++) {
        const element = sayilar[i];
        topla += element;


    }
    console.log(topla)
}

topla2(12, 5, 8, 21, 3)

//IKI DIZIYI BIRLESTIRMEK ICIN KULLANIRIIZ....
const sayilar1 = [1, 2, 3];
const sayilar2 = [4, 5, 6];

//Iki diziyi bu sekilde birlestirebiliriz...
const birlesmisDizi = sayilar1.concat(sayilar2)
console.log(birlesmisDizi)
//Ama buna hic gerek yok...
const birlesmisDizi2 = [...sayilar1, ...sayilar2]
console.log(birlesmisDizi2)
//Bu sekildde spread operatoru ile yaparsak hem immutable yani degismezlik kuralin riayet etmis oluyoruz hemde kolay bir sekilde amaci gerceklestiriyoruz

//IKI OBJEYI BIRLESTIRMEK ISTEDGIMIZ ZAMAN...
const user = {name:"Adem", age:"33"}
const adress={city:"Skien",country:"Norway"}

const birlesmisObje={...user,...adress}
console.log(birlesmisObje)