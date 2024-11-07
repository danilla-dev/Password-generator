const generate = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const lengthPrev = document.getElementById("length-prev");
const copyBtn = document.getElementById("result-copy-btn")
const result = document.getElementById("result")
const strengthBar = document.getElementById("password-strength-bar")

// inital password length value
lengthInput.value = 12;

let passwordStrength = 0

const charactersObject = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#$%^&*()_+[]{}|;:,.<>?"
}



const setStrengthBar = (strength) => {

  strengthBar.className = ''
 switch (strength){
  case 'low': 
  strengthBar.classList.add("low")
  break
  case 'mid': 
  strengthBar.classList.add("mid")

  break
  case 'high': 
  strengthBar.classList.add("high")

  break
  case 'perfect': 
  strengthBar.classList.add("perfect")
  break
 }
}

const checkPasswordStrength = (password) => {
  const { lowercase, uppercase, numbers, special} = charactersObject

  let strength = 1

  console.log(password)
  if (password.length > 8 ) strength += 1
  if (password.length > 10 ) strength += 1
  if (password.length > 15 ) strength += 1
  if (password.length > 20 ) strength += 1
  if (password.length > 25 ) strength += 1

  if (lowercase.split('').some(char => password.includes(char))) strength += 1;
  if (uppercase.split('').some(char => password.includes(char))) strength += 1;
  if (numbers.split('').some(char => password.includes(char))) strength += 1;
  if (special.split('').some(char => password.includes(char))) strength += 1;

  if (strength <= 4) {
    strength = 'low';
  } else if (strength <= 6) {
    strength = 'mid'
  } else if (strength <= 9) {
    strength = 'high'
  } else {
     strength = 'perfect'
  }

  console.log(strength)
  setStrengthBar(strength)
  return strength
}


// Show toast function 
const showToast = (message, duration = 3000) =>  {

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;

  setTimeout(() => toast.classList.add("show"), 100);

  const container = document.getElementById("toast-container");
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400); 
  }, duration);
}



// copy to clipboard function
copyBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const passwordText = result.innerText 
  navigator.clipboard.writeText(passwordText).then(() => {
    showToast("The password has been copied!", 2000)
  }).catch(err => {
    console.error("Error copying password", err);
  });
});




// generate password function
generate.addEventListener("click", (e) => {
  e.preventDefault();

  const { lowercase, uppercase, numbers, special} = charactersObject

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
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];

    password += randomChar;
  }
  checkPasswordStrength(password)
  result.innerText = password;
});




lengthInput.addEventListener("input", () => {
  const length = parseInt(document.getElementById("length").value);
  lengthPrev.innerText = length;
});
