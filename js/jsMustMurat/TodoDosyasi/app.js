//console.log(document.scripts);//4 tane script elementi 

//Elementi id ye gore secme
//let element;
//element=document.getElementById("todo-form");
//element=document.getElementById("tasks-title");
//Class ismine gore element secme-Class lardan birden fazla olacagi icin html collection olarak gelecektir
//element=document.getElementsByClassName("list-group-item");//

//Element tag a gore element secmek
//Tum li leri alabiliriz....
//element=document.getElementsByTagName("li");
//querySelector ile dogrudan css selektorunde ne kullaniyorsak aynisini kullaniriz..
//querySelector un bir ozelligi var o da tek bir ozellik secmektir ondan dolayi biz eger querySelector ile class secersek o class i kullanan kac tane element varsa onlardan ilk buldugunu sececektir....

//element=document.querySelector("#todo-form");

//element=document.querySelector(".list-group-item");//Sayfada 4 tane li var onlardan ilk li yani 1.li mizi gelmis oldu...

//element=document.querySelector("li");//li lerden ilk li yi getirecektir

//querySelectorAll ile birden fazla element secebiliriz...
//element=document.querySelectorAll("li");
//Bize NodeList(4) seklinde bir liste dondur.Bu NodeList htmlCollection a benziyor arraylara benziyor ama arraylara daha cok benziyor ve NodeList uzerinde biz foreach ile gezinebiliriz ama htmlCollections ile direk foreach ile gezinemiyorduk ama for ile gezinebiliyorduk...
//console.log(element);


//class i btn btn-dark olan bir class imiz var
//let element=document.querySelector("#clear-todos");
//Element ozellikleri
//Elementimizin attribute lerine erisme..
//id ye erisme
//console.log(element.id);
//class lara erisme
//console.log(element.className);
//console.log(element.classList);
//console.log(element.classList[1]);
//textContent ozelligi sadece  yazilari alacaktir bu element icinde var olan baska elmentleri degil sadece yazilari aliyor...
//element.setAttribute("class","mynewClass");
//console.log(element.getAttribute("class"));
//console.log(element.classList);
//element.setAttribute(attributename, attributevalue)
//console.log(element.textContent);
//Ama bizim elementmizi icerisinde baska html elementleri de varsa onlara innerHtml ozelligi ile bakabiliriz.,.
//console.log(element.innerHTML);
//innerHTML ile textContent Farki!
//Not:Biz eger bir elemetnimizin icine yazi yazmak istersek bunu hem innerHTML, hem de textContext ile yapabiliriz ancak eger biz bir elementimiz icerisine  baska bir html elementi eklemek istersem o zaman onu innerHTML de tirnak isaretleri arasina direk o html elemntini html sayfasinda yazdigimiz sekli ile y azarak ekleyebilriz... ya da create element deyip sifirdasn element olusturup o elementi baska bir elementin cocugu olark ekleyebiliriz...
//console.log(element.href);

//console.log(element.style);//elemeentmimizin tum css ozellikleri style objesi icerisinde bulunmaktadir...

//Style ve element ozelliklerin degtistirme...
//element.className="btn btn-primary";//Bir anda butonumuz baska bir buton olacaktir
//element.style.color="red";
//element.style.padding="15px";
//element.style.marginLeft="20px";
//innerHTML icine biz html elemnti yazabiliyoruz....ama textContent icine sadece yazi yazabiliiriz...
//element.textContent="Silin";
//element.innerHTML="<span style='color:blue'>SilinGitsin!</span>"

//element=document.querySelectorAll(".list-group-item");
//console.log(element);

//element.forEach(item=>
    //{
    //item.style.color="red"//her bir li ye renk olarak
    //item.style.backgroundColor="cyan";
   //sadece ilk ve son li elementine uygulansin demek istersek....
   
//}
 //   );

    //element=document.querySelectorAll(".list-group-item");
    //element=document.querySelectorAll(".//list-group-item:first-child");
    //element=document.querySelectorAll(".//list-group-item:last-child");
    //element=document.querySelectorAll("li:nth-child(2)");
    //element=document.querySelectorAll("li:nth-child(3)");
    //element=document.querySelectorAll("li:nth-child(odd)");//tek cocuklari secer...
    //element=document.querySelectorAll("li:nth-child(even)")//;//cift cocuklari sececektir...

   
   // console.log(element);

