//liste icindeki en son elemani secelim
//aynen css de bir oge secer gibi secip querySelector icersine yaziyoruz.

//let lastLiElement=document.querySelector("#list>li:nth-last-child(1)");//sondan 1.elemani seciyoruz burda
//<li> ::marker "Asperious" </li>
let lastLiElement=document.querySelector("#list>li:last-child");//sondan 1.elemani seciyoruz burda
console.log(lastLiElement);
lastLiElement.innerText="LastliElement!"
//let lastLiElement=document.querySelector("ul#list");//sondan 1.elemani seciyoruz burda
/*{ <ul id="list">
<li>Lorem</li>
<li>Aliquan!</li>
<li>Asperious</li>
</ul> }*/

//let lastLiElement=document.querySelector("#list");//sondan 1.elemani seciyoruz burda
/*{ <ul id="list">
<li>Lorem</li>
<li>Aliquan!</li>
<li>Asperious</li>
</ul> }*/

//KISACASI ISIN OZETI BIZ QUERYSELECTOR ICINE GELIRIZ SANKI CSS DE BIR SECICI  YAZAR GIBI YAZIP ELEMENTE ERISEBILIRZ

let firstChild=document.querySelector("ul#list>li:first-child");
firstChild.innerHTML="<a>myLink!</a>";
//innerHtml ile de biz herhangi bir html elementi ekleyebiliriz
console.log(firstChild);

//LISTENIN ICINE BIR LIST DAHA EKLEYELIM!
let ulDom=document.querySelector("ul#list");//ul yi sectik
let liDom=document.createElement("li");
liDom.innerHTML="Kendi olusturdugumuz oge";
ulDom.appendChild(liDom); //Bu sekilde ul altina yeni bir elemnda ekleyebiluyoruz
//ulDom.insertBefore(liDom);
firstChild.insertBefore(liDom,firstChild.firstChild);
//eElement.insertBefore(newFirstElement, eElement.firstChild);