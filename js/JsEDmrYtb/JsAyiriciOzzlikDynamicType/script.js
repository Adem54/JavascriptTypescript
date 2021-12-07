let customer={
    id:1,
    contactName:"Adem"
}
//Sonradan yeni bir property ye ihtiyacimiz olursa gelip yeni bir property olusturuyoruz bunu prototyping ile yapmis oluyoruz....constructor icinde this.country yapmak ile ayni seydir....
customer.country="Norway";

customer.sayHello=function(){
    console.log("Hello"+ this.contactName)
}

console.log(customer)
customer.sayHello();