//DOM ELEMENTLERI UZERINDE GEZINME!!
    //Biz bir elemente ulastiktan sonra dom lar uzerinde  cok kolay bir sekilde gezinebilirz sectigimiz elemnet uzreinden onun sibling lerine gidebiliriz, parentelerina gidebiliriz child larina gidebiliriz..ve parentinin da ayni sekilde parantina, siblinglerine , nextsiblinglerine,child larina ulasarak DOM uzerindeki tum elementlere erisebiliriz ve istdidgimz aksiyonlari olusturabiliriz...
//console.log(element.firstChild);
//let liDom=document.querySelectorAll("li");
//let firstLi=liDom[0];
//console.log(firstLi);
//console.log(firstLi.nextSibling)
//console.log(firstLi.parentNode);
//console.log(liDom[2].previousElementSibling);
//let value;
//1-ul elemntimizi secelim
//const todoList=document.querySelector(".list-group");
//console.log(todoList);
//ul nin altindaki 2.cocugu almak istiyorum
//1.yontem
//console.log(todoList.children[1]);
//2.yontem.class i list-group-item i ve 2.cocugunu direk css selectorlarinde yaptgimiz gibi secebiliriz...
//const todo=document.querySelector(".//list-group-item:nth-child(2)");
//console.log(todo);
//const cardrow=document.querySelector(".card.row")
//3.yontem
//console.log(todoList.firstElementChild.nextElementSibling);
//Simdi bunlar uzerinden dom lar uzerinde gezinelim

//console.log(cardrow)

//childNodes
//value=todoList.childNodes;
//9 tane gozukuyor ve li elementlerinin disinda text ler de gozukuyor biz bu text lerin ne olduklarini gormek icinde inceleyebiliriz ancak childNodes da eger iki tane li ard arda ayni satirda yazilmamis da biri ust satir digeri alt satirda ise onu da bir node sayiyor biz li leri birbirine yapisik olarak kullanarak onlari kaldirabiliriz veya deisikligi inceleyebiliriz...Orngin ul nin ilk cocugu olan li ile ul etiketi nin farkli satirlarda olmasindan dolayi aralariinda da bir text node olarak kabul ediyor ve text datasina bakinca da dogal olarak bos cikiyor...Eger biz bu satiratlamalarini saymaasini istemezsek o zaman children ozellgini kullaniriz...
//value=todoList.children;
//value=todoList.children[0];
//value=todoList.children[todoList.children.length-1];

//cardrow un 3.cocugunun icindeki divin 2.cocugu olan h5 in icerigini degistirelim
//value=cardrow.children[2].children[1].textContent="Burasida degisti!";
//Ilk cocuk ve soncocuga erismek icin firstElementChild i da kullanabiliriz
//value=todoList.firstElementChild;
//value=todoList.lastElementChild;
//firstChild da ayni node gibi bosluk ve tekstleri de sayiyor ondan dolayi birbirine karistirmayalim firstElementchild i kullanalim...
//value=todoList.children.length;
//value=todoList.childElementCount;

//Ebeveyni sec
//value=cardrow.parentElement;
//value=cardrow.parentElement.parentElement;//ebeveyninin ebeveyni

//Cocuklari sec
//value=todoList.firstElementChild.lastElementChild.//firstElementChild;

//Element kardesleri sec
//kendinen bir onceki veya bir sonraki kardesini secer
//value=todo.previousElementSibling;
//value=todo.nextElementSibling.nextSibling;
//console.log(value); 

//console.log(todoList.firstChild);
//console.log(todoList.firstElementChild);
//console.log(todoList.firstElementChild.nextSibling);
//nextSibling ayni agac duzeyinde belirtilen dugumun hemenaltindaki dugumu gosterir,metin dugumunu veya yorum dugumunu dondururr ana nextElementSibling ise direk sonraki ardes dugumunu bir oge dugumu olarak  donderir.
//console.log(todoList.firstElementChild.nextElementSibling);
//
//console.log(todoList.childNodes.length)
//childNodes ise ul elementi altindaki her bir li elementinin icerisinde bulunan yorumlar,bosluklar birer metin dugumu olarak kabul edilir
//console.log(todoList.children.length);//ul elemntinin bir altinda olan li elementlerini seciyor ondan dolayi 4 tane gelir

