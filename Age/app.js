const btnEl = document.querySelector("button");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let intputDate = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;

  let birthDetails = {
    date: intputDate.getDate(),
    month: intputDate.getMonth() + 1,
    year: intputDate.getFullYear(),
  };
  let currenYear = today.getFullYear();
  let currenMonth = today.getMonth() + 1;
  let currenDate = today.getDate();

  leapChecker(currenYear);

  if (
    birthDetails.year > currenYear ||
    (birthDetails.month > currenMonth && birthDetails.year == currenYear) ||
    (birthDetails.date > currenDate &&
      birthDetails.month == currenMonth &&
      birthDetails.year == currenYear)
  ) {
    alert("Not Born Yet");
    return;
  }
}


function leapChecker(year) { 
  
}