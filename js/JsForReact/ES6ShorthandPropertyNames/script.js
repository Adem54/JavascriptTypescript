//ES6 Shorthand Property Names

//Objelerimiz key:value sistemi ile calisiyor
//Bir objeyi olustururken eger anahtarin degeri bir degisken den geliyorsa anahtarin acikca belirtilmesine gerek yoktur.-Degiskenin direk olarak  objeye girilmesi degiskenn ismini anahtar olarak , degerini ise deger olarak atar

const name="Mehmet";
const age=35;

//{name:"Mehmet", age:35} bu sonucu elde etmek istiyoruz
//Eger verilerimiz degiskenden geliiyorsa....
const user_object={name,age }//bu aslinda name:name, age:age  bu demektir....
console.log(user_object);
//{"name": "Mehmet","age": 35}

//BUNUU REACTTA NASIL KULLANIYORUZ....
//Bir sayacimiz var mesela, bu bir custom ozel hazirlanmis useCounter dan gelsin, useCounter icinde 2 adet degisken olusturmak istiyoruz, icerde olusturmak istedigimiz objenin anahtarlari ve bunlar bize biryerden gelir, bu kisim propslardan destructuring yaparak gelir...
//Sayac fonksiyonunn parametrsindeki olay object destructring oraya gelen props degerleri descructuring ile aliniyor...
//icerdeki userCounter icerisine biz bir obje gonderiyoruz ve icinde iki tane keys var baslangicDegeri ve adim keys lerinin values leri props lardan geliyor yani parametreye propslardan geliyor obje olarak biz de o objeyi destructuring yontemi ile aliyoruz....
function Sayac({baslangicDegeri,adim}){
const [sayac,setSayac]=useCounter({baslangicDegeri,adim})
return <button onClick={setSayac}>{sayac}</button>
}