
//1-Typescript i npm paketleri ile global olarak kur
//2-Typescript dosyasi olustur .ts uzantili
//3-Typescript i terminal de calistir ve tsc typescript.ts seklinde yani basina tsc koyacak sekilde calistir...Kendisi otomatik 1 tane js dosyasi olusturur ve artik budnan sonra typesxcript ile yazacagimiz kodlar javascripte cevrilecektir..
//tsc typescript.ts -w yaparsak ototmatik olarak her degisiklikte kendisi kaydedecektir
//Typescript Ozellikleri
//1-Static Type-C# daki gibi degiskenleri bastan tipi bellidir javascriptteki gibi dinamik type olmasinin onune gecilmmis olur
// a yi string belirledik ve number yani integer atamasi yaparsak Type 'number' is not assignable to type 'string'. bu sekilde bir uyari aliriz..
//2-Ama biz bir degisken dinamik type olsun javascriptteki gibi dersek onun icinde tanimaldigimiz degiskene any atmasi yapariz..
//3-Array tanimlarken de string mi int,number mi belirtmeliyiz ve icerisine sadece string degerler ekleyebiliriz..
let a:string;
let b:number;
let c:boolean;
let d:any;

let langs:string[];
let numbers:number[];
let myNumbers:Array<number>=[12,34,22,56];
console.log(myNumbers);
let myboolValues:boolean[];
let boolValues:Array<boolean>;
langs=["Php","Java","C++","Python"];
numbers=[1,3,5];
boolValues=[true,false,false];
myboolValues:[false,false,true];

d=34;
a="Hello World!";
b=23;
c=true;
console.log(...langs);//ES6 ozelliklerini de kullanabiliyoruz
console.log(numbers);

//Void tanimlarsak return yapamayz..
function addNumbers(num1:number,num2:number):void{//return yapmaycagimzi fonksiyonu bu sekilde tanimlariz...
    console.log(num1+num2);
}
//addNumbers(13,"mere");//Burda bize hata verecek parametrye integer girmedigimiz icin
addNumbers(13,34);//Burda console dondurduk biz

//Burda bir tane number return dondurursek o zaman number return donecegimizi belirtmeliyiz..
function addMyNumbers(num3:number,num4:number):number{
    return num3+num4;
}

console.log(addMyNumbers(52,12));

//Optioan parametre gonderebiliriz yani bazi durumlarda parametre gondermeyiz, bazi durumlarda parametre gonderebiliriz
function addNumbers2(num1:number,num2?:number):number{
    if(typeof num2 === "undefined"){
    return num1;
    }
    return num1+num2;
}
console.log(addNumbers2(1,4));
console.log(addNumbers2(10));

function addmyNumbers2(num1:number,num2:number=100):void{
    console.log(num1+num2);
    return //tek basina dondurme sebebimiz fonksiyonu durdurmaktir,
}

console.log(addmyNumbers2(25));
//Eger ihtiyacimiz olursa bir fonksiyonu sonlandirmak icin sadece return u kullanabilriz