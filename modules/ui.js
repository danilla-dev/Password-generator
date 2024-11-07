export const setStrengthBar = (strengthBar, strength) => {
	console.log('setStrengthBar')
	strengthBar.classList.remove('low', 'mid', 'high', 'perfect')
	strengthBar.classList.add(strength)
}
export const showToast = (message, duration = 3000) => {
	const toast = document.createElement('div')
	toast.classList.add('toast')
	toast.innerText = message

	const container = document.getElementById('toast-container')
	container.appendChild(toast)

	setTimeout(() => toast.classList.add('show'), 100)
	setTimeout(() => {
		toast.classList.remove('show')
		setTimeout(() => toast.remove(), 400)
	}, duration)
}
