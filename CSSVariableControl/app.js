const inputs = document.querySelectorAll(".box input");
const bg = document.querySelector(".bg");

inputs.forEach((input) => {
  input.addEventListener("change", update);
});
inputs.forEach((input) => {
  input.addEventListener("mousemove", update);
});

function update() {
  const changeValue = this.dataset.value || "";
  bg.style.setProperty(`--${this.name}`, this.value + changeValue);
  console.log(this.name);
  console.log(this.value);
}
