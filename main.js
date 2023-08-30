// DECLARE VARIABLES

let firstName = document.getElementById("firstName");
let firstError = document.getElementById("firstError");
let middleName = document.getElementById("middleName");
let middleError = document.getElementById("middleError");
let lastName = document.getElementById("lastName");
let lastError = document.getElementById("lastError");
let gender = document.getElementById("gender");
let genderError = document.getElementById("genderError");
let country = document.getElementById("country");
let nationalityError = document.getElementById("nationalityError");
let dob = document.getElementById("dob");
let ageDisplay = document.getElementById("ageDisplay");
let dobError = document.getElementById("dobError");
let phoneNumber = document.getElementById("phoneNumber");
let phoneError = document.getElementById("phoneError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let homeAddress = document.getElementById("homeAddress");
let addressError = document.getElementById("addressError");
let subject1 = document.getElementById("subject1");
let subject1Error = document.getElementById("subject1Error");
let subject2 = document.getElementById("subject2");
let subject2Error = document.getElementById("subject2Error");
let subject3 = document.getElementById("subject3");
let subject3Error = document.getElementById("subject3Error");
let subject4 = document.getElementById("subject4");
let subject4Error = document.getElementById("subject4Error");
let subject5 = document.getElementById("subject5");
let subject5Error = document.getElementById("subject5Error");
let subject6 = document.getElementById("subject6");
let subject6Error = document.getElementById("subject6Error");
let subject7 = document.getElementById("subject7");
let subject7Error = document.getElementById("subject7Error");
let subject8 = document.getElementById("subject8");
let subject8Error = document.getElementById("subject8Error");
let score1 = document.getElementById("score1");
let score1Error = document.getElementById("score1Error");
let score2 = document.getElementById("score2");
let score2Error = document.getElementById("score2Error");
let score3 = document.getElementById("score3");
let score3Error = document.getElementById("score3Error");
let score4 = document.getElementById("score4");
let score4Error = document.getElementById("score4Error");
let score5 = document.getElementById("score5");
let score5Error = document.getElementById("score5Error");
let score6 = document.getElementById("score6");
let score6Error = document.getElementById("score6Error");
let score7 = document.getElementById("score7");
let score7Error = document.getElementById("score7Error");
let score8 = document.getElementById("score8");
let score8Error = document.getElementById("score8Error");
let termsConditions = document.getElementById("termsConditions");
let termsError = document.getElementById("termsError");
let btn = document.getElementById("btn");

let agePoint = 0;
let countryPoint = 0;
let pointAward = 0;
let totalPoint = 0;

// // AGE CALCULATOR
// let todayDate = new Date();
// let currentYear = todayDate.getFullYear();

// let birthDay = new Date(dob.value);
// let birthYear = birthDay.getFullYear();

// let old = currentYear - birthYear;

// ageDisplay.textContent = "You are " + old + " years old"

// console.log(dob.value);

// EVENT LISTENER

btn.addEventListener("click", function (){

    validateData()
})

function validateData(){

    
    if (firstName.value == ""){
        firstError.textContent = "* First Name can't be left empty"
    }else {
        firstError.textContent = ""
    }
    
    if (lastName.value == ""){
        lastError.textContent = "* Last Name can't be left empty"
    }else {
        lastError.textContent = ""
    }
    
    if (gender.value == ""){
        genderError.textContent = "* Gender can't be left empty"
    }else {
        genderError.textContent = ""
    }
    if (country.value != ""){
        nationalityError.textContent = ""
    }else {
        nationalityError.textContent = "* Nationality is Required"
    }

    if (dob.value == ""){
        dobError.textContent = "* Date of Birth"
    }else {
        dobError.textContent = ""
    }

    if (phoneNumber.value == "") {
        phoneError.textContent = "* Phone number is required"
    }else{
        phoneError.textContent = ""
    }

    if (email.value == "") {
        emailError.textContent = "* Your Email is Required"
    }else{
        emailError.textContent = ""
    }

    if (homeAddress.value == "") {
        addressError.textContent = "* Home Address is Required"
    }else{
        addressError.textContent = ""
    }

    if (subject1.value == "") {
        subject1Error.textContent = "* Required"
    }else{
        subject1Error.textContent = ""
    }
    
    if (subject2.value == "") {
        subject2Error.textContent = "* Required"
    }else{
        subject2Error.textContent = ""
    }
    
    if (subject3.value == "") {
        subject3Error.textContent = "* Required"
    }else{
        subject3Error.textContent = ""
    }
    
    if (subject4.value == "") {
        subject4Error.textContent = "* Required"
    }else{
        subject4Error.textContent = ""
    }
    
    if (subject5.value == "") {
        subject5Error.textContent = "* Required"
    }else{
        subject5Error.textContent = ""
    }
    
    if (subject6.value == "") {
        subject6Error.textContent = "* Required"
    }else{
        subject6Error.textContent = ""
    }
    
    if (subject7.value == "") {
        subject7Error.textContent = "* Required"
    }else{
        subject7Error.textContent = ""
    }
    
    if (subject8.value == "") {
        subject8Error.textContent = "* Required"
    }else{
        subject8Error.textContent = ""
    }
    
    if (score1.value == "") {
        score1Error.textContent = "* Required"
    }else{
        score1Error.textContent = ""
    }
    
    if (score2.value == "") {
        score2Error.textContent = "* Required"
    }else{
        score2Error.textContent = ""
    }    

    if (score3.value == "") {
        score3Error.textContent = "* Required"
    }else{
        score3Error.textContent = ""
    }
    
    if (score4.value == "") {
        score4Error.textContent = "* Required"
    }else{
        score4Error.textContent = ""
    }    

    if (score5.value == "") {
        score5Error.textContent = "* Required"
    }else{
        score5Error.textContent = ""
    }
    
    if (score6.value == "") {
        score6Error.textContent = "* Required"
    }else{
        score6Error.textContent = ""
    }
    
    if (score7.value == "") {
        score7Error.textContent = "* Required"
    }else{
        score7Error.textContent = ""
    }
    
    if (score8.value == "") {
        score8Error.textContent = "* Required"
    }else{
        score8Error.textContent = ""
    }

    if (termsConditions.checked == "") {
        termsError.textContent = "* Kindly Check the box"
    }else{
        termsError.textContent = ""
    }
        
    if (firstName.value != "" && lastName.value != "" && gender.value != "" && country.value != "" && dob.value != "" && phoneNumber.value != "" && email.value != "" && homeAddress.value != "" && subject1.value != "" && subject2.value != "" &&  subject3.value != "" &&  subject4.value != "" &&  subject5.value != "" && subject6.value != "" && subject7.value != "" && subject8.value != "" && score1.value != "" &&  score2.value != "" &&  score3.value != "" &&  score4.value != "" && score5.value != "" && score6.value != "" && score7.value != "" && score8.value != "" && termsConditions.checked != ""){
        proceed()
    }
    
}


function proceed(){
    
    // AGE CALCULATOR

    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();

    let birthDay = new Date(dob.value);
    let birthYear = birthDay.getFullYear();

    let old = currentYear - birthYear;

    // ageDisplay.textContent = "You are " + old + " years old"

    console.log(old);

    if(old >= 18 && old <= 24){
        agePoint += 100        
    }else if(old >= 25 && old <= 30){
        agePoint += 80
    }else if(old >= 31 && old <= 35){
        agePoint += 50
    }else if(old >= 36 && old <= 40){
        agePoint += 30
    }else if(old >= 41){
        agePoint += 10
    }else{
        agePoint += 0
    }

    if(country.value === "africa"){
        countryPoint += 50
    }else if (country.value === "asia"){
        countryPoint += 40
    }else if(country.value == "southAmerica"){
        countryPoint += 30
    }else if (country.value == "northAmerica"){
        countryPoint += 20
    }else if(country.value == "restOfTheWorld"){
        countryPoint += 10
    }else{
        countryPoint += 0
    }

    let grade1 = Number(score1.value)
    let grade2 = Number(score2.value)
    let grade3 = Number(score3.value)
    let grade4 = Number(score4.value)
    let grade5 = Number(score5.value)
    let grade6 = Number(score6.value)
    let grade7 = Number(score7.value)
    let grade8 = Number(score8.value)
    
    
    let average = (grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8) / 8

    if(average >= 90 && average <= 100){
        pointAward += 150
    }else if(average >= 85 && average <= 89){
        pointAward += 140
    }else if(average >= 75 && average <= 84){
        pointAward += 120
    }else if(average >= 65 && average <= 74){
        pointAward += 100
    }else if(average >= 60 && average <= 64){
        pointAward += 80
    }else if(average >= 50 && average <= 59){
        pointAward += 50
    }else if(average >= 40 && average <= 49){
        pointAward += 20
    }else{
        pointAward += 0
    }

    process()
    
}

function process(){
    totalPoint = agePoint + countryPoint + pointAward
    if (totalPoint > 180){

            let myChart = document.getElementById("myChart").getContext("2d");
        
            let scoreChart = new Chart(myChart, {
                type: 'bar',
                data: {
                    labels: ['AGE', 'COUNTRY', 'GRADE'],
                    datasets: [{
                        label: ['score average'],
                        data: [agePoint, countryPoint, pointAward],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'gray',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
        })
        messageTxt.textContent = "You have an average of " + totalPoint + " points and " + "your Scholarship application has been accepted"
        messageTxt.style.color = "green"
    }else {
        messageTxt.textContent =  "You have an average of " + totalPoint + " points and " + "your Scholarship application has been rejected !"
        messageTxt.style.color = "red"
    }
    
    endService()
}


let subjectOptions = ['Select Subject', 'Accounting','Agricultural Science', 'Biology', 'Chemistry', 'Christian Religious Studies', 'Commerce','Computer Studies','Data Processing', "Economics", "Food and Nutrition", "French", "Further Mathematics", "Geography", "Government", "History", "Islamic Religious Studies", "Marketing", "Physics", "Visual Arts"];

function subject3Select(){
    let uniqueOption = new Set();
    subjectOptions.forEach(r => uniqueOption.add(r));
    let dropdownOption3 = [...uniqueOption];
    // to convert variable to array you can use [...variablename]

    subject3.textContent = '';
    dropdownOption3.forEach(i => {
        let option = document.createElement('option');
        option.textContent = i;
        subject3.appendChild(option);
    });
    subject3.addEventListener('change', ()=>{
        let sub4 = subject3.value
        subject4Select(dropdownOption3, sub4);
    })
}

function subject4Select(one, two){

    let filterSubject = one.filter(r => r != two);
    let uniqueOption1 = new Set();
    filterSubject.forEach(r => uniqueOption1.add(r));
    let dropdownOption4 = [...uniqueOption1];

    subject4.textContent = '';
    dropdownOption4.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject4.appendChild(option);
    });
    
    subject4.addEventListener('change', ()=>{
        let sub5=subject4.value;
        subject5Select(dropdownOption4, sub5);
    })
}

function subject5Select(one,two){
    let filterSubject = one.filter(r => r != two);
    let uniqueOption2 = new Set();
    filterSubject.forEach(r => uniqueOption2.add(r));
    let dropdownOption5 = [...uniqueOption2];

    subject5.textContent = '';
    dropdownOption5.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject5.appendChild(option);

    });
    subject5.addEventListener('change', ()=>{
        let sub6=subject5.value;
        subject6Select(dropdownOption5, sub6);
    })
}

