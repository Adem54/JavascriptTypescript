import { ElasticLogger } from "../core/crossCuttingConcerns/logging/elasticLogger.js";
import Validation from "../core/crossCuttingConcerns/validation/validation.js";
import EmployeeService from "../services/employeeService.js";

let validation=new Validation();
let elasticLogger=new ElasticLogger();
let employeeService=new EmployeeService(validation,elasticLogger);
employeeService.getEmployeeList();

let employee4={id:8,
    firstName:"Burhan",
    lastName:"Karademir",
    city:"Narvik",
    age:"dofasdfasfd",
    salary:29000,
    }
console.log("---------------------------------")
    employeeService.addEmployee(employee4);
    employeeService.getEmployeeList();
    employeeService.getEmployeeById(8);
    console.log("---------------------------------")
    employeeService.getEmployeeSorted();
    console.log("error: ", validation.errors);