//REST PARAMETRE-REACTTA COK ONEMLI....
//rest=>Geriye kalanlar demek
//C# daki karsiligi params dir...
let showProducts=function (id, ...products){
    console.log(id);
    console.log(products)
}

//typeof ile en son aldigi degerin turunu okuyabiliriz..ve showProducts in tipi function dir
//console.log(typeof showProducts)
showProducts()
//Sonuc olarak 
//console.log(id); undefined donuyor=>NOrmal beklendigi gibi
// console.log(products)=>[]=>bos array olarak donuyor=>Bunu inceleyelim
//Neden bos array, cunku ...products bir arraydir
showProducts(10, "Elma","Armut","Karpuz")
//Bu sekilde biz 2.parametre olan ...products yerine yazarken sanki direk dizi icerisne yaziyor gibi yaziyoruz ve o bize bunu dizi icinde donuyor....
//10
//['Elma', 'Armut', 'Karpuz']
showProducts(10,["Elma","Armut","Karpuz"])
//Bu sekilde direk array olarak gonderirsek biz products parametresinin yerine o zaman da array icerisinde array olarak donecektir bize, yani 1 elemanli bir array donecektir.
//Bu kullanim harika birsey biz ona direk istedigimiz kadar elemani normal bir string, int gibi ardi ardina yazioyoruz hic dizi ye vs atmadan o bize direk dizi olarak donduruyor....Bu kullanim cok guzel!!!!!
showProducts(10,["Elma","Armut","Karpuz"],"Skien",{id:"3",name:"Serkan"})
//Burda ise bize products olarak 3 elemanli bir array doner
//0 indexli elemani ["Elma","Armut","Karpuz"]
//1 indexli eleman "Skien"
//2 indexli eleman {id:"3",name:"Serkan"}

//SPREAD OPERATORU....
console.log(Math.max( 12,45,32,78))
// Math.max() fonksiyonunun parametresine gelirsek boyle bir uyari gelir bize..Bu bir rest parametresidir ve sen buraya direk numara girmelisin yanyana virgulle yazarak diye ama tabi bu tip in bu sekilde olma zorunlulugunu javascript.next diye birsey ile yapilmis bu normalde js de  yok  ...values: number[]): number
//...values: number[]): number=>Sen buraya 3,12,34,56,78 gibi sayilar gir demektir
//Yani Math.max() fonksiyonunun icine girilecek veriden onun rest oldugunu ve istedigimiz kadar sayi girebilecegimizi anliyoruz bu da bize C# daki params i hatirlatiyor ancak biz gidip de oraya dizi giremeyiz girersek bize NaN donecektir 

//Peki bu deger bize api den dizi olarak geliyor olsa idi
let points=[1,2,3,5,7,23,33,45]
//Bu pointsi biz Math.max() fonksiyonunun icerisine nasil gecirecegiz....
//Burda spread devreye giriyor kelime anlami ayristirmak demektir

console.log(...points);
//1 2 3 5 7 23 33 45//...points demek points dizisinin icindeki elemanlari yanyana getir demek...eger biz biryere deger olarak ... basina olan bir degisken varsa biz oraya istedigimiz kadar artik duruma gore int,string vs deger girebiliriz dogrudan demektir ama ... nun onun gelen degiskenin bir dizi oldugunu unutmayalimm
console.log(Math.max(...points));
//Eger bir islemde bize diziye ait elemanlarin sira ile o islemden gecmesi gerkiyorsa iste bu rest bizim icin cok kullanislidir
console.log(..."ABC","D",..."EFG","H");//A B C D E F G H

//DESTRUCTURING(Parcalamak)-Bu  konu cok hayati...bu konuyu iyi anlamaliyiz cok fazla kullaniliyor...
//Elimizdeki arrayin degerlerini degiskenlere atama yontemidir
let populations=[10000,20000,30000];
//dizi elemanlarinin her birini farkli bir degiskene atamak istiyoruz, population[0] diye erismek istemiyoruz...
//Bunlar bizim degiskenlerimiz ve dikkat edelim lette tanimliyoruz..
let [small,medium,high] =populations;
//Bu demektir ki populations arrayinin icerisindeki degerleri sirasi ile small,medium ve high degerlrine aktar demektir
//small=10000, medium=20000, high=30000
console.log(small);//10000
console.log(medium );//20000
console.log(high);//30000



//setState i biz values adli dizi mizin icerisine atayabiliriz...
//Mesela diyelim ki setState state durumunu degistirecek bir fonksiyon state durumu da values dizisndeki ilk elemani degistirecek diyelim ki, bu sekilde calisan yapilar icin kullaniyoruz
//let values=[0,setState,3000]


//Deconstruction 


//Nerelerde kullaniriz...
// const props1={ name:'Hello', surname:'World'}
// const {name:adi,surname:soyadi}=props1;
// console.log(`Adım ${adi} ${soyadi}`)

// const props2 ={ name:'Hello', surname:'World'}
// const {name:myName,surname:mySurname}=props2;
// console.log(myName);
// console.log(mySurname);


// const props={ name:'Hello'}
// const {name,surname="Unknown"}=props;
// console.log(`My Name ${name} ${surname}`)

// const test= {isim:"Adem" }
//  const { isim1}=test;
//  console.log(isim1)
// const {isim:benimIsmim}=test;
// console.log(benimIsmim);

// function sayHello({name,surname,other:{age}}){
//     console.log(`My name is ${name} ${surname} and age ${age}`)
// }
// const props={
//     name:'Deniz',surname:'Dayibasi',other:{age:8,height:128} }
// sayHello(props);
console.log("Test");
let populations2=[10000,20000,30000,[40000,50000]]
const [small3,middel3,high3,myRest]=populations2;
console.log("myRest "+myRest);//Dizi icine bir dizi aliyorsun
const [veryhigh3,maks3]=myRest;
console.log("myRest"+myRest)

const [small2,middel2,high2,[veryhigh,maks]]=populations2;//Kendi icinde destructring yaptik...
console.log("veryhigh3:  "+veryhigh3);
console.log("maks3 "+ maks3);



//Normalde javascriptte fonksiyon parametresi icerisinde dizi kullanma diye birsey yok ama sen parametreye bir dizi yazarsan onu javascript distructing olarak algiliyor....
//Dikkat edelim biz burda ayni zamanda parametreye bir dizi girilemsini zorunlu hale de getiriyoruz
let someFunction=function([sayi1,sayi2,sayi3]){
        console.log(sayi1+sayi2+sayi3)
};
const myNumbers=[5,12,43];
someFunction(myNumbers)

let mySomeFunction=function({myFirstName,surname4},city){
    console.log(`Adi ${myFirstName} soyadi ${surname4} ve sehri ${city}`)
}
const myInfo= {myFirstName:"Adem", surname4:"Erbas"}
mySomeFunction(myInfo,"Skien")

//Objeleri tanimlama
let myObj={id:1, name:"Adem"}
let id1=myObj.id;
let id2=myObj["id"];
let name1=myObj.name;
let name2=myObj["name"];
console.log("id1: "+id1+ " id2: "+ id2)
console.log("name1: "+name1+ " name2: "+ name2)

let category={id:4,name:"Icecek"}
//const {id,name} bu bir obje degildir sadece destruct etme yontemidir....
const {id,name}=category;
console.log(id)
console.log(name)
//name in ustunu cizme sebebi name i kullandigi bir snippet i var ondan dolayi

