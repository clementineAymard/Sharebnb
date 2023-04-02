
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg
}
window.cs = stayService


async function query(filterBy = {}) {
    try {
        return await httpService.get(STORAGE_KEY, filterBy)
    } catch (err) {
        console.log('Stay service could not get stays.')
        throw err
    }
}

async function getById(stayId) {
    try {
        return await httpService.get(`stay/${stayId}`)
    } catch (err) {
        console.log('Stay service could not get specific stay.')
        throw err
    }
}

async function remove(stayId) {
    try {
        return await httpService.delete(`stay/${stayId}`)
    } catch (err) {
        console.log('Stay service could not remove specific stay.')
        throw err
    }
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        try {
            savedStay = await httpService.put(`stay/${stay._id}`, stay)
        } catch (err) {
            console.log('Stay service could not save (update) stay.')
            throw err
        }
    } else {
        stay.host = userService.getLoggedinUser()
        
        try {
            savedStay = await httpService.post('stay', stay)
        } catch (err) {
            console.log('Stay service could not save new stay.')
            throw err
        }
    }
    return savedStay
}

// async function addStayMsg(stayId, txt) {
//     const savedMsg = await httpService.post(`stay/${stayId}/msg`, { txt })
//     return savedMsg
// }


// function getEmptyStay() {
//     return {
//         name: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//     }
// }