//Dom ile bir html elemeni eklerken kullanabileceklerimiz
//1. element.innerHTML="<li>  </li>" dogrudan innherHTML yontemi ile eklemeek
//2.document.createElement("li"); olustur sonra neyin altina ekleyeceksen ya insertBefore kullan ya da o altina eklyecegin html elemeni obje degiskenine appendChild yapariz...
//Ya da direk insertBefore i kullanabiliriz...

//let cardBodies=document.querySelectorAll(".card-body");
//let cartBody=cardBodies[1];
//let clearButton=cardBodies[1].lastElementChild;
//console.log(clearButton);
//let newElement=document.createElement("a");
//newElement.textContent="Yeni Eklendi!";
//console.log(newElement);
//console.log(clearButton.parentNode)

//Bir html elementinden hemen sonrasina html elementi eklemek!
//clearButton.parentNode.insertBefore(newElement,clearButton.nextSibling);
//insertBefore ile mevcut bir ogeyi tasimak icin de kullaniriz ayrica, bu dugum de biz parent ile kullaniriz ve o parante in altindaki cocuklar arasinda nasil  yerlestiririz onu belirlemek icin kullaniriz
//node.inserBefore(yeni,hedef);hedef te nereye eklemek istersek direk onu belirtiriz..
//Istedigimiz bir elemtnin onune eklemek icin ise bu kodu calistiririz..
//clearButton.parentNode.insertBefore(newElement,clearButton);
//let newElement2=document.createElement("a");
//newElement2.textContent="newElement2";
//Bu sekilde de biz yine bir html elementimizin bir sonrasina element ekleyebiliriz...
//clearButton.parentNode.appendChild(newElement2);
//clearButton.insertBefore(newElement2,clearButton);

//  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   

//newElement2=document.createElement("a");
//newElement2.textContent="newElement2";
//newElement2.setAttribute("id","newEl2Id");
//Ya da 
//newElement2.id="newEl2Id";
//newElement2.setAttribute("class","btn btn-dark");
//Ya da 
//newElement2.className="btn btn-danger";

//newElement2.setAttribute("href","#");
//newElement2.setAttribute("style","color:white;")
//console.log(newElement2);

//textContext in dikkat edilmesi gereken davranisi!
//Biz eger icerisinde elementler olan yani child elementleri olan bir elemnte textContext ile text atamaya kalkarsak o zaman o elementin icindeki cocuklarini child elementlerin hepsini siler ve onlarin yerine sadece bizim yazdigimiz texti getirir.Ama biz mesela icerisinde bircok child elementi olan bir elementimizin en son child indan sonra ki kisma bir text eklemek istersek bunu Text Node ile ekleyebiliriz...
//Text Node bu normal bir text ama ayni html elementi gibi sayfanin basina, ortasina sonuna ekleyebiliriz...
//Biz bir element icine eger text eklemek istersek onu mumkun mertebe TextNode ile ekleyelim

//const text=document.createTextNode("Naber");
//En son cocuktan sonra en son
//cartBody.appendChild(text);//cartBody cocuklarinin en sonuna gelip text i ekleyecektir...
//newElement2.appendChild(document.createTextNode("Farkli sayfaya git!"));

//cartBody.appendChild(newElement2);

//Elementlerimizi Dinamik Olarak Silmek-Remove(),RemoveChild
//const todoList=document.querySelector("ul.list-group");
//const todos=document.querySelectorAll("li.list-group-item");
//Remove methodu ile bir element silmek! todos  un 2.elemanini silmek
//todos[1].remove();
//Bir elemanin child larini silmek
//todoList.removeChild(todoList.lastElementChild);//Bu sekilde de en son elemnini sileriz..
//todoList.removeChild(todos[2]); burda parantez icine silmek istedigimiz elemenin degiskene atanmis halini de yazabiliriz...
// console.log(todoList);
// console.log(todos);
// todos[1].remove

