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

	drip() {
		if(this.y < document.documentElement.clientHeight) {
			canvas.rect(this.x, this.y, this.size.width, this.size.height)
			canvas.fillStyle = this.color
			canvas.fill()

			this.y += this.speedY
		} else {
			this.die()
		}
	}

	sprinkle() {

	}

	die() {
		vars.rainDropsList.splice(vars.rainDropsList.indexOf(this), 1)
	}
}



export class Rain {
	constructor(rainDropsQuantity) {
		this.rainDropsQuantity = rainDropsQuantity
	}

	init() {
		for(let i=0; i<this.rainDropsQuantity; i++) {
			vars.rainDropsList.push(
				new RainDrop(Math.floor(Math.random() * vars.canvasEl.width) + 1)
			)
		}

		this.start()
	}

	start() {
		requestAnimationFrame(() => {
			console.log(1)
			canvas.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)

			vars.rainDropsList.forEach(rainDrop => {
				rainDrop.drip()
			})
		})
	}
}