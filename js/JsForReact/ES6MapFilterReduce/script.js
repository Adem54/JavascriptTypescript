const products=[
    {id:1, name:"Kalem", unitPrice:5},
    {id:2, name:"Defter", unitPrice:10},
    {id:3, name:"Silgi", unitPrice:2},
    {id:4, name:"Kalemtras", unitPrice:7},
]

//Verilen dizi elemanlarina girilen callback fonks uygular
//Dizi elemanlarini tek tek gezip her bir eleman uzernde uygulayacagimiz islemlerin sonunda yeni bir dizi olustururuz


const urunOlusturucu=(product)=>`${product.name}  fiyati  ${product.unitPrice}liradir`;

console.log(products.map( urunOlusturucu));
//Return ile cagirdigimiz zaman yen bir dizi olusturuyor...

//React icerisinde bunu kullanirken genellikle 
//showProduct bir componmenttir ve buna urun listesi proplardan geliyor ve biz bunu destructuring yapariz

//REACTTE MAP AYNEN BU SEKILDE KULLANILACAKTIR...
//function showProduct({productList}){
  //  return productList.map(product=><li key={product.id}>{product.name}</li>)
//}

//NOT KEY OLARAK NORMALDE PRODUCT ID LERI KULLANILIR ANCAK EGER URUN ID LERI YOKSA O ZAMAN DA MAP ICINDE INDEX DE KULLANABILIYORUZ...2.parametre olarak...

//products.map((product,index)=>{
  //  return productList.map(product=><li key={index}>{product.name}</li>)
//})
console.log("Filter ozelligi")
//FILTER OZELLIGI....
//Verilen dizi elemanlarina callback fonks ile kosul uygulanir ve kosul sonucunda yeni bir dizi olusturarak bize donecektir

//Sayilar ve stringler uzerinde bu sekilde filtreleme yapabiliirz...
console.log(products.filter(product=>product.unitPrice>5));

//icinde sadece kalem gecen urunler gelecektir
console.log(products.filter(product=>product.name.toLowerCase().includes("kalem")))

//filter genellikle map ile birlkte zincirleme kullanilir biz listeyi once filtreleyip sonra listelemek istdigimizde kullaniyoruz..
//Birbirine chain yapabiliyoruz cunku filter den gelen kisim bir dizi donduruyor...map de zaten dizi de calisiyor..
console.log(products.filter(product=>product.unitPrice>5).map(product=>`${product.name} fiyati 5 ten buyuktur....`))

console.log("Reduce methodu")
//REDUCE METHODU...
//Bu fonksiyonun dondurdugu sonuc bir elemenda toplaniyor..
let result=products.reduce((acc,product)=>acc=acc+product.unitPrice,0)//baslangic degeri 0 olsun
console.log(result);

//Stringlerle yapalim bu isi

const topString=products.reduce((acc,product)=>acc= 
`${acc} ${product.name}`  , "urun isimleri: "
);//Back tick ile yazdigimz icin aralarina + koymamiza gerek yok...
console.log(topString)

const toplamDizi=products.reduce((acc,product)=>
acc=[...acc,product.name], []);

console.log(toplamDizi)
//Bu sekilde reduce ile de yeni bir dizi olusturup icine bu sekilde elamanlari gonderebiliriz ancak bunu map de de yapabilecegimiz icin....buna gerek olmaayabilir...

//Tek satirda yapabiliriz map ile
let newToplamDizi=products.map((product)=>product.name)
console.log(newToplamDizi)