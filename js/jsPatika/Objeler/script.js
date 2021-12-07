//Template Literals...

let arrayObj=[1,2,3];
let object1={obj:1};

console.log("arrayObj: ", typeof(arrayObj));
console.log("object1", typeof(object1));

let item1=new Object();
let item2={};
console.log("item1: ", typeof(item1));
console.log("item2: ",typeof(item2));

let item3={}
let item4=new Object();

//Bir objenin new lenebilmesi icin constructor  olmasi gerekir...

let myArr=new Array();
myArr[0]="Adem";
console.log(myArr);
console.log(typeof(myArr))

//OBJE OLUSTURMA-KEY,VALUE ILISKISI
//Key lere yeni value ler atamak
//Key lere ulasmak.Object.keys()
//Key leri dinamik atamak. 
//Value lere ulasmak-Object.values()
//Hem key hem valueye ulasmak-Object.entires()
let laptop1={
    brand:"Apple",
    model:"MacBook Pro",
    "2kg":2
}

console.log(laptop1);
console.log(laptop1.brand);//Apple
console.log(laptop1.model);//MacBook Pro
console.log(laptop1["2kg"]);//2
//Key lere yeni value ler atamak
laptop1.brand="Acer";
console.log(laptop1);
laptop1["model"]="Toshiba";

//Yeni bilgiler eklemek
laptop1.version="10.15.7";
console.log(laptop1);

//Key leri dinamik atamak. 
let brand1="brand";//key bilgilerini bir degiskene atariz
let model1="model";
//Ornegin biz bu objeyi eger ki 10 yerde kullandi isek ve bir tane key i degistirmek istedigimiz zamn su anda sadece tanimladigimiz yerde degistirmemiz yeterli olacaktir....
console.log(laptop1[brand1]);
console.log(laptop1[model1]);

//Keylerimize dinamik olarak ulasmak!
let name="name";
let surname="surname";
let age="age";

let student={
    name:"adem",
    surname:"erbas",
    age:33
}

console.log(student[name]);
console.log(student[surname]);
console.log(student[age]);

//Bir obje icindeki properties lere yani Keys lere ulasmak.Object.keys()
let keys=Object.keys(laptop1);
console.log("keys",keys);
console.log();
console.log(".......................")
//Bir obje icindeki value lere ulasmak.Object.values()
let values=Object.values(laptop1);
console.log("values:", values)

//Bir obje icindeki hem keys, hem values lere erismek!
let entires=Object.entries(laptop1);
console.log(entires);

//Bir obje nin icindeki elemanlara for in ile erismek!!!!
for (const key in laptop1) {
    if (Object.hasOwnProperty.call(laptop1, key)) {
        const element = laptop1[key];
        console.log(key+": " + element)
    }
}

//for in dizilerde index donduruyor
for(const key in keys){
    console.log(key);
}

keys=Object.keys(laptop1);
//Ornegin elimdeki dizi nin elemanlari uzerinden objemiin value lerine ulasalim
keys.forEach(item=>{
    console.log(item);
    console.log(laptop1[item]);
});
//COOOK ONEMLI..BIZIM ELIMIZDE OBJEMIZ VE KEY LERIMIZ VARSA ORNEGIN HER ZAMAN DOT NOKTA NOTASYONUNU KULLANAMAYBILIRIZ HELE KI BIZE KEY OLARAK GELEN DONGU ICINDE BIR ALYAS ISE, YANI O BIR DEGISKENDIR ONDAN DOLAYI ORDA NOKTA NOTASYONU KULLANAMIYORUZ YA DA UNDEFINED GELIR ONDAN DOLAYI ORDA OBJEMIZDEN KEY I UZERINDEN OBJECT["KEY1"] SEKLINDE VALUE EYE ULASMA YONTEMI ILE ULASIRIZ...


console.log(Object.hasOwnProperty.call(laptop1,"brand"));
