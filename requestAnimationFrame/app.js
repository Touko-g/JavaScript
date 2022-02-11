const el = document.querySelector('#num')

const loopFactory = function (func) {
    let i = 0
    let handle = {}
    let loop = function () {
        i = func(i)
        handle.id = requestAnimationFrame(loop)
    }
    handle.id = requestAnimationFrame(loop);
    return handle
}

let increment = function (i) {
    el.innerHTML = i
    return ++i
}

let interval = loopFactory(increment)

window.onclick = function () {
    cancelAnimationFrame(interval.id)
}