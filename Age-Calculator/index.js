const birthdayEl = document.getElementById("birthday");
const btnEl = document.querySelector(".btn");
const overViewEl = document.querySelector(".overview");
const resultEl = document.querySelector(".result");
btnEl.addEventListener("click", () => {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    overViewEl.classList.remove("hidden");
    setTimeout(() => {
      alert("Please Enter your DOB\nClick anywhere for enter DOB....🤣");
    }, 500);
  } else {
    const result = calcAge(birthdayValue);
    resultEl.textContent = `You're ${result.age} ${
      result.age > 1 ? "years" : "year"
    } & ${
      result.months >= 0 ? result.months : (result.months += 12)
    } months old`;
    console.log(result.age, result.months);
  }
});
function calcAge(value) {
  const currentDate = new Date();
  const userDate = new Date(value);
  let age = currentDate.getFullYear() - userDate.getFullYear();
  let months = currentDate.getMonth() - userDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < userDate.getDate())
  ) {
    age--;
  }
  if (currentDate.getDate() < userDate.getDate()) {
    months--;
  }
  return {
    age: age,
    months: months,
  };
}
overViewEl.addEventListener("click", () => {
  overViewEl.classList.add("hidden");
});
