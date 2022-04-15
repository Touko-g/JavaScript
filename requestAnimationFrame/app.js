const el = document.querySelectorAll('.num')

let num = 0
let animaObj = {}

const loopMore = () => {
    Array.from(el).forEach((v, i) => {
        const l = () => {
            v.innerHTML = new Date().getTime()
            num++
            animaObj['num' + i] = requestAnimationFrame(l)
        }
        l()
    })
}
loopMore()

Array.from(el).forEach((v, i) => {
    v.onclick = function () {
        cancelAnimationFrame(animaObj['num' + i])
    }
})

// const loopFactory = function (func) {
//     let i = 0
//     let handle = {}
//     let loop = function () {
//         i = func(i)
//         handle.id = requestAnimationFrame(loop)
//     }
//     handle.id = requestAnimationFrame(loop);
//     return handle
// }
//
// let increment = function (i) {
//     el[0].innerHTML = i
//     return ++i
// }
//
// let interval = loopFactory(increment)
//
// window.onclick = function () {
//     cancelAnimationFrame(interval.id)
// }