const weight = document.getElementById("weight");
const addWeight = document.getElementById("incrementWeight");
const subtractWeight = document.getElementById("decrementWeight");
const height = document.querySelector(".range-slider__range");
const result = document.getElementById("result");
const bmiCategory = document.getElementById("result-category");
const btn = document.querySelector(".btn");
const btn3 = document.querySelector(".btn3");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");
const resultMsg = document.getElementById("result-msg");

let male = false;
let female = false;

let heightOutput = document.querySelector(".range-slider__value");
heightOutput.innerHTML = height.value;
height.oninput = function () {
  heightOutput.innerHTML = this.value;
};

decrement = (e) => {
  let i = Number(e.value);
  e.value = --i;
  if (e.value < 0) {
    e.value = 0;
  }
};

increment = (e) => {
  let i = Number(e.value);
  e.value = ++i;

  if (e.value === "") {
    e.value++;
  }
};

btn.addEventListener("click", () => {
  document.querySelector(".wrapper").style.display = "none";
  btn.style.display = "none";
  btn3.style.display = "block";
  document.querySelector(".wrapper-result").style.display = "block";

  let heightInMeters = height.value / 100;
  let total = weight.value / (heightInMeters * heightInMeters);
  result.textContent = total.toFixed(2);

  if (male === true) {
    if (total < 15) {
      bmiCategory.textContent = "Very severely underweight";
      bmiCategory.style.color = "#e23e57";
    } else if (total >= 15 && total <= 16) {
      bmiCategory.textContent = "Severely underweight";
      bmiCategory.style.color = "#88304e";
    } else if (total >= 16 && total <= 18.5) {
      bmiCategory.textContent = "Underweight";
      bmiCategory.style.color = "#522546";
    } else if (total >= 18.5 && total <= 25) {
      bmiCategory.textContent = "Normal";
      bmiCategory.style.color = "#1abc9c";
      resultMsg.textContent = "You have a normal body weight. Good job!";
    } else if (total >= 25 && total <= 30) {
      bmiCategory.textContent = "Overweight";
      bmiCategory.style.color = "#522546";
    } else if (total >= 30 && total <= 35) {
      bmiCategory.textContent = "Moderately obese";
      bmiCategory.style.color = "#88304e";
    } else if (total >= 35 && total <= 40) {
      bmiCategory.textContent = "Severely obese";
      bmiCategory.style.color = "#e23e57";
    } else if (total >= 40) {
      bmiCategory.textContent = "Very severely obese";
      bmiCategory.style.color = "#e23e57";
    }
  } else if (female === true) {
    if (total < 15) {
      bmiCategory.textContent = "Very severely underweight";
      bmiCategory.style.color = "#e23e57";
    } else if (total >= 14 && total <= 15) {
      bmiCategory.textContent = "Severely underweight";
      bmiCategory.style.color = "#88304e";
    } else if (total >= 15 && total <= 17.5) {
      bmiCategory.textContent = "Underweight";
      bmiCategory.style.color = "#522546";
    } else if (total >= 17.5 && total <= 24) {
      bmiCategory.textContent = "Normal";
      bmiCategory.style.color = "#1abc9c";
      resultMsg.textContent = "You have a normal body weight. Good job!";
    } else if (total >= 24 && total <= 30) {
      bmiCategory.textContent = "Overweight";
      bmiCategory.style.color = "#522546";
    } else if (total >= 30 && total <= 35) {
      bmiCategory.textContent = "Moderately obese";
      bmiCategory.style.color = "#88304e";
    } else if (total >= 35 && total <= 40) {
      bmiCategory.textContent = "Severely obese";
      bmiCategory.style.color = "#e23e57";
    } else if (total >= 40) {
      bmiCategory.textContent = "Very severely obese";
      bmiCategory.style.color = "#e23e57";
    }
  }
});

subtractWeight.addEventListener("click", () => decrement(weight));
addWeight.addEventListener("click", () => increment(weight));

maleBtn.addEventListener("click", function () {
  male = true;
  this.classList.toggle("gender-active");
  document.querySelector(".male-icon").classList.toggle("icon-active");

  if (female === true) {
    female = false;
    femaleBtn.classList.remove("gender-active");
    document.querySelector(".female-icon").classList.remove("icon-active");
  }
});

femaleBtn.addEventListener("click", function () {
  female = true;
  this.classList.toggle("gender-active");
  document.querySelector(".female-icon").classList.toggle("icon-active");

  if (male === true) {
    male = false;
    maleBtn.classList.remove("gender-active");
    document.querySelector(".male-icon").classList.remove("icon-active");
  }
});

btn3.addEventListener("click", () => window.location.reload());
