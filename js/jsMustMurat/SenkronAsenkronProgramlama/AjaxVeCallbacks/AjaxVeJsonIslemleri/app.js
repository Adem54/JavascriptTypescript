document.querySelector("#ajax").addEventListener("click", getAllEmployees);

function getAllEmployees(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","employees.json",true);//true dedgimiz zaman bu islemin asenkron olamsini istiyuoruz demis oluyoruz...
    //Bu calistiginda sonucun geldigin biliyoruz yani readystatus 4 ama status durumu 200 olup olmadigini bilmiyourz..
     xhr.onload=function(){
         let employees=document.getElementById("employees");
         if(this.status===200){
            console.log(xhr.responseText);
            console.log(typeof xhr.responseText);//string
            let employeeLists=JSON.parse(xhr.responseText);
            console.log(employeeLists);
            console.log(typeof employeeLists);//object
            employeeLists.forEach(employee => {
                employees.innerHTML+=`
                <tr>
                            <td>${employee.name}</td>
                            <td>${employee.departmant}</td>
                            <td>${employee.salary}</td>
                          
                </tr> 
                `
            });

           
            
         }
     }
     xhr.send();
}