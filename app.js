// Get input fields
let dayField = document.getElementById("input-day");
let monthField = document.getElementById("input-month");
let yearField = document.getElementById("input-year");

// Get display elements
let userAgeYears = document.getElementById("years");
let userAgeMonths = document.getElementById("months");
let userAgeDays = document.getElementById("days");

// Get error message elements
let errorMessageDay = document.getElementById("errorday");
let errorMessageMonth = document.getElementById("errormonth");
let errorMessageYear = document.getElementById("erroryear");

// Get label elements
let labelDay = document.getElementById("labelday");
let labelMonth = document.getElementById("labelmonth");
let labelYear = document.getElementById("labelyear");

// Get current date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

// Get form button
let formButton = document.getElementById("formsubmit");

// Add event listener to form submit button
formButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission
  validateAndCalculateAge(); // Call function to validate and calculate age
});

// Function to validate input fields and calculate age
function validateAndCalculateAge() {
  let isValid = true; // Flag to track form validity

  // Validate year field
  if (yearField.value > currentYear || yearField.value === "") {
    errorMessageYear.innerHTML = "Year must be in the past";
    labelYear.style.color = "red";
    yearField.style.border = "2px solid red";
    userAgeYears.innerHTML = "--";
    isValid = false;
  } else {
    errorMessageYear.innerHTML = "";
    labelYear.style.color = "";
    yearField.style.border = "";
    let ageYears = currentYear - yearField.value;
    userAgeYears.innerHTML = ageYears;
  }

  // Validate month field
  if (monthField.value > 12 || monthField.value === "") {
    errorMessageMonth.innerHTML = "Month must be a valid number";
    labelMonth.style.color = "red";
    monthField.style.border = "2px solid red";
    userAgeMonths.innerHTML = "--";
    isValid = false;
  } else {
    errorMessageMonth.innerHTML = "";
    labelMonth.style.color = "";
    monthField.style.border = "";
    let ageMonths = currentMonth - monthField.value;
    userAgeMonths.innerHTML = ageMonths;
  }

  // Validate day field
  if (dayField.value >= 31 || dayField.value === "") {
    errorMessageDay.innerHTML = "Day must be a valid number";
    labelDay.style.color = "red";
    dayField.style.border = "2px solid red";
    userAgeDays.innerHTML = "--";
    isValid = false;
  } else {
    errorMessageDay.innerHTML = "";
    labelDay.style.color = "";
    dayField.style.border = "";
    let ageDays = currentDay - dayField.value;
    userAgeDays.innerHTML = ageDays;
  }

  // If all fields are valid, submit the form
  if (isValid) {
    document.getElementById("myForm").submit();
  }
}
