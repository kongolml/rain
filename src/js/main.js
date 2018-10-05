import '../styles/main.scss'
import * as vars from './sharedVars.js' 
import { Rain } from './rain.js'



const setCanvas = () => {
	vars.canvasEl.width = document.documentElement.clientWidth
	vars.canvasEl.height = document.documentElement.clientHeight
}

const init = () => {
	setCanvas()

	new Rain(10).init()
}


init()


window.addEventListener('resize', setCanvas)