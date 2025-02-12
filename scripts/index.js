"use strict";


const [simpleInterestButton,checkPalindromeButton,inputStringValue,radiusInput,checkAreaButton]=["#simpleInterestCalculator","#checkPalindrome","#inputString","#checkArea","#areaOfCircle"].map(id=>document.querySelector(id));


simpleInterestButton.addEventListener("click", () => {
    let amount = prompt("Enter Amount:", "");
    let interestRate = prompt("Enter Interest Rate:", "");
    let noOfYears = prompt("Enter no of years:", "");
    amount=parseFloat(amount);
    interestRate=parseFloat(interestRate);
    noOfYears=parseFloat(noOfYears);
    if (isNaN(amount) || isNaN(interestRate) || isNaN(noOfYears)) {
        alert("Please fill valid inputs.");
    } else {
        const simpleInterest = (amount * interestRate * noOfYears) / 100;
        alert(`Simple Interest: ${simpleInterest}`);
    }
});


checkPalindromeButton.addEventListener("click",()=>{
    const inputData=inputStringValue.value;
    if(!inputData){
      alert("String can not be empty");
      return;
    }
    const revString=inputData.split("").reverse().join("");
    const result=inputData===revString;
    if (result)alert("The entered String is a palindrome");
    else alert("The entered string is not a palindrome");
})

checkAreaButton.addEventListener("click",()=>{
    let inputRadius=radiusInput.value;
    inputRadius=parseFloat(inputRadius);
    if(isNaN(inputRadius)){
        alert("Enter valid input");
        return;
    }
    const area=3.14*inputRadius*inputRadius;
    alert(`The area of circle is :${area}`);
})



const obj1={
    name:"Madhav Setia",
    age:22,
    emp_details:{
        emp_id:8197,
        organization:"To The New",
        location:"sec-144,Noida"
    }
}


const obj2=structuredClone(obj1);//do nested cloning

console.log(obj1);

obj2.emp_details.organization="TTN";

console.log(obj1);
console.log(obj2);


const emp=[{
    
    Name:"Madhav",
    Age:22,
    Salary:15000,
    DOB:"21-10-2002"
},
{
    Name:"Rishabh",
    Age:21,
    Salary:20000,
    DOB:"29-12-2003"
},
{
    Name:"Zubair",
    Age:28,
    Salary:25000,
    DOB:"01-10-1996"
},
{
    Name:"Rishav",
    Age:21,
    Salary:5000,
    DOB:"17-08-2003"
},
{
    Name:"Raman",
    Age:29,
    Salary:55000,
    DOB:"21-12-1995"
},
{
    Name:"Raz",
    Age:29,
    Salary:500,
    DOB:"21-12-1995"
},
]

/****
 filter all employees with salary greater than 5000
 */

const emp_salary_greater_5000=emp.filter(item=>item.Salary>5000);
const emp_salary_less_1000_age_greater_20=[];


emp.forEach((employee)=>{
    employee.Salary=parseFloat(employee.Salary);
    employee.Age=parseFloat(employee.Age);
    if(isNaN(employee.Salary) || isNaN(employee.Age)){
        return;
    }
    if(employee.Salary<1000 && employee.Age>20){
        emp_salary_less_1000_age_greater_20.push(employee);
        const temp_obj=Object.assign({},employee);
        temp_obj.Salary+=5*temp_obj.Salary;
        console.log("salary Increment",temp_obj);
    }
})

const group_employees_by_age=emp.reduce((group,employee)=>{
    const ageGroup=group[employee.Age] || [];
    ageGroup.push(employee);
    group[employee.Age]=ageGroup;
    return group;
},{})


console.log("emp_salary_greater_5000",emp_salary_greater_5000); 


console.log("emp_salary_less_1000_age_greater_20",emp_salary_less_1000_age_greater_20);

console.log("group_by_age",group_employees_by_age);
