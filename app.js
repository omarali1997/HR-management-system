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

var divE=document.getElementsByTagName("span");

Employee.prototype.render = function (index) {
  // document.write('<br>');
  // document.write(this.image);
  // document.write('<br>');
  // document.write(`Employee name : ${this.Name} - ID: ${this.EmpId}`);
  // document.write('<br>');
  // document.write(`Department : ${this.Dept} - Level:${this.Level}`);
  // document.write('<br>');
  // document.write(this.salary);
  // document.write('<br>');

  // const divE = document.getElementsByClassName("divs");
  // console.log(divE);
  
  const imgEl = document.createElement('img');
  imgEl.src=this.image;
  imgEl.alt=this.Name;
  body[0].appendChild(imgEl); 
  // divE[index].textContent = this.image ;
  

  const NIEl = document.createElement("p"); //name,Id element
  NIEl.textContent = ` Name : ${this.Name} - ID: ${this.EmpId}   `;
  body[0].appendChild(NIEl);
  

  const DLEl = document.createElement("p"); //Dept , Level element
  DLEl.textContent = `Department : ${this.Dept} - Level:${this.Level} `;
  body[0].appendChild(DLEl);

  
  const SEl = document.createElement("p"); //salary element
  SEl.textContent = `${this.salary}  `;
  body[0].appendChild(SEl);

  

  // body[0].style.backgroundColor = "red";
};



const employee1 = new Employee(uniqeId(), "Ghazi samer" , "Administration", "Senior"    , salaryemp(), "./img/Ghazi.jpg"  );
const employee2 = new Employee(uniqeId(), "Lana Ali"    , "Finance"       , "Senior"    , salaryemp(), "./img/Lana.jpg"   );
const employee3 = new Employee(uniqeId(), "Tamara Ayoub", "Marketing"     , "Senior"    , salaryemp(), "./img/Tamara.jpg" );
const employee4 = new Employee(uniqeId(), "Safi Walid"  , "Administration", "Mid-Senior", salaryemp(), "./img/Safi.jpg"   );
const employee5 = new Employee(uniqeId(), "Omar Zaid"   , "Development"   , "Senior"    , salaryemp(), "./img/Omar.jpg"   );
const employee6 = new Employee(uniqeId(), "Rana Saleh"  , "Development"   , "Junior"    , salaryemp(), "./img/Rana.jpg"   );
const employee7 = new Employee(uniqeId(), "Hadi Ahmad"  , "Finance"       , "Mid-Senior", salaryemp(), "./img/Hadi.jpg"   );




employee1.render(1);
employee2.render(2);
employee3.render(3);
employee4.render(4);
employee5.render(5);
employee6.render(6);
employee7.render(7);
console.log(allEmployee);
