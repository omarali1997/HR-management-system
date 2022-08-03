




var id = 999 ;
function salaryemp1(max , min) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let netSalary = (salaryemp1-(salaryemp1*0.075))

const Emp1 = {
EmpId:  function(){
  id++;
  return id;
},
Name: "Ghazi samer",
Dept: "Administration",
Level: "Senior",
salary: 0,


emp: function() {
    // console.log("Employee ID : " + Emp1.EmpId())
    console.log("Employee name : " + this.Name)
    console.log("Employee salary : " + salaryemp1(1500,2000))
}
}

Emp1.emp();

const Emp2 = {
  EmpId:  function(){
    id++;
    return id;
  },
  Name: "Lana Ali",
  Dept: "Finance",
  Level: "Senior",
  salary: 0,
  
  emp: function () {
    // console.log("Employee ID : " + Emp2.EmpId())
      console.log("Employee name : " + this.Name)
      console.log("Employee salary : " + salaryemp1(1500,2000))
  }
  }
  
  Emp2.emp();
    
const Emp3 = {
  EmpId:  function(){
    id++;
    return id;
  },
  Name: "Tamara Ayoub",
  Dept: "Marketing",
  Level: "Senior",
  salary: 0,
    
  emp: function () {
    // console.log("Employee ID : " + Emp3.EmpId())
      console.log("Employee name : " + this.Name)
      console.log("Employee salary : " + salaryemp1(1500,2000))
  }
  }
    
  Emp3.emp();

const Emp4 = {
  EmpId: function(){
    id++;
    return id;
  },
  Name: "Safi Walid	",
  Dept: "Administration",
  Level: "Mid-Senior",
  salary: 0,
    
  emp: function () {
    // console.log("Employee ID : " + Emp4.EmpId())
    console.log("Employee name : " + this.Name)
    console.log("Employee salary : " + salaryemp1(1000,1500))
  }
  }
    
  Emp4.emp();

    
const Emp5 = {
  EmpId:  function(){
    id++;
    return id;
  },
  Name: "Omar Zaid	",
  Dept: "Development",
  Level: "Senior",
  salary: 0,
    
  emp: function () {
    // console.log("Employee ID : " + Emp5.EmpId())
    console.log("Employee name : " + this.Name)
    console.log("Employee salary : " + salaryemp1(1500,2000))
  }
  }
    
  Emp5.emp();

const Emp6 = {
  EmpId:  function(){
    id++;
    return id;
  },
  Name: "Rana Saleh",
  Dept: "Development",
  Level: "Junior",
  salary: 0,
      
  emp: function () {
    // console.log("Employee ID : " + Emp6.EmpId())
    console.log("Employee name : " + this.Name)
    console.log("Employee salary : " + salaryemp1(500,1000))
  }
  }
      
  Emp6.emp();

  const Emp7 = {
    EmpId:  function(){
      id++;
      return id;
    },
    Name: "Hadi Ahmad",
    Dept: "Finance",
    Level: "Mid-Senior",
    salary: 0,
        
    emp: function () {
      // console.log("Employee ID : " + Emp7.EmpId())
      console.log("Employee name : " + this.Name)
      console.log("Employee salary : " + salaryemp1(1000,1500))
    }
    }
        
    Emp7.emp();