export const checkPasswordStrength = (password, checkboxes, length) => {
	console.log(checkboxes)
	let strength = 1

	const lengthValue = password ? password.length : length

	if (lengthValue > 8) strength++
	if (lengthValue > 10) strength++
	if (lengthValue > 15) strength++
	if (lengthValue > 20) strength++
	if (lengthValue > 25) strength++

	checkboxes.forEach((box, index) => {
		if (box.checked) strength++
	})

	console.log('Final strength:', strength)

	if (strength <= 4) return 'low'
	if (strength <= 6) return 'mid'
	if (strength <= 9) return 'high'
	return 'perfect'
}
