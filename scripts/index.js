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