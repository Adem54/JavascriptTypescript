
class Request{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }


    get(url,callback){
        this.xhr.open("GET",url);

        this.xhr.onload=()=>{
            if(this.xhr.status===200){
               // console.log(this.xhr.responseText)
               callback("Islem basari ile gerceklesti ",this.xhr.responseText);
            }else {
                //console.log("Veriyi alamadik bir hata olustu!")
                callback("Veriyi alamadik bir hata olustu!",null);
            }
        }

        this.xhr.send();
    }
}
const request=new Request();
request.get("https://jsonplaceholder.typicode.com/userss",getUsers);
const getUsers=function(message,response){
    if (response!==null) {
        console.log(message);
        console.log(response);
    }else {
        console.log(message);
    }
}

