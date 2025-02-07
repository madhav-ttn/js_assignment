"use strict";

console.log("Welcome to js");

const simpleInterestButton = document.getElementById("simpleInterestCalculator");
const checkPalindromeButton=document.getElementById("checkPalindrome");
const inputStringValue=document.getElementById("inputString");
const radiusInput=document.getElementById("checkArea");
const checkAreaButton=document.getElementById("areaOfCircle");

simpleInterestButton.addEventListener("click", () => {
    const amount = prompt("Enter Amount:", "");
    const interestRate = prompt("Enter Interest Rate:", "");
    const noOfYears = prompt("Enter no of years:", "");

    if (amount && interestRate && noOfYears) {
        const simpleInterest = (amount * interestRate * noOfYears) / 100;
        alert(`Simple Interest: ${simpleInterest}`);
    } else {
        alert("Please fill in all fields.");
    }
});


checkPalindromeButton.addEventListener("click",()=>{
    const inputData=inputStringValue.value;
    let i=0,j=inputData.length-1;
    let ans=true;
    while(i<j){
        if(inputData[i]!=inputData[j]){
            ans=false;
            break;
        }
        i++;
        j--;
    }    
    if (ans)alert("The entered String is a palindrome");
    else alert("The entered string is not a palindrome");
})

checkAreaButton.addEventListener("click",()=>{
    const inputRadius=radiusInput.value;
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

const obj2=Object.assign({},obj1);

obj2.age=23;

obj2.emp_details.location="delhi";

console.log(obj2);
console.log(obj1);

const obj3=structuredClone(obj1);//do nested cloning

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

const emp_salary_greater_5000=[];

const emp_salary_less_1000_age_greater_20=[];
for(let i=0;i<emp.length;i++){
    if(emp[i].Salary>5000){
        emp_salary_greater_5000.push(emp[i]);
    }
    else if(emp[i].Salary<1000 && emp[i].Age>20){
        emp[i].Salary=emp[i].Salary+emp[i].Salary*5;
        emp_salary_less_1000_age_greater_20.push(emp[i]);
    }
}

console.log(emp_salary_greater_5000); 

/*
{Name: 'Madhav', Age: 22, Salary: 15000, DOB: '21-10-2002'}
1
: 
{Name: 'Rishabh', Age: 21, Salary: 20000, DOB: '29-12-2003'}
2
: 
{Name: 'Zubair', Age: 28, Salary: 25000, DOB: '01-10-1996'}
3
: 
{Name: 'Raman', Age: 29, Salary: 55000, DOB: '21-12-1995'}
length:4
*/

console.log(emp_salary_less_1000_age_greater_20);



/***
0
: 
Age
: 
29
DOB
: 
"21-12-1995"
Name
: 
"Raz"
Salary
: 
3000
[[Prototype]]
: 
Object
length
: 
1
[[Prototype]]
: 
Array(0)


*/