function doSth(t, cb) {
    return function () {
        if (--t === 0) {
            cb()
        }
    }
}

function logSth(cb) {
    console.log('death')
    cb()
}

function logSth2(){
    console.log('reborn')
}

let fn = doSth(4,logSth.bind(null,logSth2))

fn()
fn()
fn()
fn()