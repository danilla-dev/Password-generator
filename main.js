const generate = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const lengthPrev = document.getElementById("length-prev");
const copyBtn = document.getElementById("result-copy-btn")
const result = document.getElementById("result")
lengthInput.value = 12;



copyBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const passwordText = result.innerText 
  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Hasło skopiowane do schowka!");
  }).catch(err => {
    console.error("Błąd podczas kopiowania hasła: ", err);
  });
});



generate.addEventListener("click", (e) => {
  e.preventDefault();
  const length = parseInt(lengthInput.value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-specials").checked;

  let characters = "";

  if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) characters += "0123456789";
  if (includeSymbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];

    password += randomChar;
  }

  result.innerText = password;
});

lengthInput.addEventListener("input", () => {
  const length = parseInt(document.getElementById("length").value);
  lengthPrev.innerText = length;
});
