console.log('main.js loaded')
import { setStrengthBar, showToast } from './modules/ui.js'
import { generatePassword } from './modules/passwordUtils.js'
import { checkPasswordStrength } from './modules/passwordStrength.js'
console.log(setStrengthBar, showToast, generatePassword, checkPasswordStrength)

const generate = document.querySelector('#generate-btn')
const lengthInput = document.querySelector('#length')
const lengthPrev = document.querySelector('#length-prev')
const copyBtn = document.querySelector('#result-copy-btn')
const result = document.querySelector('#result')
const strengthBar = document.querySelector('#password-strength-bar')
const checkboxes = document.querySelectorAll('.checkbox-input')
const checkboxesContainer = document.querySelector('.checkboxes-container')

const setInitialValue = () => {
	lengthInput.value = 12
	lengthPrev.innerText = lengthInput.value
	strengthBar.classList.add('low')
}

setInitialValue()

copyBtn.addEventListener('click', e => {
	e.preventDefault()
	navigator.clipboard
		.writeText(result.innerText)
		.then(() => showToast('The password has been copied!', 2000))
		.catch(err => console.error('Error copying password', err))
})
checkboxesContainer.addEventListener('change', e => {
	const length = parseInt(lengthInput.value)

	if (e.target.matches('.checkbox-input')) {
		const strength = checkPasswordStrength(undefined, checkboxes, length)
		setStrengthBar(strengthBar, strength)
	}
	const checkboxesArray = Array.from(checkboxesContainer.querySelectorAll('.checkbox-input'))
	const activeCheckboxes = checkboxesArray.filter(checkbox => checkbox.checked)

	checkboxesArray.forEach(checkbox => {
		checkbox.disabled = activeCheckboxes.length === 1 && activeCheckboxes.includes(checkbox)
	})
})

lengthInput.addEventListener('input', () => {
	const length = parseInt(lengthInput.value)
	const strength = checkPasswordStrength(undefined, checkboxes, length)
	setStrengthBar(strengthBar, strength)
	lengthPrev.innerText = length
})

generate.addEventListener('click', e => {
	e.preventDefault()
	const length = parseInt(lengthInput.value)
	const includeUppercase = document.getElementById('include-uppercase').checked
	const includeLowercase = document.getElementById('include-lowercase').checked
	const includeNumbers = document.getElementById('include-numbers').checked
	const includeSymbols = document.getElementById('include-specials').checked
	const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
	result.innerText = password
})
