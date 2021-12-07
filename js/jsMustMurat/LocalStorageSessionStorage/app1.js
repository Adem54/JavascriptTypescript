
//Butonlari seciyoruz...
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//Inputlari secelim

const addkey=document.querySelector("#addkey");//Anahtar 
const addvalue=document.querySelector("#addvalue");//ve Deger
const deletekey=document.querySelector("#deletekey");//Anahtar

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    //addkey ve addvalue daki degeri alip session storage a ekleyecegiz
sessionStorage.setItem(addkey.value,addvalue.value)
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
    //sil butonuna bastigimizda sessionStorage.removeItem methodu icine sessionStorage daki key lerden birini  yazarak o key in silinmesini saglariz bu keyi buraya yazma isini de deletekey inputuniun valuesini alarak yapariz o valueye eger sessionStorage a yazdigimiz bir degeri girersek p deger sessionStorage dan silinecektir
}

function clearItems(e){
    //Tum verileri sessionStorage dan silmis oluyoruz yani...
    sessionStorage.clear();
}