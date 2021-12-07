//Template Literals...

let hello=(firstName)=>{
    return firstName;
}
//TEk satirda kullanirsak => return demektir zaten onun icin 2 kez yazmmiza izin vermez return yazilmaz tek satirda iken
let hi=firstName=>firstName;//1 parametre varsa parantez icine almamiza gerek yok

let adSoyad=(firstName,lastName)=>{
    return `${firstName}  ${lastName}`;
}

let nameLastName=(firstName,lastName)=>`${firstName}  ${lastName}`;

let hello2=(firstName,lastName)=>  
//let info=`Merhaba ${firstName} ${lastName`;//Bunu da yazacaksak mutlaka suslu parantez olmali birden fazla islem var cunku...
console.log(`${firstName} ${lastName}`);
//return `${firstName} ${lastName}`;


let hello3=(firstName,lastName)=>{  
let info=`Merhaba ${firstName} ${lastName}`;
console.log(`${firstName} ${lastName}`);
return info;
}

console.log("Dom etkinlikleri ile calismak!");


let greeting=document.querySelector("#greeting");
//Bu bir dinleme islemidir, biz burda greeting degiskenine atadigimiz htmlelementini dinlemeye aldik ve onun uzerinde artik eventlerimizle onu dinleyerek ona yaptirmak istedigimiz degisiklikleri yapabiliriz cunku onu dinliyoruz bir nevi onu dinleyerek ona artik komut verecek duruma geliyoruz ve evet artik ona ne  yapmak istedigimizi soyleyebiliriz.. 
greeting.addEventListener("click",domClick);

function domClick(){
    console.log("Tiklandi!")
    console.log(this);//this burda bu fonksiyonu click eventi ile calistiran elementimiz olan greeting id li elementi verecektir...
    console.log(this.innerHTML);//alabilmemiz icin innerHTML yi dogru yazabilmemiz gerekiyor...
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
}


