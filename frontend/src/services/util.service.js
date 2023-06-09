export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomInt,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    setQueryParams,
    deleteQueryParam,
    getValFromParam
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.ceil(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300){
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function setQueryParams(newParams) {
    console.log('setQueryParams')
    
        // const url = new URL(window.location.href);
        // console.log('window.location.href', window.location.href)
        // const params = new URLSearchParams(url.search);
        // console.log('params', params)
        
        for (var paramName in newParams) {


            // const paramValue = newParams[paramName];
            // params.set(paramName, paramValue); // used to update an existing query string parameter or add a new one if it doesn't exist.
        }
        url.search = params.toString();
        console.log('url search', url.search)
        window.history.pushState({ path: url.href }, '', url.href); //modify the URL of the current page without reloading the page
}
    
    function deleteQueryParam(key) {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
    
        params.delete(key);
        url.search = params.toString();
    
        window.history.pushState({ path: url.href }, '', url.href);
    }
    
    function getValFromParam(key) {
        const queryStringParams = new URLSearchParams(window.location.search);
        return queryStringParams.get(key);
    }