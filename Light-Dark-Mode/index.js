const body = document.querySelector("body");
const inputEl = document.querySelector("input");

inputEl.checked = JSON.parse(localStorage.getItem("modal"));
updataTheme();

inputEl.addEventListener("input", () => {
  updataTheme();

  updatStorage();
});

function updatStorage() {
  localStorage.setItem("modal", JSON.stringify(inputEl.checked));
}

function updataTheme() {
  if (inputEl.checked) {
    console.log(inputEl.checked);
    body.style.backgroundColor = "#000";
  } else {
    body.style.backgroundColor = "#fff";
    console.log(inputEl.checked);
  }
}
