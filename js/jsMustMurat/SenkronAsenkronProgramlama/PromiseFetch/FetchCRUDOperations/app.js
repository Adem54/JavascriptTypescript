
class Request {
    getAll(url){//Get Request
        //Biz fetch ile uzak api den getirdigimiz verileri degiskene atyabilmek icin promise yapimizi kullanalim
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        })
    }

    post(url,data){//Bu islemi fetch post islemlerinde bulabiliriz..jsonplaceholder das nasil kullanacagimiz bulunuyor
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              }).then(response=>response.json())
              .then(data=>resolve(data))//Bize gelen veri gonderdigimiz veri olacak...
              .catch(error=>reject(error))
        })
    }

    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) =>resolve(json))
                .catch(error=>reject(error))
        })
    }

    delete(url){
       return new Promise((resolve,reject)=>{
        fetch(url, {
            method: 'DELETE',
          })
          .then(response=>response.json())
          .then(response=>resolve("Veri silme islemi basari ile gerceklesti!"))//Silinmis olarak gelecegi icin bos bir obje gelir
          .catch(error=>reject(error));
       })   
    }
}

const request=new Request();
const url="https://jsonplaceholder.typicode.com/posts";
/*
let posts;
request.getAll(url)
.then(posts=>{
    console.log("posts: ", posts);
})
.catch(error=>console.log(error));
*/
//Burda veri eklerken id veritabanindan otomatik eklenecegi icin biz id yi eklemeyiz....

/*
const data={
    "userId": 121,
    "title": "my New Title!",
    "body": "Body"
  }
request.post(url,data)
.then(response=>console.log(response))//Bize gelen veri gonderdigmiz veri yeni id sini almis birsekilde olacak burada...
.catch(error=>console.error(error)); */


const dataUpdate={
    "userId": 121,
    "id":1,
    "title": "Updated Data",
    "body": "Body updated"
  }

  const urlUpdate="https://jsonplaceholder.typicode.com/posts/1";

  /*
  request.put(urlUpdate,dataUpdate)
  .then(response=>console.log(response))
  .catch(error=>console.log("Guncellemede bir hata olustu!"));
*/

//Delete
  request.delete(urlUpdate)
  .then(message=>console.log(message))//Sonuc  {} silinmis veri olarak gelecektir..
  .catch(error=>console.log(error))