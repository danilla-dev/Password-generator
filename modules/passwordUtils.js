const charactersObject = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '0123456789',
	special: '!@#$%^&*()_+[]{}|;:,.<>?',
}

export const generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
	console.log('generatePassword')
	let characters = ''
	let password = []

	if (includeLowercase) characters += charactersObject.lowercase
	if (includeUppercase) characters += charactersObject.uppercase
	if (includeNumbers) characters += charactersObject.numbers
	if (includeSymbols) characters += charactersObject.special

	if (includeLowercase)
		password.push(charactersObject.lowercase[Math.floor(Math.random() * charactersObject.lowercase.length)])
	if (includeUppercase)
		password.push(charactersObject.uppercase[Math.floor(Math.random() * charactersObject.uppercase.length)])
	if (includeNumbers)
		password.push(charactersObject.numbers[Math.floor(Math.random() * charactersObject.numbers.length)])
	if (includeSymbols)
		password.push(charactersObject.special[Math.floor(Math.random() * charactersObject.special.length)])

	console.log('Znaki gwarantowane:', password)

	while (password.length < length) {
		const randomChar = characters[Math.floor(Math.random() * characters.length)]
		password.push(randomChar)
	}
	console.log('Hasło przed tasowaniem:', password)

	password = password.sort(() => Math.random() - 0.5)
	const finalPassword = password.join('')
	console.log('Finalne hasło:', finalPassword)

	return finalPassword
}
