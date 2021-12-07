//Arrow Functoins
const merhaba=()=>{
    console.log("Merhaba");
}

merhaba();

//Destructing

let number1;
let number2;

arr=[100,200,300,400];

[, , number1,number2]=arr;
console.log(number1,number2);

const [number3,number4]=arr;
console.log(number3,number4);

const numbers={
    a:10,
    b:20,
    c:30
}

const { a,b,c}=numbers
console.log(a,b,c);

const {a:number5,b:number6,c:number7}=numbers;
console.log(number5 , number6, number7);

//Function Destructig

const getLangs=()=>["Python","Java","C++"];
const [lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);


const numbers2=[1,2,3,4,5,6,7,8,9,10];

const [x,y,...z]=numbers2;
console.log(x,y,z);


const addNumbers=(a,b,c)=>console.log(a+b+c);

const person= {
    name:"Adem",
    age:25,
    salary:3000
}

const myLangs=["Python","Java","C++"];
const name="Adem";


//FOR IN....
//Obje icindeki key ve value lere erisebilmek icin kullaniriz.
//Asil obje icin kullanilir ama dizi icinde asagidaki gibi kullanilabilir
//Stringler uzerinde de gezinebiliriz...
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(key, element);       
    }
}
for(const index in myLangs){
      console.log(myLangs[index]);  
}
for(let index in name){
    console.log(name[index]);
}
//For of ile direk dizi icindeki elemnlara eerisiyuoruz...(C# daki foreach dongusune karsilik gelir...)
//String uzerinde de for of ile gezinebiliriz
//Ancak for of ile objectlerde islem yapamayiz..
for (const language of myLangs) {
    console.log(language);
}

for(let letter of name){
    console.log(letter);
}