
let email="hakanyalcinkaya@gmail.com";
let firstName="hakan";
let lastName="YALCINKAYA";

let isActive=true;
let items=[1,3,4,firstName,lastName];
console.log(items);
//BIZ = DEDIGIMIZ ANDA GIDER BELLEKTE YENI BIR ALAN ACAR ADRES TUTAR, YENI BIR REFERANS TUTAR BUNU UNUTMAYALIM!!!!!

//Bos bir liste olustrduk
let emptyArray=[];

//Neden bos bir liste olustururuz cunku mesela biz bir form dan verileri aliyor olabiliriz ve bu verileri bir dizi icinde tutmak isteyebiliriz...
console.log(items.length)

//ilk eleman a ulasmak
console.log(items[0]);
//Son elemana ulasmak
console.log(items[items.length-1]);

//Degiskenimziin array olup olmadigini kontrol etmek
console.log(typeof items);//Bu bize object verir ki javascript e aslinda array ler de bir objedirler, fonksiyonlarda bir objedirler
//Ama burda ayirici ozellike array icinde arrya a ait constructor array dir..

console.log(Array.isArray(items));//true geliyor ve array oldugunu anliyoruz burdan da

//hangileri isArray bilgisidir..
console.log(Array.isArray([]));

//Eger sen array isen ve senin icinde de su bilgiler varsa veya herhangi bir bilgi varsa gibi kontroller yapabiliriz array icinde
//Array in ortasindaki elemana ulasmak
console.log("ortadaki: ", items[Math.floor(items.length / 2)]);//5 elemanli bir dizide 3.ridakini verir 6 elemanli bir dizide ise 4.elemani verir

//Dizi icinde bir elemanin olup olmadiginin sorgulanmasi
console.log(items.includes(14));//items.includes() icine yazdgimiz eleman dizi icinde var ise true gelir yok ise false gelir.....

//Listemizin sonuna bir oge ekleyelim-push
items.push("55");
console.log(items);

//listemizin ilk basina eklemek istersek-unshift
items.unshift("Skien");
console.log(items);

//En sondaki ogeyi cikarmak!-pop
items.pop();//Otomaik bir sekilde dizinin son elemanini dizi disina firlatir
console.log(items);
//pop ile dizi disina firlatilan elemani biz yakalayabiliriz...Biz bir diziden bir elemn cikarirsak o elemani mutlaka bir degisken atariz o elemani da elimizde tutabilmek icin
let lastItem=items.pop();
console.log(lastItem);
console.log(items);

//En bastaki elemani cikarmak isteyebiliriz-shift
//En basta olup da diziden cikardigimiz degeri yine degiskene atayabiliriz

let firstItem=items.shift();
console.log(firstItem);
console.log(items);

//Array icindeki bir ogeyi nasil degistirebiliriz

items[0]="Adem";//Dizi ilk elemanini degistirmek
items[items.length-1]="Zehra";
console.log(items);//dizinin son elemanini degistirmek

items[10]=122;//Burda items da 10 tane eleman yok 4 eleman var ve biz diyoruz ki 10.elemnana 122 ekle o zamn dizimiz 4.elemandan 10.elemana kadar olan ogeleri bos olarak geciyor ve 10.elemana gelip 122 yazdiriyor
console.log(items);
console.log(items[5])//bos oldugu icin undefined gelir
console.log(items[10])//122 gelir burasi da

let items2=[1,2,3,4,5];
let femaleUsers=["Ayse","Hulya","Merve"];
let maleUsers=["Ahmet","Hasan","Mehmet"];

items2.push(maleUsers);//Sonun eleman ekleriz
items2.unshift(femaleUsers);//Basina eleman ekleriz
console.log(items2);
console.log(items2.length);

//Bu ikisi ayni isi yapar...Bu ayni bizim obje properties ine yaptigimiz gibidir...
console.log(items2[0].length);
console.log(items2[0]["length"]);
console.log(items2[0][0]);

//Array icindeki ogeleri ayirmak
//Biz splice ile hangi elemandan baslayip kactanesini alacagimizi soyledikten sonra bu dedigimiz elemanlari items2 dizisinden ayirmis oluruz ve items2 dizisinde bizim splice ile secmediklerimiz kalacaktir.....

let newItems=items2.splice(1,5);
//indexi 1 olan elemandan baslasin ve 5 eleman alsin demektir bu
console.log(newItems);
console.log(items2);

//indexof ile index bilgisin kullanmak

items2.unshift("lorem");
items2.push("ipsum");
console.log(items2);
console.log(items2.indexOf("ipsum"));//Bu demektir ki ipsum elemani items2 dizisinde 3. indextte bulunmaktadir

