
/*
let player1={
  name:"Ricardo",
  surname:"Querasma",
  age:34
}

let player2={
  name:"Cenk",
  surname:"Tosun",
  age:26
}
*/

//Bizim 11 tane oyuncumuz var her birisini de bu sekilde tek tek elle yazamayiz 
//OBJECT CONSTRUCTOR FUNCTION....Pascal Case ile olustururlur
function Player(name,surname, age){//Object constructor function-nesne function i bu
this.name=name;
this.surname=surname;
this.age=age;
}

//Biz en ustteki gibi tek tek player1,player2 diye tanimlaamak yerine functon nesne constructor ile bir tane yapimizi olustururuz ve sonra ondan instanceler olusturarak hizli birskekilde birden fazla nesne olusturabiliriz ve bizim olusturdugumz instanceler icinde name,surname,age propertieslerini barindiriyor...

//Object functon constructor nesne olusturucu
//Objelerimizi direk key-value seklinde olusturmak yerine bir tane ana template anonim bir nesne function constructor olusturup ondan objeler turetiyoruz...
let player3=new Player("Adem","Erbas",33);
let player4=new Player("Gokhan","Tore",32);
let player5=new Player("Robinho","Alex",29);
console.log(player3);
console.log(player4);
console.log(player5);

//Bu objelerimizi dizinin icine atalim
let players=[new Player("Adem","Erbas",33),new Player("Gokhan","Tore",32),new Player("Robinho","Alex",29)]

for (let i = 0; i < players.length; i++) {
  const element = players[i];
  console.log(element)
  
}


//MIRAS ALMA-INHERITANCE

function Person(){

}

Person.prototype=new Player("Engin","Kacar",36)

let person1=new Person();
person1.adress="Street";

console.log(person1.name)



