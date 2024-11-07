import { generatePassword } from '../modules/passwordUtils'

describe('generatePassword', () => {
	test('should generate password of correct length', () => {
		const length = 12
		const password = generatePassword(length, true, true, true, true)
		expect(password.length).toBe(length)
	})

	test('should include lowercase letters when includeLowercase is true', () => {
		const password = generatePassword(10, true, false, false, false)
		const lowercaseChars = /[a-z]/
		expect(lowercaseChars.test(password)).toBe(true)
	})

	test('should include uppercase letters when includeUppercase is true', () => {
		const password = generatePassword(10, false, true, false, false)
		const uppercaseChars = /[A-Z]/
		expect(uppercaseChars.test(password)).toBe(true)
	})

	test('should include numbers when includeNumbers is true', () => {
		const password = generatePassword(10, false, false, true, false)
		const numbers = /\d/
		expect(numbers.test(password)).toBe(true)
	})

	test('should include special characters when includeSymbols is true', () => {
		const password = generatePassword(10, false, false, false, true)
		const specialChars = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/
		expect(specialChars.test(password)).toBe(true)
	})

	test('should not include disallowed characters', () => {
		const password = generatePassword(10, true, true, true, true)
		const disallowedChars = /[^a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]/
		expect(disallowedChars.test(password)).toBe(false)
	})

	test('should generate password with mixed criteria correctly', () => {
		const password = generatePassword(12, true, true, true, false)
		const lowercaseChars = /[a-z]/
		const uppercaseChars = /[A-Z]/
		const numbers = /\d/
		expect(lowercaseChars.test(password)).toBe(true)
		expect(uppercaseChars.test(password)).toBe(true)
		expect(numbers.test(password)).toBe(true)
		expect(password.length).toBe(12)
	})

	test('should generate password with special characters if specified', () => {
		const password = generatePassword(17, true, true, false, true)
		const specialChars = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/
		expect(specialChars.test(password)).toBe(true)
	})
})
