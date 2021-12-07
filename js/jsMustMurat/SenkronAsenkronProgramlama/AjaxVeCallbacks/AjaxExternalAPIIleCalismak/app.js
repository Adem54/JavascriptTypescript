//http://api.exchangeratesapi.io/v1/latest?access_key=6c3ce7fe9ec0b3749f86b95b3938a0c4

const changeBtn=document.querySelector("#change");
changeBtn.addEventListener("click",change);
const container=document.querySelector("div.container");
console.log(container);

function change(e ){
    const URL="http://api.exchangeratesapi.io/v1/latest?access_key=6c3ce7fe9ec0b3749f86b95b3938a0c4";
const euro=document.querySelector("#amount");
const tl=document.querySelector("#tl")
const xhr=new XMLHttpRequest();

    xhr.onload=function(){
        if(this.status===200){
           const listExchange=JSON.parse(xhr.responseText);
           console.log(listExchange);
           console.log(typeof listExchange);
           const euro1TL=listExchange.rates.TRY;
           console.log(euro1TL);
           //Veri girilmezse bunu kontrol et!
           if(euro.value==="" || euro.value.length === 0){
               const div=document.createElement("div");

               div.innerHTML=`
               <div class="alert alert-danger" role="alert">
               Lutfen euro miktari giriniz!
              </div>
               `
               container.appendChild(div);
               console.log(container);
               setTimeout(function(){
                   div.remove();
               },1000)
           }
           const enteredEuroAmount=euro.value;
           console.log("enteredEuroAmount tipi: ", typeof enteredEuroAmount);
           console.log(enteredEuroAmount);
           console.log("enteredEuroAmount*euro1TL:   ",typeof Number(enteredEuroAmount))
           tl.value=parseInt(enteredEuroAmount)*euro1TL; 
         }
         setTimeout(function(){
            euro.value="";
            tl.value="";
         },2000)    
    }
    xhr.open("GET",URL,true);//default olarak true dur zaten asenkron....
    xhr.send();
}


