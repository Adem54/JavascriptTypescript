//Objeler

let student={
  firstName:"Adem",
  lastName:"Erbas",
  age:33
}

//Alttaki iki satirda ayni islevi goruyor...
console.log(student.age);
console.log(student["age"]);

student.firstName="Zehra";

console.log(student)

//Obje olusturmanin baska bir yontemi de bu sekildedir...
let person=new Object();
person.name="Zeynep";
person.lastName="Erbas";
person.age=34;

console.log(person);

//Biz obje icinde dizi, function ve yine obje tanimlayabiliriz...
let player1={
  firstName:"Kamil",
  lastName:"Taylan",
  age:25,
  fullName:function(){
    return this.firstName+ this.lastName;
  },
  children:["Joni","Nermin","Servet","Arma"],
  parents:{
    mother:"Emel",
    father:"Rark"
  }
}


