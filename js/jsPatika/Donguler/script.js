

let users=["Lorem","Ipsum","Dolor"];
//Biz burdaki verileirmizi ekrana yazdiririken veya kullanciiya gosterirken bir tane li miz olur ve o li icerisine elmanlarimizi alt alta yazdiririz...

let userList=document.querySelector("#userList");
console.log(userList);


for (let i = 0; i < users.length; i++) {
    const element = users[i];
    userList.innerHTML+=`<li>${element}</li>`; 
    
}



for (let i = 0; i < users.length; i++) {
    const element = users[i];
   let liDom=document.createElement("li");
   liDom.innerHTML=element;
   userList.appendChild(liDom);
   liDom.style.margin="10px";

}

const LOREM_LIST=["lorem","ipsum","dolor","annet","amet","consectetur","adispicing","elit"];

//Break-Devam eden dongumuz aradigimiz bir kullanici gelene kadar devam edecek ve o kullanici geldiginde artik dongu durmasi gerekecek o zaman break kullaniriz
//Ancak continue da ise ornegin bir kullanici geldiginde o kullaniciyi almak  istemiyoruz ve ama sonrasiindaski kullanicilarla devam etmek istiyroz

let counter=0;
for(; counter<10; counter++){
    
    if(counter==5){break}
    console.log(counter);
}

console.log("..................")
let counter2=0;

for(; counter2<10; counter2++){
    
    if(counter2==5){continue}
    console.log(counter2);
}
 