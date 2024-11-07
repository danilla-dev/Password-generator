import { setStrengthBar } from '../modules/ui'

describe('setStrengthBar', () => {
	let strengthBar

	beforeEach(() => {
		strengthBar = document.createElement('div')
		document.body.appendChild(strengthBar)
	})

	afterEach(() => {
		strengthBar.remove()
	})

	test('should add the correct strength class based on input', () => {
		setStrengthBar(strengthBar, 'high')
		expect(strengthBar.classList.contains('high')).toBe(true)
		expect(strengthBar.classList.contains('low')).toBe(false)
		expect(strengthBar.classList.contains('mid')).toBe(false)
		expect(strengthBar.classList.contains('perfect')).toBe(false)
	})

	test('should remove previous strength classes and add the new one', () => {
		strengthBar.classList.add('low')
		setStrengthBar(strengthBar, 'mid')
		expect(strengthBar.classList.contains('low')).toBe(false)
		expect(strengthBar.classList.contains('mid')).toBe(true)
	})

	test('should handle invalid class names gracefully', () => {
		setStrengthBar(strengthBar, 'perfect')
		expect(strengthBar.classList.contains('perfect')).toBe(true)
	})
})
