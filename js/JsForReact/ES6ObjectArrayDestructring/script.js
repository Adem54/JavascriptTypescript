//Object-Array destructring
//Dizi ve objelerin parcalara ayrilip degiskenlere atnamasi islemidir

//Destructuring islemini biz genellikle reactta proplardan gelen verri icndeki bazi propertiesleri bir fonksiyonumuzun parametresinde kullanmak icin kullaniriz...
const user={
    name:"Mehmet",
    age:34,
    city:"Skien",
    address:"Bjørntvedvegen",
    country:"Norway",
    profession:"web-developer"
}

//Destructring islemini yapabilemimiz icin bu objedeki key , yani property isimleri ile ayni isimde bir degisken olusturuyoruz ve bunu tek satirda yapiyoruz ve karsisina icinde deger olan objeyi yaziyoruz ve o objenin icinen almak istediigmiz key leri suslu paranez icinde yaziyoruz
const{name,age}=user
//Dikkat edelim objenin tum verilerin almak zorunda degiliz bize na lazim ise onu aliyoruz.
console.log(name + " "+ age)

//BEST PRACTISE.....REST OPERATORU ILE BERABER
//REST-TOPLAMAK-SPREAD-DAGITMAK
//Baska bir senaryo--diyelim ki objenin icinde 100 tane deger var ve bize sadece 1 tane si lazim ama gerisini de sonra kullanabiliriz onu da ayri sekilde bir degiskenimizde tutmak istyoruz...O zaman ne yapacagiz...
let {city, ...kalanlar}=user;

console.log(kalanlar)//Bu sekilde city haric kalan tum elemanlari kalanlar ismili bir objede toplamis oluruz ve bunun adi rest tir...ki bu genellikle fonksiyonda, parametre degerlerini cok fazla oldugu veya surekli artma durumunda olan fonks parametrelerinin yerine rest ile onlari toplariz...
console.log(city)

const students={
    firstName:"Adem",
    lastName:"Erbas",
    lesson:"norsk",
    score:5
}

//Burda hata aliyoruz eger obje ise once let ile tanimlayip sonra onlari obje icine atip da esitleme islemini objede kabul etmiyor direk suslu parantez icine atip tanimlayip ayni satirda direk obje degerini atamak gerekiyor...
//Ama ayni sey dizi de problem olmuyor...
// let firstName,lesson;
// {firstName, lesson}=students;
// console.log(firstName+ lesson)



//REACTTAN BIR ORNEK ALALIM

const user2={
    name2:"Mustafa",
    age2:44,
    city2:"Skien",
    address2:"Bjørntvedvegen",
    country2:"Norway",
    profession2:"web-developer"

}

//Reactta parametreye propslar gelecektir biz bu propslari daha efektiv ve istedigimiz gibi kullanmak icin destructuring veya rest ile function da kullaniriz...
//Suna da alisalim ki biz parametreye degerleri direk atamayiz obje icide atariz ki kontrol altinda tutalim daha rahat kontrol edelim sismesini onleyelim....
function kullaniciGoster({name2,age2}){
    return `${name2} isimli kullanici ${age2} yasindadir`;
}

let {name2, age2}=user2;
console.log(name2,age2)
//Burda su ik seye cok dikkat
//1-destructuring yaparken objenin proprty ismin yani key ismi ayni olmalidir yoksa hata aliriz
//2-name2 ve age2 ile aldigimiz verileri de direk yazmak icin yani ES6ShorthandProperty ozelliginden dolayi bunlar objeye degiskenden gelecegi icin direk gelen degisken isimleri ile yazrsak o zaman sadece key degerini yazmamiz yeterli oluyor du ondan dolayi biz parametrye de name2,age2 yazmak zorundayz ya da asagidaki gibi parametreye name:name2, age:age2 yazacagiz ki buna hic gerek yok...
console.log(kullaniciGoster({name2,age2}));

function kullaniciGoster1({name,age}){
    return `${name} isimli kullanici ${age} yasindadir`;
}

console.log(kullaniciGoster1({
    name:name2,
    age:age2
}))

//DIZILERDE DESTRUCTURING
//Dizilerde anahtar olmadigi icin sira onemlidir
const numbers=[1,2,3,4,5]
let sayi1,sayi2;
[sayi1, ,sayi2]=numbers;

console.log(sayi1+"  "+sayi2);
let[number1, ,  ,number4]=numbers;
console.log(number1+ " "+ number4)//1 ve 4 gelecektir

//BESTPRACTISE biz bu dizi icinden  1 eleman almak istiyrouz ve gerisini de yine bizim bir dizimize atmak istiyurouz

let [myNumber1,...myRestNumbers]=numbers;
console.log(myRestNumbers)//2,3,4,5
console.log(myNumber1);//1