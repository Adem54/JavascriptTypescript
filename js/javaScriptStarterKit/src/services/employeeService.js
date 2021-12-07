import { employees } from "../data/employees.js";



export default class EmployeeService{
    constructor(validator,loggerService){
       this.employees=employees; 
       this.validator=validator;
       this.loggerService=loggerService;
    }

    getEmployeeList(){
        console.log(this.employees);
    }

    addEmployee(employee){
        this.validator.checkModelValidityForErrors(employee);
             this.employees.push(employee);
             this.loggerService.log(employee);
    }

    getEmployeeById(id){
       console.log(this.employees.find(c=>c.id===id));
    }

    
  getEmployeeSorted(){
   console.log (this.employees.sort((employee1,employee2)=>{
     let firstName="firstName";
        if(employee1[firstName]< employee2[firstName]){
          return -1;//kazanan i ver demek
        }else if(employee1.firstName === employee2.firstName){
          return 0;//degistirme
        }else {
          return 1;//kaybedeni ver demek
        }
    }));
  }
}