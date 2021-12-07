//  <li class="list-group-item d-flex justify-content-between">
// Todo 1
// <a href = "#" class ="delete-item">
//     <i class = "fa fa-remove"></i>
// </a>
// </li> 

//Projeye baslarken!
//.Ne yapacagimiz adim adim detayli bir sekilde algoritmasini cikaralim, adim adim her adimi detayli bir sekilde tarif ederek cikarmaliyiz..ve ayni islemi tekrar ettgimiz yerler i de cek ederek kendimiz tekrar etmememye ozen gostermeliyiz..
//Intentional programmin yani yapacagimiz islemleri basliklandiralim yani genel hatlarini cizelim butunden parcaya gidelim yani genel olarak hangi fonksiyonlari yapacaksak merkezden disa dogru gidecek sekilde ana fonksiyon ne olacak o fonksiyonun icinde sira ile hangi fonksiyonlar calisacak....buna odaklan yani dogru yontemle cabala ki dogru yontemi ogren....Mumkun oldugu kadar isleri parcalara bol, isleri detaylandir ve her bir detayi abartmadan fonksiyon haline getir ki single responsibility isimlendirme cok dogru olmali ki yonetmen ve yeni gelecek degsikliklere projenijn ayak uydurmasi kolay olsun...
//Kafasina gore ortaliga kod yazip ortalikta birakmak diye birsey yok yazacagimiz tum kodlari anlasilir ve isimlendirme yi duzgun yaparak olusturacagimiz fojksiyonlar icerisine yazmaliyiz...

//1-Once elementlerimizi dom ile secerek isleme baslariz..
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");//todo ekleyecegimiz input burasi
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

//2-Daha sonra todo ekleyecegimiz icin formumuza submit ozelligi kazandirmaliyiz.Submit oldugunda todo muz todo list olarak eklenecektir yani submit butonuna tiklandiginda sumbit olmus olacak
//3-Inputtaki degerleri almak-submit eventi icinde
//4-Inputtaki degerleri alirken kullanicinin girebilecegi yanlis degerleri dusunerek ona kontrol yazmak yani bir nevi validation yazmak...Ornegin kullanici girmeden once bosluklar giriyorsa..Inputa veri girilirken eger kullanici input basi ve sonunda bosluklar birakti ise onlari silmek icin..trim fonks kullaniriz...
//5-submit eventi icinde girecegimiz todo larin ul icinde li olarak listelenebilmesi icin bir li elementi olustururuz ve her yapacagimiz islemleri  modullere bolmek yani fonksiyonlara bolmek her bir fonksiyona bir is yaptirmak, ve o fonksiyonlari yine baska bir fonksiyon icinde calistirarak okunabilir, SOLID Prensiplerine uygun ve surdurulebilir kod yazmak.Burda dmek istediigmiz bizim elemnt ekleme islmimiz icerisinde birden fazla process var o process lerin hepsini biz 1 fonks icinde yazariz ve o fonksiyonu form submit eventi icinde calistiraak dogrudan tek satirda fonks sayesinde islemimiz bitmis olur ve kod okunurlugu yonndende kodumuz iyilestirilmis olacaktir...
//Kisacasi li elementi icindekiler dahil olmak uzere bir fonksiyon yazip o fonksiyonda li elementini olusturruuz ve onu da addTodo eventi icinde calistiracagiz..
//6-TodoInput alanimizin ekleme isleminden sonra temizlenmesi...
//7-Buglarin kontrol edilmesi, yani input a veri girmeden ekle deddigimiz zaman da bos li elemntini bos olarak ekliyor ama biz bunu istmiyoruz..yani uygulamamizi yaparken belli bir zamanimizi uygulamayi cok farkli varsayonmlarla test ederek buglari bulmamiz ve kullanici gozuyle hicbirdetayi atlamadan test etmemiz buyuk bir zorunlluluktur...Kisacasi eger todoInputu kullanici bos birakirsa uyari ver alert uyarisi degilse todo yu ekle deriz..todo eklenirse de eklendi diye form un hemen altina kendi alertimizi yazma yani onu bootstrap den hazir alert ornegi alip onun aynisini dom ile olusturan showAlert(type,message) fonksiyonunu yazma...
//8.Ekledigimiz todo lari localStorage a ekleyen  fonksiyonu yazma....
//9.Sayfamizi yeniledigimiz de ekledigimiz todolarin kayboldugunu goruyoruz dememkki biz sayfa yuklendiginde bu ekldigmiz verileri localtorage dan todo listesi arasina getirilmesi islemini yapacagiz....DOMContentLoaded eventi ni kullanacagiz sayfa yuklendiginde tetiklenen bir eventtir
//10.Simdide todo larin silme islmeinijn yapilmasi silme iconu uzerine tiklaidigmiz zaman silinmesini saglamaliyiz...Event capturing in gucunu gorecegiz cunku biz li lerin icinde ki link a elementlerinin icindeki i etiketi yani iconlara tiklaninca silinme isleimini yapacagiz ki bunu gidip de ayri ayri yapma gibi birsey yapamayiz dinamik yapmak zorundayiz eklenen todo larda otomatik bu ozellikle gelmelidir ondan dolayi iste burda event capturing karsimiza cikiyor
//11. Arayuzden sildigimiz todo larimiz sayfayi yenileyince tekrardan geliyor sebebi biz localStorage dan silmedik simdi de arayuzden sildigimiz todolari localStorage dan da silmeliyiz...TAbi bunu da fonksiyon yazarak yapacagiz...
//12.Todolarimizi filtreleyelim...filtreleme input icerisine yazdigimiz text eger todo lar icinde varsa sadec o todo yu gosterecek...yani aradigimiz kelime yi bulursa onu sadece onun display ozelligi block olacak digerleri none olacak ve bu sekilde sadece arama kisminda buldugumuz todo gosterilmis olacak...Burda kucuk harf buyuk harf duyarliligi olmasin diye herseyi kucuk harfe cevirerek islem yapariz
//13.Son olarak tum tasklari temizleyin butonuna basinca tum tasklarimiz hem arayuzden hem de localStorage dan temizleyecegiz...
//MODULER OLARAK CALISMAK!!!
//Bir tane fonks yapacagiz moduler olarak calismak icin ve bizim tum eventllistener larimizi bu fonksiyonda tutacagiz...//Yani bir alanla ilgili tum fonksiyonlari toplayip o alanin genel ismini alan baska bir fonksiyonda tutacagiz....
//Bu fonksiyonun gorevi sadece eventlistenerlari atamak olacak!

