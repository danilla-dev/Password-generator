const generate = document.querySelector("#generate-btn");
const lengthInput = document.querySelector("#length");
const lengthPrev = document.querySelector("#length-prev");
const copyBtn = document.querySelector("#result-copy-btn");
const result = document.querySelector("#result");
const strengthBar = document.querySelector("#password-strength-bar");
const checkboxes = document.querySelectorAll('.checkbox-input');
const checkboxesContainer = document.querySelector(".checkboxes-container");

const charactersObject = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#$%^&*()_+[]{}|;:,.<>?"
};

const setInitialValue = () => {
  lengthInput.value = 12;
  lengthPrev.innerText = lengthInput.value;
  strengthBar.classList.add('low');
};

setInitialValue();

const setStrengthBar = (strength) => {
  strengthBar.classList.remove('low', 'mid', 'high', 'perfect'); 
  strengthBar.classList.add(strength);
};

const checkPasswordStrength = () => {
  let strength = 1; 

  const lengthValue = parseInt(lengthInput.value);
  if (lengthValue > 8) strength++;
  if (lengthValue > 10) strength++;
  if (lengthValue > 15) strength++;
  if (lengthValue > 20) strength++;
  if (lengthValue > 25) strength++;

  checkboxes.forEach(box => {
    if (box.checked) strength++; 
  });

  if (strength <= 4) {
    setStrengthBar('low');
  } else if (strength <= 6) {
    setStrengthBar('mid');
  } else if (strength <= 9) {
    setStrengthBar('high');
  } else {
    setStrengthBar('perfect');
  }
};

const showToast = (message, duration = 3000) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;

  const container = document.getElementById("toast-container");
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, duration);
};

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(result.innerText)
    .then(() => showToast("The password has been copied!", 2000))
    .catch(err => console.error("Error copying password", err));
});

generate.addEventListener("click", (e) => {
  e.preventDefault();

  const { lowercase, uppercase, numbers, special } = charactersObject;

  const length = parseInt(lengthInput.value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-specials").checked;

  let characters = "";
  if (includeLowercase) characters += lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += special;

  let password = "";
  while (password.length < length) {
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    password += randomChar;
  }

  checkPasswordStrength();
  result.innerText = password;
});

checkboxesContainer.addEventListener("change", (e) => {
  if (e.target.matches('.checkbox-input')) checkPasswordStrength();
});

lengthInput.addEventListener("input", () => {
  const length = parseInt(lengthInput.value);
  lengthPrev.innerText = length;
  checkPasswordStrength();
});
