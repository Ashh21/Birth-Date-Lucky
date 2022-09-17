const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#btn");
const displayMessage = document.querySelector("#msg");


function calculateSum(dob){
    let sum = 0;
    dob = dob.replaceAll("-", "")
    for (let i=0; i < dob.length; i++ ){
        sum = sum + Number(dob.charAt(i));
    } return sum; 

}

function isBirthDateLucky(sumOfDob, numberToCheck) {
     if (sumOfDob % numberToCheck === 0){
        return showMessage(` Yay! ${numberToCheck} is a lucky number `);
     } else {
        showMessage(` ${numberToCheck} is not a lucky number `)
     }
}

function showMessage(message){
    displayMessage.innerText = message;
}

checkButton.addEventListener("click", ()=> {
     const dob = dateOfBirth.value;
     const numberToCheck = luckyNumber.value;
     if ( dob && numberToCheck ){
        sumOfDob = calculateSum(dob);  
        isBirthDateLucky(sumOfDob, numberToCheck)
     }else{
        return showMessage("Both fields can not be empty.");
     }
     
})