eventListeners();
function eventListeners(){//Tum event listenerlar
   form.addEventListener("submit",addTodo); 
   document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
   secondCardBody.addEventListener("click",deleteTodo);
   filter.addEventListener("keyup",filterTodos);
   clearButton.addEventListener("click",clearAllTodos);
}


function addTodo(e){
  const newTodo=todoInput.value.trim();
  if(newTodo===""){
    showAlert("warning","Lutfen bir todo giriniz");
}  else{
    addTodoToUI(newTodo)
    addTodoToStorage(newTodo);
    showAlert("success","Basari ile eklendi!");
}
    e.preventDefault();  
}

//Alert Olusturma Fonksiyonu!!!
 //SURDURULEBILIR,TUM FARKLI VERSIYONLAR IICIN BU FONKSIYONU KULLANABILMEMIZ ICIN PARAMTREYE ALERT TIPINI ALMALIYIZ BUNU DA ALERTLERI CEK EDINCE FARKETMELIYIZ...
    //  <div class="alert alert-danger" role="alert">
    //This is a danger alert—check it out!
    //</div>
    //Bu hazir alert mesaj elementlerini form un bittigi yere olusturup, ama foksiyon icinde showAlert fonks icinde olusturup o alert i eger kullanici input i bos birakirsa onu girecegiz..
    //Bu arda showAlert de olustururken hemen dikkat edersek bootstrap deki alert mesajarina, orda bircok farkli turde alert mesaji var ve bu alert mesajlarinda sadece degisne class lardaki alert-danger,alert-success,alert-primary..Burda hemen aklimizda bir isik yanmasi lazm biz bu alert fonksiyonunu surdurulebilir ve istedigimiz her turlu, farkli alert mesajii vermek istersek alert tipine gore degisen kisim olan class taki, danger,success,warning,info bunlari demekki ben parametreden almam gerekiyor ki ben sadece 1 cesit alert mesaj turune bagimli kalmayayim,, o zaman parametreden aldigimiz parametre degerleri bizim fonksiyonumuza gelebilecek farkli versiyonlari da alabilmemizi sagliyor mus demekki ve mantik olarak bir fonksiyon olusturacagimiz zaman hep ona odaklanamalim biz disardan hangi veriyi almamiz bu fonksiyonu daha verimli, daha surdurulebilir yapacaktir....Bu arada bir de alert icerisinde yazan mesaj da yine dinamik olmalidir ve onu kullaniciya birakalim hangi mesaji vermek isterse onu yazsin dolaysi ile onu da biz parameterden alalim, statik yapmayalm her seyi dinamik ve surdurulebilir yapmaya odaklanmaliyiz....coook onemli.....
    //showAlert(type,message);//Intentional programming once niyet edip fonksiyou calistiriyoruz sonra fonksiyonun iceridgini yaziyoruz...

