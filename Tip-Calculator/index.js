const inputBillEl = document.getElementById("label-textBill");
const inputTipEl = document.getElementById("label-textTip");
const totalEl = document.getElementById("total");
const btnEl = document.querySelector(".btn");

function calculateTip() {
  const bill = inputBillEl.value;
  const tip = inputTipEl.value;

  if (bill == "" || tip == "") {
    totalEl.textContent = "Enter the bill and tip....";

    alert("Please enter the bill and tip..");
  } else {
    const total = bill * (1 + tip / 100);
    // console.log(total);
    totalEl.textContent = total.toFixed(2);
  }
}

btnEl.addEventListener("click", calculateTip);
