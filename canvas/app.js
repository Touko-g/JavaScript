const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const bcr = canvas.getBoundingClientRect()
canvas.onmousedown = e => {
    startDraw(e)
}
canvas.onmouseup = e => {
    drawEnd()
}

const startDraw = e => {
    ctx.strokeStyle = "#d74040"
    ctx.beginPath()
    ctx.moveTo(e.clientX - bcr.left, e.clientY - bcr.top)
    canvas.onmousemove = (ev) => {
        drawing(ev)
    }
}
const drawing = e => {
    ctx.lineTo(e.clientX - bcr.left, e.clientY - bcr.top)
    ctx.stroke()
}

const drawEnd = () => {
    canvas.onmousemove = null
}
const clear = () =>{
    ctx.clearRect(0,0,1000,5000)
}

setTimeout(()=>{

},2000)
