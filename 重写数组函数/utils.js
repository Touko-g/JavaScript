const deepClonePlus = (origin, hashMap = new WeakMap()) => {
    if (origin == undefined || typeof origin !== 'object') {
        return origin
    }
    if (origin instanceof Date) {
        return new Date(origin)
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin)
    }

    const hashKey = hashMap.get(origin)
    console.log(hashKey, origin)

    if (hashKey) {
        console.log('已经存在，直接返回')
        return hashKey
    }

    const target = new origin.constructor()
    hashMap.set(origin, target)
    for (let k in origin) {
        target[k] = deepClonePlus(origin[k], hashMap)
    }
    return target
}

Array.prototype.myForEach = function (callback, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window

    for (let i = 0; i < _len; i++) {
        callback.call(_thisArg, _arr[i], i, _arr)
    }
}

Array.prototype.myMap = function (callback, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    var _newArr = []
    var _item, _res
    for (let i = 0; i < _len; i++) {
        _item = deepClonePlus(_arr[i])
        _res = callback.call(_thisArg, _item, i, _arr)
        _res && _newArr.push(_res)
    }
    return _newArr
}

Array.prototype.myFilter = function (callback, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    var _newArr = []
    var _item
    for (let i = 0; i < _len; i++) {
        _item = deepClonePlus(_arr[i])
        callback.call(_thisArg, _item, i, _arr) && _newArr.push(_item)
    }
    return _newArr
}

Array.prototype.myEvery = function (callback, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    for (let i = 0; i < _len; i++) {
        if (!callback.call(_thisArg, _arr[i], i, _arr)) {
            return false
        }
    }
    return true
}

Array.prototype.mySome = function (callback, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    for (let i = 0; i < _len; i++) {
        if (callback.call(_thisArg, _arr[i], i, _arr)) {
            return true
        }
    }
    return false
}

Array.prototype.myReduce = function (callback, initialValue, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    var _item
    for (let i = 0; i < _len; i++) {
        _item = deepClonePlus(_arr[i])
        initialValue = callback.call(_thisArg, initialValue, _item, i, _arr)
    }
    return initialValue
}

Array.prototype.myReduceRight = function (callback, initialValue, thisArg) {
    var _arr = this
    var _len = _arr.length
    var _thisArg = thisArg ? Object(thisArg) : window
    var _item
    for (let i = _len-1; i >= 0; i--) {
        _item = deepClonePlus(_arr[i])
        initialValue = callback.call(_thisArg, initialValue, _item, i, _arr)
    }
    return initialValue
}