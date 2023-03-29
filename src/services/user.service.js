import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { store } from '../store/store'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USER = STORAGE_KEY_USER

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    // changeScore
}

window.userService = userService


function getUsers() {
    return storageService.query(STORAGE_KEY_USER)
    // return httpService.get(`user`)
}

// function onUserUpdate(user) {
//     showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
//     store.dispatch({ type: 'setWatchedUser', user })
// }

async function getById(userId) {
    const user = await storageService.get(STORAGE_KEY_USER, userId)
    // const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    return storageService.remove(STORAGE_KEY_USER, userId)
    // return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    const user = await storageService.get(STORAGE_KEY_USER, _id)
    // let user = getById(_id)
    // user.score = score
    await storageService.put(STORAGE_KEY_USER, user)

    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}


async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_USER)
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post(STORAGE_KEY_USER, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function saveLocalUser(user) {
    console.log('saving logged in user')
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, isAdmin: user.isAdmin , wishList: user.wishList}
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

const users = [
    {
        "_id": "u101",
        "fullname": "Clem",
        "imgUrl": "/imgs/userfemale.png",
        "username": "cleme",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "u102",
        "fullname": "Shira",
        "imgUrl": "/imgs/userfemale.png",
        "username": "shira",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "u103",
        "fullname": "Kamal",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "kamal",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "u104",
        "fullname": "Inbar",
        "imgUrl": "/imgs/userfemale.png",
        "username": "inbar",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "u105",
        "fullname": "Guy",
        "imgUrl": "/imgs/userfemale.png",
        "username": "guyy",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "u106",
        "fullname": "Tal",
        "imgUrl": "/imgs/userfemale.png",
        "username": "talll",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
]

   utilService.saveToStorage(STORAGE_KEY_USER, users)