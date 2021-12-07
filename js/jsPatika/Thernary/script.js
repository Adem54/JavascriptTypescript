//Template Literals...

let userName=prompt("Kullanici bilgisini yaziniz");

let info=document.querySelector("#info");
info.innerHTML=`${userName.length>0 ? userName: "Kullanici bilginiz bulunamadi!"} `;