//List Item Olusturma fonksiyonu!
function addTodoToUI(newTodo){//Burda aldigi string degerini list item olarak UI a ekleyecektir...  
    const listItem=document.createElement("li");
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML=" <i class = 'fa fa-remove'></i>"
    listItem.className="list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo)); 
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value="";
}
//bu listenin aynisini olusturacagiz
//  <li class="list-group-item d-flex justify-content-between">
// Todo 1
// <a href = "#" class ="delete-item">
//     <i class = "fa fa-remove"></i>
// </a>
// </li> 

function showAlert(type,message){
const alert=document.createElement("div");
alert.className=`alert alert-${type}`;
alert.textContent=message;
//Alertimizi olusturduk ve kartimiza eklememiz gerekiyor ki biz kartimizi secmistik ve kartimizin en altina form dan hemen sonraya bir cocuk olarak eklememiz gerekecek!
firstCardBody.appendChild(alert);//Biz alertimizin 2 saniye durduktan sonra silinmesini istiyoruz bunu yapabilmek icinde setiTimeout icerisine remove.alert yazariz ama bunu 2 saniye sonra calistir deriz.
setTimeout(function(){
        alert.remove();
},1000)
}

 //  <div class="alert alert-danger" role="alert">
    //This is a danger alert—check it out!
    //</div>


//NOT JAVASCRIPT FONKSIYONEL BIR DILDIR DOLAYISI  ILE DE TAMAMEN FONKSIYON BAZLI DUSUNMELI VE MODULER CALISMA MANTIGNI BENIMSEMELIYIZ VE SINGLE RESPONSIBILITY SOLID PRENSIBINE GORE DE HER ISLEMI BIRER FONKSIYON HALINE GETIRMELIYIZ VE FONKSIYONLARI DA ADLANDIRMASI ONA GORE OLMADLIDIR KI BUU COK ONEMLI BIR KONUDUR....

    //Storage dan tum todolari alan fonksiyondur
    //Bu islemleri heryerde kullanacagimiz icin bunu da bir fonksiyon yapmis lduk.....
function getTodosFromStorage(){
     //Ilk basta eger localStorage imizda todos adli bir dizimiz varsa onu alacagiz yok ise onu localStorage da biz olusturacagiz ve bundan sonra gelen verileri de icine atacagiz... 
     let todos;
     if(localStorage.getItem("todos")===null){
         todos=[];
     }else {
         todos=JSON.parse(localStorage.getItem("todos"));
     }
     return todos;
}

 //ilk olarak todos adli dizi localStorage da var mi varsa todos verisini al, yoksa todos dizinin  localStorage a bos bir dizi olustur bu sekilde todos dizimizi elde etme islemi de ayri bir istir yani onu da ayri bir fonksiyon olarak dusunmeliyiz....
    function addTodoToStorage(newTodo){
      let todos=getTodosFromStorage();
      //Todosu aldik, simdi bu todos u bize gelen diziye ekleyip yani diziyi guncellyip sonra o diziyi stringe cevirdikten sonra tekrar localStorage a gondermeliuyiz...
      todos.push(newTodo);
      localStorage.setItem("todos",JSON.stringify(todos));
    }


    function deleteTodo(e){
        //Card body icinde nereye basildigini e.target ile anlayabiliriz ve ortak class lari uzerinden de onu if ile eger buraya basilirsa boyle yap diyebiliyoruz
        //Yani biz olayi dinamik yapiyoruz bir anda e.target biz nereye basarsak bize oraya verir bizde deriz ki haci sen atiyorum bu silme simgesine basilirsa git li yi komple sil, peki silme ikonuna basildgini da onlarin ortak class lari vardir ki  yoksa bile biz burda bile atayabiliriz onu ku kullanabilelim ve deriz ki su id li elemana basildiginda git bu islemi yap...
        if(e.target.className==="fa fa-remove"){
            console.log("Silme islemi...");
            //Burda bizim elimizde tiklaidigmiz icon elemnti var ve o element uzerinden silecegimiz elemana gitmeliyiz tutup da global de olan bir elementi getirip burda silmek degil...
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());
            showAlert("success","todo basari ile silindi!");
        }
    }

    function deleteTodoFromStorage(deletetodo){
        //Ben arayuzde hangi todo yu sildigimiz buraya bildirmem gerekiyor ve bu fonksiyonu biz gidip arayuzu sildigimiz fonksiyon icerisinde calistiracagiz...
        let todos=getTodosFromStorage();
         //todo muzu donderecegiz ve donerken ki todo muz dan parametreye gelen todo  ya esit olani silecegiz..Cunku biz localStorage dan bir dizi aliyoruz ve bize paramtreden o dizi icinde olan bir elemen geliyor dolayisi ile o elemani dizi icinde bulup onu sil diyecegiz burda..      
        todos.forEach(function(todo,index){
          console.log(todo === deletetodo);
            if (todo === deletetodo){
                todos.splice(index,1);//arrayden specific degerimizi sileriz...
            }
        })
        //localStorage dan aldigimiz todos umuzdasn todos u sildikten sonra simdi elimizde guncellenmis olan todos u localStorage a tekrar ekleyelim...
        localStorage.setItem("todos",JSON.stringify(todos));
    }