function subject6Select(one,two){
    let filterSubject = one.filter(r => r != two);
    let uniqueOption2 = new Set();
    filterSubject.forEach(r => uniqueOption2.add(r));
    let dropdownOption6 = [...uniqueOption2];

    subject6.textContent = '';
    dropdownOption6.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject6.appendChild(option);

    });
    subject6.addEventListener('change', ()=>{
        let sub7=subject6.value;
        subject7Select(dropdownOption6, sub7);
    })
}

function subject7Select(one,two){
    let filterSubject = one.filter(r => r != two);
    let uniqueOption2 = new Set();
    filterSubject.forEach(r => uniqueOption2.add(r));
    let dropdownOption7 = [...uniqueOption2];

    subject7.textContent = '';
    dropdownOption7.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject7.appendChild(option);

    });
    subject7.addEventListener('change', ()=>{
        let sub8=subject7.value;
        subject8Select(dropdownOption7, sub8);
    })
}

function subject8Select(one,two){
    let filterSubject = one.filter(r => r != two);
    let uniqueOption2 = new Set();
    filterSubject.forEach(r => uniqueOption2.add(r));
    let dropdownOption8 = [...uniqueOption2];

    subject8.textContent = '';
    dropdownOption8.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject8.appendChild(option);
    });
}


document.addEventListener('DOMContentLoaded', subject3Select);


function endService(){

    firstName.value = ""
    lastName.value = ""
    middleName.value = ""
    gender.value = ""
    country.value = ""
    dob.value = ""
    phoneNumber.value = ""
    email.value = ""
    homeAddress.value = ""
    subject1.value = ""
    subject2.value = ""
    subject3.value = ""
    subject4.value = ""
    subject5.value = ""
    subject6.value = ""
    subject7.value = ""
    subject8.value = ""
    score1.value = ""
    score2.value = ""
    score3.value = ""
    score4.value = ""
    score5.value = ""
    score6.value = ""
    score7.value = ""
    score8.value = ""
    termsConditions.checked = ""
    termsError.value = ""
    termsError.textContent = ""
}