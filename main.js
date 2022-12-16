let playing = false
let engaged = false

const calm = document.getElementById("calm-audio")
const loud = document.getElementById("loud-audio")
const display = document.getElementById("display")
const toggle = document.getElementById("toggle")
const control = document.getElementById("control-button")

toggle.onchange = (event) => {
    engaged = event.target.checked
    if (engaged) {
        loud.currentTime = calm.currentTime
        calm.pause()
        loud.play()

        control.style.webkitFilter = 'invert(1)'
        document.body.style.background = '#222'
        display.innerText = "PAIN"

        for (let element of document.getElementsByClassName("circle")) {
            element.style.borderRadius = '10%'
            element.style.borderColor = 'white'
        }
    } else {
        calm.currentTime = loud.currentTime
        loud.pause()
        calm.play()

        control.style.webkitFilter = 'invert(0)'
        document.body.style.background = 'white'
        display.innerText = "GAIN"

        for (let element of document.getElementsByClassName("circle")) {
            element.style.borderRadius = '100%'
            element.style.borderColor = 'black'
        }
    }
}

control.onclick = () => {
    if (playing) {
        calm.pause()
        loud.pause()
        playing = false
        control.src = './assets/icons/play-icon.svg'

        for (let element of document.getElementsByClassName("circle")) {
            element.style.visibility = 'hidden'
        }
    } else {
        if (engaged) {
            loud.play()
        } else {
            calm.play()
        }
        playing = true
        control.src = './assets/icons/pause-icon.svg'

        for (let element of document.getElementsByClassName("circle")) {
            element.style.visibility = 'visible'
        }
    }
}

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div")
    div.classList.add("circle")
    div.style.animationDelay = (i * 100) + "ms"
    document.body.appendChild(div)
}