//filtreleme input icerisine yazdigimiz text eger todo lar icinde varsa sadec o todo yu gosterecek...yani aradigimiz kelime yi bulursa onu sadece onun display ozelligi block olacak digerleri none olacak ve bu sekilde sadece arama kisminda buldugumuz todo gosterilmis olacak...Burda kucuk harf buyuk harf duyarliligi olmasin diye herseyi kucuk harfe cevirerek islem yapariz
    function filterTodos(e){
        const filterValue=e.target.value.toLowerCase();
        //sayfadaki tum li leri cekelim
        const listItems=document.querySelectorAll(".list-group-item");
        //tek tek li lerin ustunde gezinip textlerine ulasalim
        listItems.forEach(function(listItem){
            const text=listItem.textContent.toLowerCase();
            //li text ini de aldik , kullanicin girdigi filterValue adindaki texti de aldik o zaman diyoruz ki eger kullanicin girdigi value listTextleri arasinda varsa goster yoksa gosterme diyelim
            //Indexof methodu ile biz arama islemini yapabiliriz...ya da search methodu ile de yapabiliriz...Indexof daha kullanisli gibi...Aranan veriyinin indexini verir bulamazsa da -1 veriri...
            if(text.indexOf(filterValue)=== -1){
                listItem.setAttribute("style","display:none !important");
            } else {
                listItem.setAttribute("style","display:block");
            }
        })
    }

    function clearAllTodos(){
        //Ilk basta todolari arayuzden temizleriz
        //Oncesinde soyle bir kontrol yapariz kullaniciya bir confirm kutusu getiririz kullaniciya terkrar sorariz cunku silme islmleri kritik islemlerdir
        if(confirm("Tumunu silmek istediginize emin misiniz?")){
            //Aslinda li lerin hepsinin kaldirabilirz
           // todoList.innerHTML="";//Bu yontem yavas bir yontem performans acisinda
           //Dikkat et sayilarda 0 a kadar olan sayilara bu islemi yap derken gelip sayaca ===0 ise kosulu nasil koyuyorsan ayni sey burda da gelip eger bu element null olursa yani artik kalmamissa oz zamna boyle yap...... diyoz
           while (todoList.firstElementChild !== null) {
            todoList.removeChild(todoList.firstElementChild);
           }
           console.log(todoList.firstElementChild);//Eleman bulamayinca null getirir
           //Birde localStorage den kaldiralim...
           localStorage.removeItem("todos");
        }
   }
    
    function loadAllTodosToUI(){
        let todos=getTodosFromStorage();
        todos.forEach(function(todo){
            addTodoToUI(todo);
        })
    }
    //Bu fonksiyon bizim todo larimiz localstorage dan almamizi saglayacak.Biz zaten getTodosFromStorage adinda bir fonksiyon yazmistik, todo larimiz localStorage dan almak icin ee o zamn direk o fonksiyonu bu fonksiyonumuzun icinde calistirmamiz yeterli olacakttir....VE burda bir kere daha sunu gordukki biz eger localStorage dan todos u alma kodumuzu eger fonksiyon haline getirmese idik gelip burda da yazacaktik tekrar iste bu ornek bize cok acik bir sekilde gostreiyor ki 1-Kesinlikle adim adim single responsibility prensibine uyarak her adimimzi dogru isimlendirme ve bir fonksiyon haline getirme ve her fonksiyon bir is yapacak ve o fonksiyonu baska yerlerde sadece cagiracagiz...Yine ayni sekilde her bir todo nun eklenme fonksiyonu olan addTodoToUI islemi ile de biz dondurdugmuz toDo lari addTodoUI a paramtre olarak vererek localStorage dan aldigimz todolari da li lerimizn arasina eklemis  oluyoruz..