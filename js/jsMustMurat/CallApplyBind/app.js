console.log("CallApplyBind");
//Call,Apply ve Bind fonksiyonlari javascriptte fonksiyon prototype inin icinde bulunan methodlardir
//Bu fonksiyonlar bir fonksiyonu farkli objelerle kullanabilmemizi sagliyor
//Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır. Argümanlar fonksiyona tek tek gönderilir. (Örnek: test(obj,arg1,arg2,arg3))
const obj3 = {
    number1: 10,
    number2: 20,
}
const obj4 = {
    number1: 30,
    number2: 50,
}
function addNumbers2(num){
		console.log(this.number1 + this.number2 + num );
}
addNumbers2(100);
// Çıktı : NaN
//Buradaki çıktının neden NaN olduğuyla ilgili bir fikri olan var mı ? Fikri olmayanlar için açıklamak gerekirse, şu anda global scope’ta bulunan objemiz window objesi olduğu için ve this anahtar kelimesi bu objeyi gösterdiği için bu sonucu aldık. Window objesinin içinde number1 veya number2 şeklinde property bulunmuyor. Bu nedenle aslında “undefined + undefined + 100” gibi bir toplama yapıyoruz ve bunun sonucunda “NaN” sonucunu elde ediyoruz.
//Peki bu örnekte addNumbers fonksiyonunun hem obj3 hem de obj4 objesi için çalışmasını istersek ne yapabiliriz ? İşte burada yardımımıza call ve apply fonksiyonları koşuyor. Burada, yukarıdaki tanımlara göre call veya apply fonksiyonlarını kullanırsak this anahtar kelimesi, call fonksiyonuna hangi objeyi argüman olarak gönderirsek onu gösterecektir.
//Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır. Argümanlar fonksiyona argüman listesi şeklinde gönderilir. (Örnek: test(obj,[arg1,arg2,arg3]))
console.log("Call fonksiyonu")
const obj1 = {
    number1:10,
    number2:20
}
const obj2 = {
    number1:30,
    number2:50
}
function addNumbers(num) {
    console.log(this.number1 + this.number2 + num);

}
//KISACASI CALL FONKS ILE DIYORUZ KI FONKSIYONA HACIM SENIN THIS IN ARTIK CALL U KULLANDIGIN ZAMAN, ILK PARAMETRYE ALDIGIN OBJEDIR VE SONRAKI PARAMETRELER ISE SENIN FONKSIYUON OLARAK SENIN PARAMETRELERINDIR.YANI BIZ CALL SAYESINDE FONKSIYONUMUZA ISTEDIGIMIZ BIR OBJEYI BAZ ALARAK CALISTIRABILIYORUZ, BIR ANDA THIS INI ISTEDIGIMIZ BIR OBJE YAPABILIYORUZ
addNumbers.call(obj1,100);//130
addNumbers.call(obj2,100);//180
//Burada call metoduna birinci argüman olarak obj1'i gönderdiğimizde this anahtar kelimesi bu objeyi gösterdiği için sonucumuz 130 çıktı. Aynı şekilde, obj2'i gönderdiğimizde de 180 sonucunu aldık.Yani, bir fonksiyonu call fonksiyonuyla farklı objeler ile kullanabildik. Şimdi de bu kullanımı apply metoduyla yapmaya çalışalım.Apply methodunun call methodundan tek farki addNumbers fonksiyonumuzun arguman listesini dizi icersinde veriyoruz...
console.log("Apply fonksiyonu")
const obj5 = {
    number1:10,
    number2:20
}
const obj6 = {
    number1:30,
    number2:50
}
function addNumbers2(num) {
    console.log(this.number1 + this.number2 + num);

}
addNumbers2.apply(obj1,[100]);
addNumbers2.apply(obj2,[100]);
//Bind fonksiyonu
function getNumbersTotal(number3,number4){
    return this.number1+ this.number2+ number3+ number4;
}
//Bind fonksiyonu burdaki fonksiyonumuzdan bir kopya uretiyor, biz burda obje olarak hangi objeyi verirsek o kopya fonksiyon o objeye gore calisir,
//Bind fonksiyonunun kullanildgi yerler eventlerdir ve ozellikle this anahtar kelimesinin karistigi yerlerde biz fonksiyona gelip senin this in artik bu diye onun isteidigmiz bir objeye gore calismasini saglayabiliyoruz...
//Bind in call ve apply dan farki su dur ki call ve apply ile calisma mantigi ayi olmakla beraber call ve apply bize ekstra kopya bir fonksiyon uretmezken bind fonksiyonu bize ekstra kopya bir fonksiyon uretiyor...
copyFunc1=getNumbersTotal.bind(obj1);
//Fonksiyonu daha detayli gormek icin 
console.dir(copyFunc1);//bounddan bunmlarin bir kopya oldugunu anlariz..
copyFunc2=getNumbersTotal.bind(obj2);
//Bind fonksiyonunda biz fonksiyonumuzun kopyasini urettigimiz icin call ve apply dan farki biz bu fonksiyonlari isteidigmiz yerde kullanabiliriz.Call ve apply da biz fonksiyonumuzu direk cagriyoruz ama bind ile olusturdugmuz fonksiyonlari uygulamamizin istedigmz bir yerinde kullanabiliriz...Gordugumuz gibi direk bu fonksiyonumuzu istidmiz yerde cagiriyoruz...ama apply ve call da direk cagirarak kullaniyoruz...
console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));
//CALL VE APPLY ILE PROTOTYPE TABANLI KALITIM YAPMAK
//Peki biz bu fonksiyonları nerelerde kullanabiliriz ? Örneğin, Prototype tabanlı kalıtım yaparken bu fonksiyonlar oldukça yararlı olacaktır.
//Baska bir constructor cagirmak icin biz call veya aplly methodlarini kullanabiliriz...
//Bizim kalitima nerde ihtiyacimiz oluyor ornegin biz bir sirkette calisanlarimiz var ve biz bir tane temel bir constructor function yapmak istiyoruz Person isminde ve sonra uretecegimiz customer,employee gibi constructor func larini Person dan uretmek isteriz ki tekrar tekrar ortak olarak kullanacagimiz ozellikleri olusturup hem kendimizi tekrar etmeyelim hem de bellekte her seferinde ayn seyleri farkli yerde olusturup yer isgal etmeyelim..Yani biz Person i temel base func constructor yaptiktan sonra bundan sonra olusturacagimiz ve Person i miras almasini inherit etmesini saglayacagimiz diger Employee,Customer ve bundan sonra gelebilecdek yeni func constructor larda birer Person dir aslinda diyebiliriz..
console.log("Kullanim yeri");
function Person(name, age){
    this.name = name;
    this.age=age;
    
}
Person.prototype.showInfos=function(){
    console.log(this.name+ this.age);
}
const person1=new Person("Adem",33);
console.log(person1);
function Employee(salary,name,age){
    // this.name=name;
    // this.age=age;
    //BU SEKILDE PERSON CONST FUNC INA DIYORUZ KI SEN ARTIK THIS OLARAK EMPLOYEE YE TABI OL..VE ONU BIR NEVI MIRAS ALIYORUZ DIKKAT EDELIM DIREK EMPLOYEE CONST FUNC ICINDE YAPIYORUZ BUNU...OBJECT.CREATE ILE BIZ PROTOTYPE KALITIMI YAPIYORDUK..VE BOS BOSUNA TEKRAR TEKRAR NAME,AGE I HER SEFERIDNE YAZMAKTAN KURTULDUK SU ANDA VE KENIMIZI TEKRAR ETMEMIS OLDUK....
    Person.call(this,name,age);
    //Person.apply(this,[name,age]);

    this.salary = salary;
}
const emp2 = new Employee(5000,"Adem",29);
console.log(emp2);//Normalde kendi objesi, Employee prototypei ve en tmel Obje olan Object objesini kullanir
Employee.prototype=Object.create(Person.prototype);
//Overriding
Employee.prototype.showInfos=function(){
    console.log(this.name + this.age+ this.salary);
}
const emp1 = new Employee(6000,"Mustafa",25);
//Biz person a ait showInfo degil de direk Employee ile yazdigimiz showInfos u kullanmak istoyoruz yani miras aldigi Person a ait olan showINfos u override, yani ezmis olacagiz
console.log(emp1);
console.log(emp1.name);
console.log(emp1.age);
emp1.showInfos();
