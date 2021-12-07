
//    function allowOnlyAlphabets(event) {
//     let charCode = event.code;

   
//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))   return true;
//  else   return false;
//          }

//   console.log(allowOnlyAlphabets());

  //In the above example, we’ve defined the keydown event on the input text box. So when the user enters any text in the textbox, it calls the allowOnlyAlphabets function. In the allowOnlyAlphabets function, we’ve validated the value of the keyCode property of the event object against the valid Unicode range for alphabets. Thus, if the user presses a valid alphabet character, the allowOnlyAlphabets function returns true, otherwise it would return false. The end result is that the user won’t be able to type any characters but the alphabet.



  //id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
console.log(keyboard);
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  