//items2=['lorem', Array(3), Array(3), 'ipsum']
//Array kopyalamak...
//Biz burda array items2 yi copyItems a atadik o zaman ne oldu artik ayni adresi tutuyorlar daha sonra ise gittik copyItems dan en son elemanini pop mehtodu ile sildik eee ne olmus oldu o zaman items2 ile ayni adresi tuttuklari icin items2 dende o eleman silinmis olacak iste refeerans tipler cook onemlidir...
console.log("Direk items2 yi copyItems a atama yaptik...")
let copyItems = items2;
copyItems.pop();
console.log(copyItems);//['lorem', Array(3), Array(3)]
console.log(items2);//['lorem', Array(3), Array(3)]
//DIZILER-DIZIDEN KOPYA OLUSTURARAK IMMUTABLE DAVRANMASINI NASIL SAGLARIZ...
//Array yapilarinmda biz yeni bir degiskene atama yaptgimiz zaman onun koopyasini olusturmaz primitive tiplerde oldugu gibi primitive tiplerde biz yeni bir degiskene baska bir degiskeni atarsak yeni degisken icin gidip bellekte yeni bir adres olustururulur yani atadigmiz degiskeni biz degistiremeyiz onun sadece kopyasini olustururuz bu primitiv tiplerde boyle olur ve onlar immutable dir.Ama bir diziyi biz gelip baska bir degiskene atarsak o degisken kkendisine atanan dizinin adresini tutar yani kopyasini olusturmaz dolaysi ile de ayni adresine ataandigi dizide ki her turlu degiskilik kendisini de etkiledgii gibi, kendisinde yapacagizmi her turlu degisiklik adresine atadigimz diziyi de etkilecektir
//Ama biz yeni bir yapinin , yani dizimizin bir kopyasinin olusmasini ve ana dizide bir degiskiklik oldugu zaman bu yapimizin degismemesini istiyorsak bunun icin
//Once ipsumu en sona bir daha ekeyelim
items2.push("ipsum");
console.log(copyItems);
console.log(items2);
// ['lorem', Array(3), Array(3), 'ipsum']
//Slice methodunu uyguladiktan sonra tekrar copyItems dan bir eleman silelim ve sonuc bakalim     
//ISTE COZUMUMUZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log("Slice uygulandi..")                               
copyItems=items2.slice();
copyItems.pop();//en sondaki elemani siler ve degiskene atarsak da sildigi elemani yakalayabiliriz
console.log(copyItems);//['lorem', Array(3), Array(3)]
console.log(items2);//['lorem', Array(3), Array(3), 'ipsum']

//ES6 ILE GELEN REST-SPREAD YONTEMI ILE KOPYALAMA ISLEMI YAPABILME!!!
//BESTPRACTISE BIR DIZIYI KOPYALAYABILME-MUTABLE OLAN DIZIYI IMMUTABLE HALE GETIRME!!!
let es6Item=[...items2];
console.log(es6Item);// ['lorem', Array(3), Array(3), 'ipsum']
console.log(items2);// ['lorem', Array(3), Array(3), 'ipsum']
es6Item.pop();
console.log(es6Item);//  ['lorem', Array(3), Array(3)]
console.log(items2);// ['lorem', Array(3), Array(3), 'ipsum']

//Birden fazla arrayi birlestirme!!!!

let femaleUsers2=["Ayse","Hulya","Merve"];
let maleUsers2=["Ahmet","Hasan","Mehmet"];

let allUsers=[...femaleUsers2, ...maleUsers2];
console.log(allUsers);//['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet']

//Ayni islemi concat ile de yapabilirzi iki diziyi concat ile birlestirmek
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.

//Array icindeki bilgimizi stringe cevirmek!!-toString

console.log(allUsers.toString());//Ayse,Hulya,Merve,Ahmet,Hasan,Mehmet

console.log(allUsers.join(","));//join ile de yine dizimizin icindeki ogeleri aralarinda nasil bir bosluk birakmak istersek veya cizgi vs ne birakmak istersek onu join methodunun parametresine yazariz.Eger join methodunun parametresinin icine hicbirsey yazmaz isek o zaman dizi icindeki tum elemnlari yanyana getirecektir

//Istedigimiz index bilgisine gore oge eklemek!
//Ensondan bir oncesine Maliha isimli bir oge eklemek
//0 demeek parcalama demektir
allUsers.splice(allUsers.length-1,0,"Maliha");
console.log(allUsers);
//Ortasina eleman eklemek!
allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem");
console.log(allUsers);
