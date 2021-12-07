//Dom Manipulasyonu
console.log("Adem");

//Document Object Model-
//Html etiketlerimiz in her birisi objedir ve aralarinda bir hiyerarsi vardir parent-cocuk

//Biz dom uzerinde neredeyse herseyi yapabiliriz...
//Herhangi bir elmenti secip onun uzerinden babasina, kardeslerine vs heryere erisebilriz
//Attribute ekleyebiliriz, attribute silebiliriz
//Css ile verecegimiz tum css ozellikleri ve best practisleri dom ile yapabiliriz
//Html elementi ekleyebbiliriz onu istedigimiz  yere yerlestirebiliriz.
//Ozel class lar olusturur tiklayinca o class diyelim su elmemente attribute olarak atansin deriz ve bir anda tikladiigimiz zaman bir elementin bircok css ozelligin degistirebiliriz...
//this ve dongu ile listelere 1 tane event click eventi yazariz ve elementlerin id lerine gore tiklama ile birlikte css ozelliikleri verebilirz ve hareketlendirebilriz...
//Iki ayri element arasinda baglanti kurup birine tiklayinca baska bir elementi kaybedebiliriiz veya getirebilriz
//Tiklamalarimizi css efektleri ile zenginlestirip goze hitap eden cok hareketli uygulamalar yapabiliriz...
//Tikladigimiz zaman silinsin, tikladigimz zamaan yeni bir element olussun bunlari yapabiliriz...
//Tikladigimiz zaman web-sitesinin A versiyonu bir kez daha tiklayinca B versiyonu calissin diyebiliriz...
//Yani yapmak istedigimiz seye gore neredeyse herseyi yapabiliriz....

console.log(window.document);
console.log(this.document);
//Window icindeki tum elemntlerimize veya objelerimiz dogrudan global de kullanabiliyoruz..
console.log(document);

//head etiketi, form etiketi, link etkiketi bunlar html elemntlerimizin icindeki objelerdir
//location icerisinden href, port bilgilerini alabiliriz
//nextSibling

let value;
value=document.all;
console.log(value);//Bize dizi donuyor
value=document.all.length;//uzunlugu
value=document.all[6];//document objelerinin 6.elementi
value=document.all[document.all.length-1];//Documentin Son elementi

const elements=document.all;
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    console.log(element);
}


console.log(elements);

//Element uzerinde foreach i kullanmamiza izin vermiyor cunku bu tam olarak dizi degtiil bir collection dir...Arraye cevirmek icin array.from ozelligini kullanrizi..
let collections=Array.from(document.all);
console.log(typeof collections);

//collections.foreach(element=>console.log(element))

//ARRAY.FROM
//Icinde gezinilebilir ama tam olarak dizi olmayan elementleri diziye cevirmek icin array.from kullanilir
//Array.from() metodu bir dizi-benzeri veya gezinilebilir bir nesneden yeni bir Dizi örneği oluşturur.

console.log(Array.from("Ahmet"));

//Output
//["A", "h", "m", "e", "t"]

//1)Bir diziyi kopyala
let myArray=[1,2,3];
let newArray=Array.from(myArray);
newArray.push(7)
console.log(newArray);
console.log(myArray);
//2-Bir string i veya icinde gezinileilir ama dizi olmayan bir listeyi diziye cevirir
//console.log(Array.from("Ahmet"));
//3-Bir dizi tam sayıdan bir dizi oluşturmanız gerekiyorsa, bunu başarmanın pek çok yolu vardır. Array.from () kullanarak bunu yapmanın bir yolu:
let x=Array.from(Array(10).keys())
console.log(x);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//4-Bununla birlikte, bunun sınırlamaları vardır. Aralığınız için bir başlangıç ​​noktası belirtmek istiyorsanız, başka bir biçim denemek isteyebilirsiniz:
console.log(Array.from({length:6}, (_,i)=>5+i));//[5, 6, 7, 8, 9, 10]
//5-Mevcut bir dizideki her öğe üzerinde bir eylem gerçekleştirerek yeni bir dizi oluşturun-map ile yaptigimiz islemi yapiyoruz direk
//herbir ogeyi 2 ye carp
console.log(Array.from([1,2,3], x=>x*2))//[2, 4, 6]
//Veya her öğenin karesini alın:
console.log(Array.from([1,2,3], x=>x*x))//[1, 4, 9]


//Document Objemiz Uzerinden Nelere Erisebiliriz?
console.log(document.body);//Direk body ye erisebiliyoruz
console.log(document.head);
console.log(document.form);
console.log(document.location);
console.log(document.location.hostname);
console.log(document.location.port);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.scripts);//1 tane script elementi var
//script dosyalarini yerlestirdigimz yer cook onemli...
//Burda script etiketlerinin ekstra bir onemi var cunku biz ana scrip etiketi olan script etiketini en alta koymamiz lazim cunku eger baska script dosyalarimiz var js dosyalarimziz ve bunlar ana js dosyasinin altinda kalirsa o ek js dosyalarini dahil etmeden calisir ve sayfamizda eksilmeler goruruz....O yuzden bu cook onemli....
console.log(document.scripts.length);
console.log(document.links);//Sayfamiz icindeki tum a link elementlerini bize getirir.....
console.log(document.links.length-1);
//Attribute lere erisme veya dogrudan classs atributune erisme....
console.log((document.links[document.links.length-1]).getAttribute("class"));//a etiketlerinden sonuncu etiketin class ismini getirir
console.log((document.links[document.links.length-1]).className);
//Class lar birden fazla ve ayri ayri gormek istersek...

console.log((document.links[document.links.length-1]).classList);
//Class lari liste olarak aliriz

//Sayfadaki formlari alalim
console.log(document.forms);
document.forms[0]//ilk formu aliriz
//Forma name ozelligi uzerinden de erisebiliriz..
//Form bir objedir attribute leri ise ornegin name="form " olan bir forma da 
//document.forms("form") seklinde erisilebilir
//Yani form birden fazla ise name lerine gore bu sekilde ayirarak kullanabilriiz ve dogrudan ayri ayri erisebiliriz....
//1.siradaki formumuzun id sine erisme
//Elementlerimizin attributeleri o elemnte ait objenin icinde bulunan bir prototpye gibidir...
document.forms[0].id;
document.forms[0].getAttribute("id");
document.forms[0].name;
document.forms[0].getAttribute("name");
document.forms[0].method;//default olarak get gelir...



