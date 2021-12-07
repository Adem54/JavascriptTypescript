

//ISARET ETTIGIMIZ TEXTBOX ALANI ICINDE HERHANI BIR KLAVYE TUSUNA BASAR ISEK O ZAMAN BIZE HANGI KLAVYE TUSUNA BSTIGIMIZ, VEYA ICINE YAZDIGIIMIZ EN SON HARF, VE YA TEXTIN TAMAMI BUNLARI ALABILIRIZ..
let textBox = document.getElementById('message');
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);
    //key son bastigimiz tusu verir, eventcode de hangi tusa basti isek onun bilgisini veriyor...
    console.log(`value=${event.target.value},code=${event.code}`);
    //VALUE TUM TEXTI VERIR.EVENT.TARGET.VALUE
});
//If you type character z, you will see the following message:key=z,code=KeyZ


//COK ONEMLI BIR UYGULAMA!!! d tusuna basarsak arka plan kirmizi renk beyaz, l tusuna basarsak normal..default
//Let’s look at a short example where we listen for the “d” and “l” keys to be pressed. Pressing these keys will change the website from dark/light mode:
document.addEventListener('keydown', function (event) {
    if (event.key === 'd') {
      document.body.style = "color: white; background-color: tomato";
    }
    if (event.key === 'l') {
      document.body.style = '';
    }
  });



  //There is an added utility for listening for modifier keys. They’re useful for invoking combo keystrokes (like Ctrl + s to “save”).

//Luckily, you can do it pretty easily with event.ctrlKey!

//Ctrl-d ye basarsan o zaman arka plan rengini siyah yazi rengini beyaz yapacak!!!!!yok Ctrl-l yaparsan  o zamanda default yapacak
document.addEventListener('keydown', function (event) {
    // CTRL + S combo
    if (event.ctrlKey && event.key === 'd') {
      document.body.style = "color: white; background-color: #111111";
    }
    // CTRL + L combo 
    if (event.ctrlKey && event.key === 'l') {
      document.body.style = '';
    }
  });


  //For those that are on Windows/Linux OS, you might have encountered a small problem… Pressing Ctrl + d prompted you to bookmark the URL! This is happening because your browser triggers your own custom keyboard events AND with the browser’s default events.
  //This can be easily fixed using event.preventDefault:
  //eventPreventDefault sayesinde klavyenin kendine ait bir eventi var biz ctrl-d ye basinca birseyler getiriyor url ile ilgili bize bir print yapiyor bir pencere geetiriyor default olarak bizim islemimizi yapmanin yaninda iste bunu iptal ediyoruz preventdefault ile....

  
  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    // CTRL + S combo
    if (event.ctrlKey && event.key === 'd') {
      document.body.style = "color: white; background-color: #111111";
    }
    // CTRL + L combo 
    if (event.ctrlKey && event.key === 'l') {
      document.body.style = '';
    }
  });


  document.addEventListener('keydown', (event) => {
    var keyValue = event.key;//Hangi tusa basarsan onu verecek-ornek : s
    var codeValue = event.code;//Buda bastgin tusun kodunu verir : KeyS
   
    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
  }, false);


  //Next, we checked the keyCode value of the character which was pressed, if it’s either 65 or 97, it means that either a or A was pressed along with the Ctrl key. The keyCode property of the KeyboardEvent object returns the Unicode character code of the key which was pressed. Similarly, you can also use the shiftKey property of the KeyboardEvent object, which tells you whether the Shift key was pressed when the key down event was triggered.
  //Burda da klavye karakterlerine, harflerine  karsilik gelen sayilari yazarsak ki bunlar key.Code ile bulabiliri.... 

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
       if (event.keyCode == 77 || event.keyCode == 97) {
           console.log("You have just pressed Ctrl + a/A!");
       }
    }
  }, false);



//   function allowOnlyAlphabets(event) {
//     var charCode = event.keyCode;
   
//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
//   return true;
//  else
//   return false;
      
//   }

//   console.log(allowOnlyAlphabets());

  //In the above example, we’ve defined the keydown event on the input text box. So when the user enters any text in the textbox, it calls the allowOnlyAlphabets function. In the allowOnlyAlphabets function, we’ve validated the value of the keyCode property of the event object against the valid Unicode range for alphabets. Thus, if the user presses a valid alphabet character, the allowOnlyAlphabets function returns true, otherwise it would return false. The end result is that the user won’t be able to type any characters but the alphabet.



  //id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  