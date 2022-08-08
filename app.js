var net =0;
function salaryemp(x){
  if(x == "senior")
  {
    var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    var net = fullsalary - (fullsalary*0.075).toFixed(0);
    
    return net;
  }
  else if(x == "mid-senior")
  {
    var fullsalary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    var net = fullsalary - (fullsalary*0.075).toFixed(0);
    return net;
  }
  else(x == "junior")
  {
    var fullsalary = Math.floor(Math.random() * (1000 - 500)) + 500;
    var net = fullsalary - (fullsalary*0.075).toFixed(0);
    return net;
  }

}




var id = 999 ;
function uniqeId(){
  id++;
  return id;
}


const allEmployee = [];

function Employee(empIdValue, nameValue, deptValue, levelValue, salaryValue) {

  this.EmpId = empIdValue;
  this.Name = nameValue;
  this.Dept = deptValue;
  this.Level = levelValue;
  this.salary = salaryValue;
  allEmployee.push(this);

}


Employee.prototype.render = function () {
  document.write('<br>');

  document.write(`Employee name : ${this.Name}`);
  document.write('<br>');

  document.write(`Department : ${this.Dept}`);
  document.write('<br>');

  document.write("Employee salary :" + this.salary);
  document.write('<br>');

  document.write("Employee ID :" + this.EmpId);
  document.write('<br>');

};


const employee1 = new Employee(uniqeId(), "Ghazi samer", "Administration", "Senior", salaryemp());
const employee2 = new Employee(uniqeId(), "Lana Ali", "Finance", "Senior", salaryemp());
const employee3 = new Employee(uniqeId(), "Tamara Ayoub", "Marketing", "Senior", salaryemp());
const employee4 = new Employee(uniqeId(), "Safi Walid", "Administration", "Mid-Senior", salaryemp());
const employee5 = new Employee(uniqeId(), "Omar Zaid", "Development", "Senior", salaryemp());
const employee6 = new Employee(uniqeId(), "Rana Saleh", "Development", "Junior", salaryemp());
const employee7 = new Employee(uniqeId(), "Hadi Ahmad", "Finance", "Mid-Senior", salaryemp());



employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();