//ELEMENT DEGISTIRMEK!Replace
//card-body class li kendisi sonuncu cocuk olan elementin icindeki h5 elementini degistirmek
//const cardbody=document.querySelectorAll(".card-body")[1];
//console.log(cardbody);
//h5 yerine biz yeni bir h3 elementi ekleyecegiz
//Once  yeni elementimizi olusturalim
//<h5 class="card-title" id = "tasks-title">Todolar</h5>
//let newElement=document.createElement("h3");
//newElement.id="tasks-titleh3";
//newElement.clasName="card-title";
//newElement.textContent="Todolor";
//Simdi artik yeni olusturdgumuz elemnt ile h5 elementini replace yapabiliriz...
//h5 i miz i de aldik
//const oldElement=cardbody.children[1];
//console.log(oldElement);
//cardbody.replaceChild(newElement,oldElement);

//const todoInput=document.getElementById("todo");
//let element;
//element=todoInput;
//element=todoInput.classList;
//Sectigimiz elementte mevcut 1 tane form-control adinda bir class var ve biz buna ekl olarak yeni class eklmek istiyoruz o zaman burda 2 sekilde yapabiliriiz...
//todoInput.className="form-control newClass2";//Mevcut class i tekrardan yazariz cunku bu sekilde ekleyince eskisini siler ve buraya yazdiigmiz class lari yazar
//Ya da classList.add ile ekleriz...ve bu sekilde ekleidigmiz zaman bu mevcut class lara dokunmaz ve bizm eklediklerimizi ek lolarak ekler...
//todoInput.classList.add("newClass");

//Ya da class list i kaldirmak istersek de 
// todoInput.classList.remove("form-control");
// element=todoInput;
// console.log(element);

// todoInput.removeAttribute("clas","form-control");
// console.log(todoInput.hasAttribute("class"));
// console.log(todoInput.hasAttribute("name"));
// console.log(todoInput.hasAttribute("required"));

// const filterInput=document.querySelector("#filter");
// console.log(filterInput);

// filterInput.onfocus=function(){
//     console.log("Naber!");
// }

//Event Objesi coook onemlidir.Bu eventle alakali tum bilgilere bu event objesi uzerinden erisiyoruz....
// filterInput.addEventListener("focus", function(e){
//     console.log(e);
//     console.log(e.type);//tipi focus
     //event.target cok sk kullanacagimiz ve cok isimize yarayacak bir elementtir...Cok kullanacagiz..
//     console.log(e.target);//Eventin nerde oldud-filterInput
     //e.target uzerinden focus uygulanan elementmize ait tum attribute lere erisebiliyoruz...
     //Bir input alanindan degeri e.target.value sayesijnde alabiliriz..Bu coook kulandigimiz bir ozelliktir...
//     console.log(e.target.className);
//     console.log(e.target.placeholder);
//     console.log(e.target.value);//Bu da yine cok sk kullandigimiz ozelliklerdendir
// })


// const todoForm=document.getElementById("todo-form");
// console.log(todoForm);
// todoForm.addEventListener("submit", submitForm);
// function submitForm(e){ 
//     console.log("Submit Eventi!");
//     e.preventDefault();//Bu kodu en alta yazmamiz her zaman daha saglikli olacacaktir...
     //Submit imizin default olaylarini yok saymis oluyoruz...Ornegin ne gibi sayfamiz yenilenmeyecek artik...Sayfamiz baska bir sayfaya yonlendirilmiyor artk...
// }


//Keypress
//Keypress bizim klavyede herhangi bir tusa bastigimizda calisan bir eventtir ama burda sadece harfler ve sayilar kabul ediliyor diger tuslara bastigimizda herhangi bir event olusturmuyorlar...
// document.addEventListener("keypress",run);
// function run(e){
//     console.log("Naber!");
//     console.log(e.which);//Hangi tusa bastigimizi gormek icin e.which ozellgini kullanirz, bu bize bizim bastigimiz karakterin aski tablosundaki degerini verecektir.Aski tablosu 0 dan 255 e kadar 255 dahil karakterlerimizin sayislal degerlerini gosteren bir tablodur
    //a:97 b:98 bunlari gormek icin Asci table yazarak google da bulabilriiz..
    //Bastigimiz tusu normal karakter olarak gormek icin ise
//     console.log(e.key);
// }

//Keydown
//keydown tusu ile klavyemiz uzerindeki tum tuslara bastigimiz zaman event olusmasini saglariz...Bu eventin ozelligi tusa bstigimiz anda bu even tetiklenecktir
//document.addEventListener("keydown",run);
//function run(e){
  //  console.log(e.key);//hangi tusa bastigimizi bize verecektir
