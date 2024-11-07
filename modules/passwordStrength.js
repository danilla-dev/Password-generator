export const checkPasswordStrength = (password, checkboxes, length) => {
	let strength = 1

	const lengthValue = password ? password.length : length
	const lengthThresholds = [8, 10, 15, 20, 25]

	lengthThresholds.forEach(threshold => {
		if (lengthValue > threshold) strength++
	})

	checkboxes.forEach(box => {
		if (box.checked) strength++
	})

	if (strength <= 4) return 'low'
	if (strength <= 6) return 'mid'
	if (strength <= 9) return 'high'
	return 'perfect'
}
