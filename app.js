
// var id = 999 ;

function salaryemp(max , min) {

  return Math.floor(Math.random() * (max - min) ) + min;
}

// function uniqeId(){
//   id++;
//   return id;
// }


const allEmployee = [];

function Employee(empIdValue,  nameValue,  deptValue,  levelValue,  salaryValue ) 
{

  this.EmpId = empIdValue;
  this.Name = nameValue;
  this.Dept = deptValue;
  this.Level = levelValue;
  this.salary = salaryValue;
  allEmployee.push(this);

  }


  Employee.prototype.render = function () {
    
      console.log( `Employee name : ${this.Name}`);
      console.log(`Department : ${this.Dept}`);
      console.log("Employee salary :" + this.salary);
      console.log("\n");

  };


const employee1 = new Employee(1000 , "Ghazi samer" , "Administration" , "Senior" , salaryemp(1500,2000) );
const employee2 = new Employee(1001 , "Lana Ali" , "Finance" , "Senior" , salaryemp(1500,2000) );
const employee3 = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , salaryemp(1500,2000) );
const employee4 = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , salaryemp(1000,1500) );
const employee5 = new Employee(1004 , "Omar Zaid" , "Development" , "Senior" , salaryemp(1500,2000) );
const employee6 = new Employee(1005 , "Rana Saleh" , "Development" , "Junior" , salaryemp(500,1000) );
const employee7 = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" , salaryemp(1000,1500) );



  employee1.render();
  employee2.render();
  employee3.render();
  employee4.render();
  employee5.render();
  employee6.render();
  employee7.render();