//}

//keyup
//Bir tusa bastiktan sonra o tusu biraktigimiz zaman olusan eventtir
// document.addEventListener("keyup",run);
// function run(e){
//     console.log(e.key);//hangi tusa biraktigimizi bize verecektir
// }

//Ornek yapalim

// const header=document.querySelector(".card-header");
// const todoInput=document.querySelector("#todo");
// todoInput.addEventListener("keyup",changeText);
// function changeText(e){
// console.log(e.key);
// console.log(e.target.value);//Input icindeki degerimizi aliriz..
// header.textContent=e.target.value;

//}
//Bir input alanindan degeri e.target.value sayesijnde alabiliriz..

// const cardBody=document.querySelectorAll(".card-body")[1];
// const title=document.querySelector("#tasks-title");
// console.log(cardBody);

//Click eventi
//Double click eventi-iki kez tiklaninca
//mouse-down biz tikladigimiz zaman ve tiklamayi surdurdugumuz zman tetiklenecektir..
//mouseup eventi tiklamadan elimizi cektigimiz zaman olusan eventimizdir..
//Mouse over eventimiz biz elemntin uzerine geldigimiz zmaan tetiklenir.Eger biz mouseover i bir tane html elementine uygularsak ve o elementin kapsadigi bir cok elementte varsa biz o elmentin kapsadigi elementler in her biri uzeriinde gezinirken mouseover elementi tetiklenecektir...Ayni mantik mouse out da da vardir
//
//mouse out-elementin uzerine gelip uzerinden cikarken gerceklesen eventimizdir...Verdigimz elementin altindaki her bir element icin mouseoout olusacaktir...
//title.addEventListener("mouseout",run);
//Mouse enter ve mouse leaver-mouse enter bircok elementi
//Input ve load eventi
//Focus eventi..Mouse imlecinin input alanina odaklanmasidir
//Mousumuzla input alanina girip mouse imlecimiz input alaninda yanip sonmeye basladignda tetiklenecektir....
//onblur eventi
//Odakdan ciktgimizda tetiklenecek olan eventtir
//Yapistirma eventi eventi-paste eventi.Sayfzmidaki inputa baska biryerden bir yaziyi alip kopyalarsak tetiklenecek olan eventtir..yapistirma islemini yaptigim anda paste eventi tetiklenecektir..Ctrl-past ile de tetiklenecektir...
//Copy eventi.Bir kopyalama yaptigmzda veya Ctrl-C ye basarsak da copy eventimiz olusmus olacak
//Cut eventi yani herhangi bir veriyi kesme islemiyaparsak cut evntidir ve olay tetiklenecektir
//select eventi belli belli bir alandaki yaziyi secme islemi yaptigimizda tetiklenecektir
// const filterInput=document.getElementById("filter");
// console.log(filterInput);
// filterInput.addEventListener("focus",run);
// filterInput.addEventListener("blur",run);
// filterInput.addEventListener("paste",run);

// function run(e){
//     console.log(e.type);
// }

//Event Bubling
//Icerden disari dogru eventin etki etmesidir yani biz child durumunda olan icerdeki bir etlementiimze bir event uygulandigi zaman once icerdeki calismaya baslar sonra sira ile disa dogru calisacakktir...
// document.querySelector(".container").addEventListener("click", function(){
//     console.log("Div container!");
// })

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row!");
//   })
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//   console.log("Card Body!");
// })
//EventBubbling
//Icerden disari dogru calisiyor..
//Ayni anda child-parent-grandpa ya da click eventi verilir ve her birisine event ile ayri islemler yaptirilmaya calisilirsa calisma sirasi defaultta icerden disari dogru olacaktir buna eventbubbling denir...

