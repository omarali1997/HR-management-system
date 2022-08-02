




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }






const Emp = {
EmpId:  1000,
Name: "Ghazi samer",
Dept: "Administration",
Level: "Senior",
salary: 100,

emp: function () {
    console.log("Employee name : " + this.Name)
    console.log("Employee salary : " + this.salary)
}
}

Emp.emp();
    
