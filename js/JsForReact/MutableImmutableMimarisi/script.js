//Rest-Spread Operators(Toparlama-Yayma Operatoru)
//Spread operatoru bir dizi veya bir objeyi alir ve icindeki elemanlari tek tek dondurur
//React icerinde en onemli kullanim yerlerinden veya amaclarindan bir tanesi de immutibility yani degismezlik kuralina riayet edebilmek icindir.En basit sekilde bir obje veya dizinin icindeki degerlerin tek tek degistirilmesi, bunu yaptigimizda biz objeyi veya diziyi mutate etmis oluyoruz...yani
//Biz bir objenin bir property sinin kullanici.name="Kemal" yaptigimizda o objeyi mutate etmis oluyoruz biz react lifecycle da degisiklik yaparken mutate etmeden degisiklik ypaiyoruz yani bir objeyi degistireceksek yapilan degisiklikleri iceren yeni bir obje olustuturyoruz ve bunu onceki obje ile yer degistiriyoruz


//Immutable ve Mutable nedir?
//immutable: Değer oluşturulduğunda, değiştirilemez.
//mutable: Değer oluşturulduğunda, değiştirilebilir.
//Bu konudan önce Javascript’de veri tiplerini kavramalısınız. Bunları kısaca hatırlatacak olursak aşağıdaki gibidir.
//Primitive (İlkel Tipler): string, number, null, undefined, boolean
//Objects (Nesneler): Array, Function, Object Literal, String, Number, Boolean
//Primitive tipler immutable olmasına karşın, Objeler mutable olarak çalışırlar.

//Immutable (Değişmez)
//Bir veri oluşturulduğunda, bu veri bir daha değiştirilemez demektir. Yani değişkene bir değer atadığınızda veri ram’de oluşturulur ve her yeni atamada ramde yeni bir alana yazar veriyi.

var a = 1 // Primitive bir Number ataması yapıldı
var b = a // Primitive bir Number değişken değeri ataması yapıldı
a = 3 // Primitive bir Number ataması yapıldı
console.log(a) // Çıktı: 3
console.log(b) // Çıktı: 1

//Yukarıdaki resimde a değişkenine 1 (var a = 1) atadık. Sonrasında a değişkeninini b değişkenine (var b = a) atadık. Normalde b değişkeni, a değişkenine referans (aynı adresi gösterme) olmalıydı ama burada öyle davranmayıp, hafızada b için yeni bir yer açtı. En sonunda a değişkenine 3 rakamını (a = 3) atadık. Burada da dikkat ederseniz hafızada yeni bir alan oluşturuldu. Çünkü primitive tipler her zaman için böyle davranmaktadır. Bu yapı tam olarak immutable mimarisini anlatmaktadır. Buna aşağıdaki kodlar üzerinden örnek verelim.

//İstisnalar:
//Primitive tiplerin Wrapper (kapsayıcı) türleri (String, Number, Boolean) obje olmalarına karşın immutable davranırlar. Obje üzerindeki mevcut veri değiştirilemez ancak yeni metod veya değişken atanabilmektedir. Kendiniz deneyerek mantığı görebilirsiniz. Kafa karıştırmamak için bu konuya değinmeyeceğim.

//Mutable (Değişir)
//Bunlar referans bazlı çalışan veri tipleridir. Yani değişkene bir değer atadığınızda ramde oluşturulan veri, ilgili değişkene bağlanır. Değişkenle ilgili her yeni işlem yapıldığında, ram’de varolan verinin üzerine yazılır. Object türündeki bir değişkeni, başka bir değişkene atadığınızda, ilgili değişkenin adresine referans (ilgili adrese bağlı) olacaktır. İlk değişken içeriği değiştinde, ikinci atanan değişken içeriği de değişecektir.

var a = {x:1} // Obje türünde bir atama
var b = a // Obje olduğu için referans türlü bir atama
console.log(a.x) // Çıktı:1
a.x = 2 // İçerik değişte, b değişkeni içeriği de değişti
console.log(b.x) // Çıktı: 2


//grafikte a obje türünde bir değişkendir. b değişkenine a atanarak, b de objetüründe bir değişken olmuştur. Bu atama referans şeklindedir. Çünkü a nesne (object literal) bir yapıdadır. a değişkeni içeriği değiştiğinde, b içeriği de değişecektir.

//İstisnalar:
//a = {y:3} şeklinde atama yapsaydınız, bu yeni bir atama olacaktır ve a değişkeninin bağı {x:1} değeri ile kopacaktır ve artık a üzerinde yapılan değişiklikler b değişkenini etkilemeyecektir. Eşitlik ( = ) atamaları sadece obje türündeki bir değişkenin, başka bir değişkene atamasında referans olmaktadır. Yeni bir value olduğunda her zaman için hafızada yeni bir alan açarlar.

//Immutable tipler, mutable tiplerden daha performanslıdır. Yani daha hızlı çalışırlar. Çünkü önceki değer ile ilgili bir kontrol yapmaz ve veriyi direk ram’de bulduğu boş alana yazar. Performans kaygınız olduğunda bu tür durumları dikkate alarak uygulamanızda iyileştirmeler yapabilirsiniz.


