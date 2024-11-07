export const charactersObject = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '0123456789',
	special: '!@#$%^&*()_+[]{}|;:,.<>?',
}

export const generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
	console.log('generatePassword')
	let characters = ''
	if (includeLowercase) characters += charactersObject.lowercase
	if (includeUppercase) characters += charactersObject.uppercase
	if (includeNumbers) characters += charactersObject.numbers
	if (includeSymbols) characters += charactersObject.special

	let password = ''
	while (password.length < length) {
		const randomChar = characters[Math.floor(Math.random() * characters.length)]
		password += randomChar
	}

	return password
}
