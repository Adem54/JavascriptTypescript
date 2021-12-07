//Javascripte ozgu birseydir clouserlar iyi de bilmemiz gerekir


let firstName="Adem";

function showMyValue(name){
    return firstName;
}

console.log(showMyValue(45));//Adem gelir cunku parametredeki verilen name ile icerdeki return edilen firstName ayni olmadiigi icin demekki firstName degeri parametreden gelmeyecek o zaman ne yapar javascript scopu fonksiyon dissina cikarir ve fonksiyon disinda var mi firstName onu arar ve orda buldgu zaman onu deger olarak alacaktir

//

let counter=0;
function add(){
    counter+=1;
    alert(counter); 
    //return counter
}
//Biz counter i degiskenini disari cikardik ki sayilarimizi 1 er 1 er arttirabilelim diye ancak counter i biz disari cikarinca baska fonksiyonlar icinde eger parametresinden counter isminde deger gelmeyen ve fonks icinde counter kullanilan varsa onlar da bu sefer kendi icinde bulundugu fonksiyon scopunun disina cikip disarda ilk buldugu counter degerini aliyor iste burda isler karisiyor bizi aslinda ustte add fonks disina aldigimiz counteri sirf add fonks unun 1 er 1 er arttirmak icin yaptik ama gitti someOtherFunction da o counter i kullandi ne oldu isler karisti bizim planimiz alt ust oldu biz de o zaman counter add fonksiyonuna ait olsun ama add fonksiyonu icinde oolmasin istiyoruz o zaman ne yapacagiz....Baska javascript dosyalari da erisebilir counter imiza ve isle daha karmasik hale gelebilir ve hic anlamayiz ve bulana kadar cok ciddi zorlaniriz.,....

//HARIKA BIRSEY CLOUSERS COK IYI OGRENELIM......
//Clouser e vasitasi ile add fonksiyonunun icine atmadan counter i sadece add e ozel olan bir yapi olusturacagiz function clousere deniyor
//add i tanimlarken self invoking function olarak tanimliyoruz...ve onu da normal bir parantez icine aliyoruz ve bittikten sonra da caigiriyoruz biz uygulamayi derledigimiz zaman bu fonks kendi kendine calisiyor....ozel bir fonks ....Bu fonksiyon 1 kereligine calisiyor bir daha da biz cagirana kadar calismaz.Tanimladigimiz degiskenlerde 1 kereligine olusur bir daha olusmnaz.Ama burda cok ozel bir ozellik var biz tekrar bunu calistirmak istedgimiz zaman add() i tekrar cagiririz ama let counter degiskeni ilk add fonksiyonu calistigindas bir kere olusur bir daha olusmaz...ama return eder her seferinde....bu ozellik cok kritik!!!!!Dolayisi ile bize ne sagliyor bu vasita ile clousers vasitasi ile biz o zmaan counter i sadece Add fonksiyonumuza ozel yapiyoruz ama add fonksiyonumuzun disinda tutuyoruz ve add fonksiyonumnu her calistirdigmizda da tekrar tekrar counteri sifirlamayarak yani yeniden oilusturmayarak ama return yaparak bize cok ozel bir imkan sunuyor.....   harika...
let addClouser=(function(){
    let counter=0;//Bu self invoking funct old icin prgram calisinca bir kerelik olusturuyor bir daha bu degimez fonksiyon cagirilsa bile...Ve ayni sekilde artik bu counter a disardan erisilmesini de engellemis oluyoruz....AYNEN C# DAKI CONSTRUCTOR IN CALISMA MANTIGI GIBI
    return function(){
        alert(counter+=1);
        //return counter+=1;
    }
})();//Her calistiginda counter 1 artar yani return kismi calisir ama counter yeniden yeniden her seferiinde tanimlanmaz ve bize harika bir firsat sunuyor......



function someOtherFunction(){
    counter+=10;
    alert(counter);
}


