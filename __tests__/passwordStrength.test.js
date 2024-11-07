import { checkPasswordStrength } from '../modules/passwordStrength.js'

describe('checkPasswordStrength', () => {
	let checkboxes

	beforeEach(() => {
		checkboxes = [{ checked: false }, { checked: true }, { checked: true }, { checked: false }]
	})

	test('should return low strength for short (8) password', () => {
		const result = checkPasswordStrength('6ZZJ6W2L', checkboxes, 8)
		expect(result).toBe('low')
	})

	test('should return low strength for short (10) length password', () => {
		const result = checkPasswordStrength('AARTXVS4YI', checkboxes, 10)
		expect(result).toBe('low')
	})

	test('should return mid strength for medium (15) password', () => {
		const result = checkPasswordStrength('NOBPZJGU3TP4QNB', checkboxes, 15)
		expect(result).toBe('mid')
	})
	test('should return mid strength for long (20) password', () => {
		const result = checkPasswordStrength('LNODMAMB938P9Z39HG42', checkboxes, 20)
		expect(result).toBe('mid')
	})
	test('should return high strength for very long (25) password', () => {
		const result = checkPasswordStrength('VDHXGHY7DQSP4PFBPRDW5AU8R', checkboxes, 25)
		expect(result).toBe('high')
	})
	test('should return high strength for max (30) length password', () => {
		const result = checkPasswordStrength('3N1AFB2Y4KJN11E4LC7RW7QPGV2TJU', checkboxes, 30)
		expect(result).toBe('high')
	})

	test('should return perfect strength for very long (30) password with many checked boxes', () => {
		checkboxes.forEach(checkbox => (checkbox.checked = true))
		const result = checkPasswordStrength('H12u8BrSY$Nk.]u|AesxJGqRTRK:Im', checkboxes, 30)
		expect(result).toBe('perfect')
	})
	test('should return high strength for long (23) password with many checked boxes', () => {
		checkboxes.forEach(checkbox => (checkbox.checked = true))
		const result = checkPasswordStrength('b3gu|UB+*nU4orZ}(%QoYR}', checkboxes, 23)
		expect(result).toBe('high')
	})
	test('should return mid strength for short (9) password with many checked boxes', () => {
		checkboxes.forEach(checkbox => (checkbox.checked = true))
		const result = checkPasswordStrength('x_>#iet[G', checkboxes, 9)
		expect(result).toBe('mid')
	})

	test('should return correct strength based on the number of checked boxes and medium (12) password', () => {
		checkboxes[0].checked = true
		checkboxes[1].checked = true

		const result = checkPasswordStrength('mypassword123', checkboxes, 12)
		expect(result).toBe('mid')
	})

	test('should handle undefined password correctly', () => {
		const result = checkPasswordStrength(undefined, checkboxes, 15)
		expect(result).toBe('mid')
	})
})
