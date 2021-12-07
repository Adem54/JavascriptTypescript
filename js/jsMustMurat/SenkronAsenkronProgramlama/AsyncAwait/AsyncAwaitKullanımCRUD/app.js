
class Request{
  async  getUsers(url){
    const response=await fetch(url);//response objesi
    const data=await response.json();//Json objemiz..
    return data;
  }

  async post(url,data){
    let postObje = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    
    const response = await fetch(url, postObje);
    const dataUser = response.json();
    return dataUser;
  }

  //Sunu unutmayalim fetch den donen veri bize herzaamn response objesini dondurur ondan dolayi once biz response objesini aliriz sonra da bir sonraki satir da da await response.json() diyerek json seklindeki veri leri alirken kullandigmiz method ile veriyi aliriz...

  async put(url,data){
    const putObje={
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    const response = await fetch(url, putObje);
    const dataUpdate = await response.json();
    return dataUpdate;
	}

  async delete(url){
    const deleteObje={
      method: 'DELETE',
    }
    const response = await fetch(url, deleteObje );//Burda then ile donup onun icinde de mesaj verdirebilirdik...
		return "Veri slime işlemi başarılı";//Async sayesinde biz promise ile dondurmesek bile verimiz string gondermis olsak bile promise olarak donecektir...
		// Burada very silindiği için bze dönen boş bir obje olacağı için kendimiz yazdırdık.
  }
}
//Async await i fetch ile kullanmak!
const request=new Request();
const data={
  "userId": 10,
  "title": "Title Added!"
}

 request.getUsers("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res));
request.post("https://jsonplaceholder.typicode.com/users",data).then(res=>console.log(res));
const data2={
  "userId": 122,
  "id":1,
  "title": "Title Updated!"
}

request.put("https://jsonplaceholder.typicode.com/users/1",data2).then(res=>console.log(res));

request.delete("https://jsonplaceholder.typicode.com/users/1").then(res=>console.log(res));

