const changeColor = document.querySelectorAll('.box')
const colors = ['red', 'green', 'blue', 'alpha']
let colorIndex = 0

const changeBorderColor = () => {
	changeColor.forEach(e => {
		e.style.borderColor = colors[colorIndex]
	})
	colorIndex = (colorIndex + 1) % colors.length
}

setInterval(changeBorderColor, 3000)

console.log('Hello from Nerdbord!')
