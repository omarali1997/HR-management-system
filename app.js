

function salaryemp(max, min) {

  return Math.floor(Math.random() * (max - min)) + min;
}

var id = 999 ;
function uniqeId(){
  id++;
  return id;
}

const body = document.getElementsByTagName('body');

const allEmployee = [];

function Employee(empIdValue, nameValue, deptValue, levelValue, salaryValue, imageValue) {

  this.EmpId = empIdValue;
  this.Name = nameValue;
  this.Dept = deptValue;
  this.Level = levelValue;
  this.salary = salaryValue;
  this.image = imageValue;
  allEmployee.push(this);

}


Employee.prototype.render = function () {
  // document.write('<br>');
  // document.write(this.image);
  // document.write('<br>');
  // document.write(`Employee name : ${this.Name} - ID: ${this.EmpId}`);
  // document.write('<br>');
  // document.write(`Department : ${this.Dept} - Level:${this.Level}`);
  // document.write('<br>');
  // document.write(this.salary);
  // document.write('<br>');

  const divEl = document.getElementsByClassName("omarClass");
  console.log(divEl);


  const imgEl = document.createElement('img');
  imgEl.src=this.image;
  imgEl.alt=this.Name;
  body[0].appendChild(imgEl); 


  const NIEl = document.createElement('Emp0'); //name,Id element
  NIEl.textContent = `Employee name : ${this.Name} - ID: ${this.EmpId} "br" `;
  body[0].appendChild(NIEl);
  

  const DLEl = document.createElement('Emp1'); //Dept , Level element
  DLEl.textContent = `Department : ${this.Dept} - Level:${this.Level} "br" `;
  body[0].appendChild(DLEl);

  const SEl = document.createElement('Emp2'); //salary element
  SEl.textContent = `${this.salary} "br" `;
  body[0].appendChild(SEl);

  

  body[0].style.backgroundColor = "red";
};



const employee1 = new Employee(uniqeId(), "Ghazi samer", "Administration", "Senior", salaryemp(1500, 2000), "./img/Ghazi.jpg" );
const employee2 = new Employee(uniqeId(), "Lana Ali", "Finance", "Senior", salaryemp(1500, 2000) , "./img/Lana.jpg" );
const employee3 = new Employee(uniqeId(), "Tamara Ayoub", "Marketing", "Senior", salaryemp(1500, 2000) , "./img/Tamara.jpg" );
const employee4 = new Employee(uniqeId(), "Safi Walid", "Administration", "Mid-Senior", salaryemp(1000, 1500) , "./img/Safi.jpg" );
const employee5 = new Employee(uniqeId(), "Omar Zaid", "Development", "Senior", salaryemp(1500, 2000) , "./img/Omar.jpg") ;
const employee6 = new Employee(uniqeId(), "Rana Saleh", "Development", "Junior", salaryemp(500, 1000) , "./img/Rana.jpg" );
const employee7 = new Employee(uniqeId(), "Hadi Ahmad", "Finance", "Mid-Senior", salaryemp(1000, 1500) , "./img/Hadi.jpg" );


employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();
console.log(allEmployee);