//Immutability(değişmezlik) nedir?
//Değişmezlik, program akışı boyunca oluşturulan bir verinin asla değişmemesine dayanan bir konsepttir. Veri üzerinde bir değişiklik yapmak istediğinizde orijinal verinin korunduğundan ve herhangi bir değişikliğe uğramadığından, yani tamamen kalıcı olduğundan emin olabilirsiniz. Değişiklikler orijinal verinin bir kopyası oluşturularak yapılır ve eski veri ve ona yapılan referanslar korunur.
//İşte bu nedenle değişmez veri yapıları ile uygulama geliştirirken verilerin uygulama içerisinde nasıl ilerlediğine yönelik farklı bir bakış açısı ile düşünmeye başlarız ve bu bize verilerin akışını izleme kolaylığı ya da büyük nesneleri hızlıca kıyaslamak gibi bir takım olanaklar sağlar.
//const != immutable
//ES6 ile birlikte gelen const tanımı bazı insanların const ile tanımlanan verilerin tamamen değiştirilemez olduğunu düşünmelerine sebep olabiliyor. const sadece tanımlayıcı ile değer arasında değişmezliği sağlıyor yani tanımlanan değişkene tekrar atama yapılamaz.
//const name="Jon"; name="Arya"; burda hata aliriz..
//const x={name:"Jon"} x.name="Arya" burda hata almayiz...

//Değer bazlı tipte tanımlanan değişkenler adından da anlaşılacağı gibi değerleri tutarlar. Referans bazlı tiplerde ise değeri değil, onun referansını ya da adresini tutarlar.

//Konuyu referans bazlı tipler ve pointer üzerinden detaylandırmak gerekirse, pointerlar bellek adresi tutan değişkenlerdir diyebiliriz. Bir fonksiyon çağırıldığında o fonksiyon kendi scope(kapsam) değerleri ile (parametre, argüman, referans) ‘call stack’e girer ve burada kendine ait pointer saklama işlemini gerçekleştirir.
//Pointerlar değerin bulunduğu bellek hücresinin adresini tutukları için dolaylı olarak değere erişebilirler.

//Bir değişkenin değeri ile ilgili konuşurken değişkenin aslında verinin bellek adresini ifade ederiz. Pointerlar da bu bellek adreslerinin tutulduğu, yani veriye işaret eden değişkenlerdir.
//Dolayısıyla referanslar mevcut değişkene dolaylı yoldan erişmeyi sağlarlar ve yorumlayıcı tarafında garbage collectionı daha yönetilebilir hale getirirler. Değere ulaşmak istendiğinde değişkenin adı ile erişilebilir.

var a=5;
var b=a;
a=15;
console.log(a)//15
console.log(b)//5
//Buradaki farkı a’nın değerini değiştirmek istediğimizde anlıyoruz.
//b = a eşitliğinde a’nın değeri değiştiğinde b’nin değerinin de değişmesini umuyoruz ancak durum burada biraz farklılaşıyor.
//Bu tür tanımlamalarda değişkenlerin bellekte tutulan referansları eşitlenmez, a değişkeninin bellek üzerinde yeni bir kopyası oluşturulur ve bu kopya artık b değişkeni olarak ifade edilir. Dolayısı ile a’nın değeri değiştiğinde b’nin bu durumdan haberi olmaz.

//Non-Primitive(Referans Bazlı) Tipler:
//object(array, date, regex), function
//Referans bazlı tipler genelde değiştirilebilir tiplerdir. Yani ilkel tiplerin tam tersine, değişkenlerin bellek üzerinde referans edildikleri adreslerine doğrudan eşitlenirler.

var a={name:"Arya"}
let bb=a;
a.name="Jon"

console.log(a)//{name:Jon}
console.log(bb)//{name:Jon}

//a değişkenine eşitlenen nesnenin “name” özelliği değiştirildiğinde b’ye eşitlenen nesnenin “name” özelliğindeki değerinde değiştiğini görebiliyoruz. Yani eşitlik sağlanırken aynı adrese referans edilmiş diğer değişkenin değeri de değişmektedir.

//ISTE BURAYA DIKKAT!!!!!BEST PRACTISE
//Diyelim ki elimizde bir nesne var ve nesne üzerinde bir değişiklik yapmak istiyoruz. Aynı zamanda orijinal nesnenin korunmasını, herhangi bir değişikliğe uğramasını istemiyoruz. Peki bunu nasıl başarabiliriz? JavaScript’de değişmezliği nasıl sağlarız?

//Orijinal nesneyi değiştirmek yerine değişikliklerin uygulandığı yeni bir nesne döndürmek bu aşamada güzel bir çözümdür.
//JavaScript’de değişmezliği sağlamanın bir kaç yolu var. Bunlardan bir tanesi yeni gelen object spread operatörü.

const boy={
    eye:"green",
    length:178
}
const newBoy={
    ...boy,
    eye:"blue"//Bizim sonradan yazdigimiz eye:"blue" properti si rest ile alinan eye:"green" i eziyor...
}
console.log(boy)//{eye:green, length:178}
console.log(newBoy)//{eye:blue, length:178} 

//Ancak spread ile yaptığımız orijinal nesneyi koruma ve özelliklerini kopyalayarak yeni bir nesne yaratma işlemi performans açısından pahalı bir işlem, hele ki doğrudan orijinal nesne üzerinde değişiklik yapmaya kıyasla daha pahalıdır.

//Benzer şekilde Object.assign() kullandığımızda da yukarıdaki gibi sığ/yüzeysel kopyalama(shallow copy) yapılmaktadır. Bu sayede orijinal nesneyi koruyarak değişiklikleri yeni nesneye uygulayabiliyoruz. Ancak daha önce belirttiğim gibi performans açısından iyi bir pratik değil.


//IMMUTABLE
//Immutable.js çok daha düşük maliyetlerle daha hızlı işlem yapmayı sağlıyor. Temel mantalitesi orijinal veri üzerinde işlem yapmadan değişikliklerin uygulandığı yeni bir veri seti döndürmek üzerinedir. Yani verinin hem değişmez(immutable) hem de kalıcı(persistent) olmasını sağlamaktadır.