const products=["Laptop","Phone","Speaker","Desktop","PC","Server","Mouse","Keyboard"];


products.forEach((product,index,array)=>console.log(product,index,array[index])); 
//3 tane parametre aliyor foreach, bir callfunction dir ve 1.array dizi icindeki her bir urunu tutacak olan alyas dir, 2.si index idir,3.su ise array in kendisidir
//Bu sekilde kullanabiliriz

console.log("..........................")
products.forEach((product,index,array)=>console.log(product=product+"111")); 
console.log("..........................")

//Bu sekilde her birisini buyuk harfle yazabiliriz..
products.forEach((product,index,array)=>console.log(array[index]=`${product.toUpperCase()}`)); 

const userList=document.querySelector("#userList");

products.forEach((product)=>{
    const liDom=document.createElement("li");
    liDom.innerHTML=product;
    userList.appendChild(liDom);
})

//foreach array den sonra kullaniliyor.Ama biz for u 1 den 100 e kadar saymak icin de kullanilabiliyor...

const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]

users.filter(user=>user.fullName.length>9);
  
//isActive i true olan objeleri getirecektir bize
console.log(users.filter(user=>user.isActive));//Yeni bir liste olarak donuyor
console.log(users);

console.log(users.filter(user=>user.isActive===false));


//Array Map
//Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.
//Öncelikle Array Map metodunun kullanımına bir göz atalım.

//array.map( function(value, index, array), this)
//Gönderilen parametreleri inceleyelim;
//array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
//value : Üzerinde işlem yapılan dizi değerini belirtir.
//array : Üzerinde işlem yapılan diziye erişimi sağlar
//this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.

//KULLANIIM AMACI!
//Ozellikler eger bir dizi icindeki elemanlarimiz uzerinde belli kosullara gore degisiklik yaptiktan sonra yeni bir dizi olarak dondurmek istedigimiz zaman kullanacagimiz bir methoddur

const USERS=["AYSE","MehMet","TugCE","AkSEL"];

//Her bir dizi elemanimizi kucukharfle farkli bir dizi icinde getirelim...

const new_User=USERS.map(user=>user.toLowerCase());
new_User.push("adem")
console.log(new_User);
console.log(USERS);

//{userName:"AYSE",shortName:"A", newName:"Ayse"} formatinda dondurmek istiyoruz

const Users_Obj=USERS.map((item)=>{
    return {firstName:item,shortName:item[0]+".", newName:item[0].toUpperCase()+item.slice(1).toLowerCase()}
});
console.log(Users_Obj);

//Obje oldugu zaman tek islem  yapacagimizi anlayamiyor ondan dolayi obje doneceksek 
//1-Ya suslu parantez ve icerisinde return yapmaliyiz hemen ustte yaptigimiz gibi
//2-Ya da nomrla parantez () ve icerisinde return olmamalidir...
//Bu obje olunca gecerli olmyor ama tek satirli tek islem y apacaksak da o zmaan da zaten => ok isareti return islemini yapacagi icn return e gerek kalmiyor...

 const myUsers_Obj=USERS.map((item)=>(
     {firstName:item,shortName:item[0]+".", newName:item[0].toUpperCase()+item.slice(1).toLowerCase()}
));

console.log(myUsers_Obj);