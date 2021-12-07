//fetch Api ile calismak
//fetch api ile biz bir veri sunucudan geldikten sonra islem yapabiliyoruz...

const myUser=fetch("./setting.json").then(response=>response.json()
).then(responseJson=>{
    console.log(responseJson);
    console.log(responseJson.userName);
})


//Biz ilk yaptigimiz then den return edilen degere de bir than yaparak onu da yine bir arrow funct icerisinde islemden gecirebiliriz..
//https://jsonplaceholder.typicode.com/users

let userListDom=document.querySelector("#userList");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => json.forEach(element => {
           userListDom.innerHTML+=`<li>${element.username}</li>`
  }))


  let userListDom2=document.querySelector("#userList2");
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => json.forEach(element => {
       const liDom= document.createElement("li");
       liDom.innerHTML+=`<li>${element.username}</li>`
       userListDom2.appendChild(liDom);
           
  }))