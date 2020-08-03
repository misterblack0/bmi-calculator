const weight = document.getElementById("weight");
const age = document.getElementById("age");
const addWeight = document.getElementById("addWeight");
const subtractWeight = document.getElementById("subtractWeight");
const addAge = document.getElementById("addAge");
const subtractAge = document.getElementById("subtractAge");
const height = document.querySelector(".range-slider__range");
const result = document.getElementById("result");
const bmiCategory = document.getElementById("bmi-category");
const btn = document.querySelector(".btn");

subtractAge.addEventListener("click", function () {
  let i = Number(age.value);
  age.value = --i;

  if (age.value < 0) {
    age.value = 0;
  }
});

addAge.addEventListener("click", function () {
  let i = Number(age.value);
  age.value = ++i;

  if (age.value === "") {
    age.value++;
  }
});

subtractWeight.addEventListener("click", function () {
  let i = Number(weight.value);
  weight.value = --i;

  if (weight.value < 0) {
    weight.value = 0;
  }
});

addWeight.addEventListener("click", function () {
  let i = Number(weight.value);
  weight.value = ++i;

  if (weight.value === "") {
    weight.value++;
  }
});

var heightOutput = document.querySelector(".range-slider__value");
heightOutput.innerHTML = height.value;
height.oninput = function () {
  heightOutput.innerHTML = this.value;
};

btn.addEventListener("click", function () {
  let heightInMeters = height.value / 100;
  let total;
  total = weight.value / (heightInMeters * heightInMeters);
  result.textContent = total.toFixed(2);

  if (total < 15) bmiCategory.textContent = "Very severely underweight";
  else if (total >= 15 && total <= 16)
    bmiCategory.textContent = "	Severely underweight";
  else if (total >= 16 && total <= 18.5)
    bmiCategory.textContent = "Underweight";
  else if (total >= 18.5 && total <= 25) bmiCategory.textContent = "Normal";
  else if (total >= 25 && total <= 30) bmiCategory.textContent = "Overweight";
  else if (total >= 30 && total <= 35)
    bmiCategory.textContent = "Moderately obese";
  else if (total >= 35 && total <= 40)
    bmiCategory.textContent = "Severely obese";
  else if (total >= 40) bmiCategory.textContent = "Very severely obese";
});
