import * as vars from './sharedVars.js'

const canvas = vars.canvas 


export class RainDrop {
	constructor(x) {
		this.x = x
		this.y = 0
		this.speedX = 0
		this.speedY = 20
		this.size = {
			width: 2,
			height: 30
		}
		this.color = '#ff8800'
	}

	draw() {
		canvas.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)

		// canvas.beginPath()

		canvas.rect(this.x, this.y, this.size.width, this.size.height)
		canvas.fillStyle = this.color
		canvas.fill()
	}

	drip() {
		if(this.y < document.documentElement.clientHeight) {
			this.y += this.speedY

			this.draw()

			requestAnimationFrame(this.drip.bind(this))
		} else {
			this.sprinkle()
		}
	}

	sprinkle() {

	}
}



export class Rain {
	constructor(rainDropsQuantity) {
		this.rainDropsQuantity = rainDropsQuantity
	}

	start() {
		for(let i=0; i<this.rainDropsQuantity; i++) {
			vars.rainDropsList.push(
				new RainDrop(Math.floor(Math.random() * vars.canvasEl.width) + 1)
			)
		}

		vars.rainDropsList.forEach(rainDrop => {
			rainDrop.drip()
		})
	}
}