//COOK ONEMLI!!.....
//Event Capturing-Event Delegation
//Biz icerisinde bircok element barindiran bir elemnte event ataadigimiz zaman orn click eventi ve o elementin kapsadigi elementlerden herhangi birine basmam ile o event tetiklenecektir...
//Bu bizim ne isimize yarar?
//SURDURULEBILIR VE SOLID PRENSIPLERINE UYGUN....
//Ornegin bizim bircok to do listemiz var ve biz bu listeden istedigimize basinca tek islemle silmek istiyoruz onu nasil yapariz iste onu bu yontemle yapariz ve o listelerin her birinde carpi isaretlerinin bastigimiz zaman onlarin nerde oldugunu anlayabilirsek bu ozellik sayesinde biz dinamik olarak hem mevcut todo lari hem de yeni gelecek todo lari silebiliriz...VE biz ekstra is yapmaktan kurtuluyoruz her bir elemente ayri ayri event atamaktan kurtulmakla beraber surdurulebilirligi saglamis oluyoruz ki artik ne kadar to do list eklenirse eklensin ayni ozelligi otomatik uygulamis olacak!!!!!
//Harika bir ozellik biz bir eventi surdurulebilir, solid prensiplerine gore dry-dont repeat yourself e de uymamizi sagliyor.Biz parent e event uygularsak icerdeki cocuklardan her birine tiklayinca bu event calisacaktir ve biz hangi elemente tikladigimizi da event.target ozelligi ile bulabiliriz bu bize ne sagliyor iste bu bize o paretnin icerisinde her bastigimiz yerde o event calismasinda bizim istediigimiz alanlarda calistirabilmeyi sagliyor ve super bir yontem...
//Ve mesela biz bir listemiz var ve o listemizdeki listelerimizin uzerine gelince silmek istiyoruz o listelerimizin ortak class lari vardir genellikle li olmalidir mutlaka bu cok onemli ayni kodlari her birisine ayri ayri yazmamamk adina bu css de onemli idi ama javascrioptte de bunu biz ayni eventi hepsine ayri ayri yazmamak ve o classs i kullananlara ayni eventi bir kere yazarak kullanmak icin yapariz...Yani if class i buysa diyerek ortak class i olanlara ortak event islemleri uygulanmasini saglamis olacagiz...

// let cardBody=document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("click",run);
// function run(e){
//     if(e.target.className==="fa fa-remove"){
//         console.log("Silme islemi!")
//     }
//      if(e.target.id=== "filter"){
//          console.log("Filtreleme islemi!")
//      }
//      if(e.target.id==="clear-todos"){
//          console.log("Tum tasklari silme islmini yap!")
//      }
// }
//Bu yaptgimiz sekilde biz her bir li deki silme iconuna basinca silme islmi yazdiriyor, ve inputa girdigimiz zaman da filtreleme islemi yazdiriyor ve sekilde ayni grup ta olan elementlere tekrar tekrar

//ISTE EVENT.TARGET VE EVENT.CAPTURING IN GUCU...
//this sadece li elementine tikaldigim zaman elementinin her tarafinda tikladigim zaman calisiyor li elementinin icindeki link a elemnti ve icon i elemntini ayirt etmiyor hepsinde de li elementi olarak algiliyor ama dikkat e.target dedigimiz zaman iyice spesifiklestiriyoruz...ve biz hangi elementin ustunde isek ona ozel bir kosul ile if class i buysa id si buysa gibi bir kosul ile o elemente ozel degisiklikleri uygulayabiliyoruz....muthis yontem bunu kesfetmelisin...


//LocalStorage-Session Storage
//LocalStorage ve Session Storage da biz verilerimiz saklayabiliyoruz ancak bu iki lokal depolama alani arasinda soyle bir fark vardir ki:
//Local Storage daki verileirmiz biz istemedigimiz surecek silinmez biz oraya attigimiz verileri javascript ile veya direk elle silebiliriz ve o verileri istegidimiz gibi yonetebiliriz ancak Session Storage de ise:
//Bizim oturumumuz acik kaldigi surece o veriler session-storage da bulunur oturumu kapattigimiz zaman verilerimiz silinecektir.Uzerinde bulundguumuz sekmeyi kapatirsak veya calistigmiz browser penceresini kapatirsak session storage da tuttugumuz tum veriler silinecektir.
//Sayfamizi inspect yaptigiiz zaman menulerde Application menusuunden bu storage larimize gorebiliriz..Key value degeri ile calisacaktir...
//Ornegin biz vscode de kullandigimiz liveserver kurdugumuz ve calistirdigimiz zaman session storage de bir veri tutuyor kendisi ki bu veriyi o biz o sekmede, oturumu kullandigimiz surece kullaniyor


