import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { store } from '../store/store'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USER = 'user'

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
    // try{
    // const user = await httpService.post('auth/login', userCred)
    const user = users.find(user => user.username === userCred.username)
    // } catch (err) {
    // console.log('User service could not login.')
    // throw err
    // }
    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post(STORAGE_KEY_USER, userCred)

    // try{
    // const user = await httpService.post('auth/signup', userCred)
    socketService.login(user._id)
    return saveLocalUser(user)
    // } catch (err) {
    // console.log('User service could not signup.')
    // throw err
    // }
}
async function logout() {
    // session storage update stays even when backend is connected !
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // try {
    // return await httpService.post('auth/logout')
    socketService.logout()
    // } catch (err) {
    // console.log('User service could not logout.')
    // throw err
    // }
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
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, isAdmin: user.isAdmin, wishList: user.wishList }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

const users = [
    {
        "_id": "6425a70493079b3be0dab9c4",
        "fullname": "Clem",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "cleme",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "6425a7ab93079b3be0dc6841",
        "fullname": "Shira",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "shira",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "6425a66193079b3be0d9106d",
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
        "_id": "6425a89b93079b3be0dec499",
        "fullname": "Inbar",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "inbar",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "6425a50393079b3be0d59dec",
        "fullname": "Guy",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "guyy",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
    {
        "_id": "6425a83393079b3be0ddc466",
        "fullname": "Tal",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        "username": "talll",
        "password": "secret",
        "visitedStays": [],
        "myStayOrders": [],
        "ownedStays": [],
        "wishList": []
    },
]

utilService.saveToStorage(STORAGE_KEY_USER, users)


