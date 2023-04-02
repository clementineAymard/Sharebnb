import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { userService } from './user.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import orders from "../data/orders.json" assert { type: "json" }

import { store } from '../store/store'
// import { userStore } from '../store/user.store'
import { socketService, SOCKET_EVENT_YOUR_ORDER_UPDATED, SOCKET_EVENT_ORDER_FOR_YOU } from './socket.service'


    ; (() => {
        setTimeout(() => {
            socketService.on(SOCKET_EVENT_ORDER_FOR_YOU, (order) => {
                console.log('GOT from socket', order)
                var loggedinUser = store.getters.loggedinUser
                console.log('loggedinUser (socket on.)', loggedinUser)
                if (order.hostId === loggedinUser) showSuccessMsg(`You've just received a new order.`)
                // store.commit({ type: 'addOrder', order })
            })
            socketService.on(SOCKET_EVENT_YOUR_ORDER_UPDATED, (order) => {
                var loggedinUser = store.getters.loggedinUser
                if (order.buyerId === loggedinUser) {
                    if (order.status === 'approved') showSuccessMsg(`Notification : Your trip was approved by the host!`)
                    if (order.status === 'rejected') showErrorMsg(`Notification : Your trip was rejected by the host.`)
                }
            })
        }, 0)

    })()

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    add,
    save,
    remove,
}

// FOR ORDERLIST orderService.query({hostId : loggedinUser._id})
// FOR TRIPSLIST orderService.query({buyerId : loggedinUser._id})

async function query(filterBy = {}) {
    try {
        // var orders = await storageService.query(STORAGE_KEY)
        var orders = await httpService.get('order', filterBy)
        if (filterBy.hostId) orders = orders.filter(order => order.hostId === filterBy.hostId)
        if (filterBy.buyerId) orders = orders.filter(order => order.buyerId === filterBy.buyerId)
        // orders = orders.
        return orders
    } catch (err) {
        console.log('Order service : Error while getting orders')
        throw err
    }

}

// function getById(orderId) {
//     return storageService.get(STORAGE_KEY, orderId)
// }

async function remove(orderId) {
    // await storageService.remove(STORAGE_KEY, orderId)
    await httpService.delete(`order/${prderId}`)
}

async function add(newOrder) {
    newOrder.status = 'pending'
    try {
        // const addedOrder = await storageService.post(STORAGE_KEY, { ...newOrder })
        const addedOrder = await httpService.post('order', { ...newOrder })
        // console.log('addedOrder:', addedOrder)

        // socketService.emit(SOCKET_EVENT_ORDER_FOR_YOU, addedOrder)
        return addedOrder
    } catch (err) {
        console.log('Could not add order')
        throw err
    }
}

async function save(order) {
    var savedOrder
    try {
        savedOrder = await httpService.put('order', order)
        // savedOrder = await storageService.put(STORAGE_KEY, order)

        // socketService.emit(SOCKET_EVENT_YOUR_ORDER_UPDATED, savedOrder)
        return savedOrder
    } catch (err) {
        console.log('Order service could not save order')
        throw err
    }
}

// utilService.saveToStorage(STORAGE_KEY, orders)

// function getEmptyOrder() {
//     return {
//         host: {
//             _id: '',
//             fullname: '',
//             imgUrl: ''
//         },
//         buyer: {
//             _id: '',
//             fullname: '',
//             imgUrl: ''
//         },
//         totalPrice: 160,
//         startDate: '',
//         endDate: '',
//         guests: {
//             adults: 0,
//             children: 0,
//             infants: 0
//         },
//         stay: {
//             _id: '',
//             name: '',
//             price: 0,
//             imgUrl: ''
//         },
//         msgs: [],
//         status: 'pending' // pending, approved/
//     }
// }

// const orders = [
//     {
//         "_id": "o1225",
//         "hostId": "u103",
//         "hostfullname": "Kamal",
//         "hostImgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg",
//         "buyerId": "u101",
//         "buyerFullname": "Clem",
//         "buyerImgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628",
//         "totalPrice": 160,
//         "startDate": "2025/10/15",
//         "endDate": "2025/10/17",
//         "adults": 2,
//         "children": 1,
//         "infants": 1,
//         "stayId": "622f337a75c7d36e498aaaf8",
//         "stayName": "Westin Kaanapali KORVN 2BR",
//         "stayPrice": 595,
//         "stayImg": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg",
//         "msgs": [],
//         "status": "approved" // pending, approved
//     },
//     {
//         "_id": "o1235",
//         "hostId": "u103",
//         "hostfullname": "Kamal",
//         "hostImgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg",
//         "buyerId": "u101",
//         "buyerFullname": "Clem",
//         "buyerImgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628",
//         "totalPrice": 160,
//         "startDate": "2025/10/15",
//         "endDate": "2025/10/17",
//         "adults": 2,
//         "children": 1,
//         "infants": 1,
//         "stayId": "622f337a75c7d36e498aaaf9",
//         "stayName": "Belle chambre à côté Metro Papineau",
//         "stayPrice": 30,
//         "stayImg": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437045/dmquvficldi8ssfdlrrx.jpg",
//         "msgs": [],
//         "status": "pending" // pending, approved
//     },
//     // {
//     //     "_id": "o8225",
//     //     "host": {
//     //         "_id": "u103",
//     //         "fullname": "Kamal",
//     //         "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
//     //     },
//     //     "buyer": {
//     //         "_id": "u102",
//     //         "fullname": "Shira",
//     //         "imgUrl": "https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
//     //     },
//     //     "totalPrice": 160,
//     //     "startDate": "2025/10/15",
//     //     "endDate": "2025/10/17",
//     //     "guests": {
//     //         "adults": 2,
//     //         "kids": 1
//     //     },
//     //     "stay": {
//     //         "_id": "622f337a75c7d36e498aaaf9",
//     //         "name": "Belle chambre à côté Metro Papineau",
//     //         "price": 30,
//     //         "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437045/dmquvficldi8ssfdlrrx.jpg"
//     //     },
//     //     "msgs": [],
//     //     "status": "approved" // pending, approved
//     // },
//     // {
//     //     "_id": "o1295",
//     //     "host": {
//     //         "_id": "u103",
//     //         "fullname": "Kamal",
//     //         "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
//     //     },
//     //     "buyer": {
//     //         "_id": "u102",
//     //         "fullname": "Shira",
//     //         "imgUrl": "https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
//     //     },
//     //     "totalPrice": 160,
//     //     "startDate": "2025/10/15",
//     //     "endDate": "2025/10/17",
//     //     "guests": {
//     //         "adults": 2,
//     //         "kids": 1
//     //     },
//     //     "stay": {
//     //         "_id": "622f337a75c7d36e498aaaf8",
//     //         "name": "Westin Kaanapali KORVN 2BR",
//     //         "price": 595,
//     //         "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
//     //     },
//     //     "msgs": [],
//     //     "status": "pending" // pending, approved
//     // },
//     // {
//     //     "_id": "o1125",
//     //     "host": {
//     //         "_id": "u103",
//     //         "fullname": "Kamal",
//     //         "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
//     //     },
//     //     "buyer": {
//     //         "_id": "u106",
//     //         "fullname": "Tal",
//     //         "imgUrl": "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80"
//     //     },
//     //     "totalPrice": 160,
//     //     "startDate": "2025/10/15",
//     //     "endDate": "2025/10/17",
//     //     "guests": {
//     //         "adults": 2,
//     //         "kids": 1
//     //     },
//     //     "stay": {
//     //         "_id": "622f337a75c7d36e498aaaf8",
//     //         "name": "Westin Kaanapali KORVN 2BR",
//     //         "price": 595,
//     //         "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
//     //     },
//     //     "msgs": [],
//     //     "status": "pending" // pending, approved
//     // },
//     {
//         "_id": "o1265",
//         "hostId": "u102",
//         "hostFullname": "Shira",
//         "hostImgUrl": "https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg",
//         "buyerId": "u103",
//         "buyerFullname": "Kamal",
//         "buyerImg": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg",
//         "totalPrice": 160,
//         "startDate": "2025/10/15",
//         "endDate": "2025/10/17",
//         "adults": 2,
//         "children": 1,
//         "infants": 0,
//         "stayId": "622f337a75c7d36e498aaafb",
//         "stayName": "Fresh and modern 1BR in Bed-Stuy",
//         "stayPrice": 79,
//         "stayImg": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436912/xle8ueqxjeazbs4bp09p.jpg",
//         "msgs": [],
//         "status": "pending" // pending, approved
//     },
//     {
//         "_id": "o4225",
//         "hostId": "u101",
//         "hostFullname": "Clem",
//         "hostImgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628",
//         "buyerId": "u103",
//         "buyerFullname": "Kamal",
//         "buyerImg": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg",
//         "totalPrice": 160,
//         "startDate": "2025/10/15",
//         "endDate": "2025/10/17",
//         "adults": 2,
//         "children": 1,
//         "infants": 0,
//         "stayId": "622f337a75c7d36e498aaafe",
//         "stayName": "Home, Sweet, Harlem. Welcome!",
//         "stayPrice": 110,
//         "stayImg": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436390/om97cgufeacwlric2r5w.jpg",
//         "msgs": [],
//         "status": "pending" // pending, approved
//     },
//     // {
//     //     "_id": "o2225",
//     //     "host": {
//     //         "_id": "u103",
//     //         "fullname": "Kamal",
//     //         "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
//     //     },
//     //     "buyer": {
//     //         "_id": "u104",
//     //         "fullname": "Inbar",
//     //         "imgUrl": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//     //     },
//     //     "totalPrice": 160,
//     //     "startDate": "2025/10/15",
//     //     "endDate": "2025/10/17",
//     //     "guests": {
//     //         "adults": 2,
//     //         "kids": 1
//     //     },
//     //     "stay": {
//     //         "_id": "622f337a75c7d36e498aaaf8",
//     //         "name": "Westin Kaanapali KORVN 2BR",
//     //         "price": 595,
//     //         "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
//     //     },
//     //     "msgs": [],
//     //     "status": "approved" // pending, approved
//     // },
//     // {
//     //     "_id": "o1725",
//     //     "host": {
//     //         "_id": "u103",
//     //         "fullname": "Kamal",
//     //         "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
//     //     },
//     //     "buyer": {
//     //         "_id": "u105",
//     //         "fullname": "Guy",
//     //         "imgUrl": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
//     //     },
//     //     "totalPrice": 160,
//     //     "startDate": "2025/10/15",
//     //     "endDate": "2025/10/17",
//     //     "guests": {
//     //         "adults": 2,
//     //         "kids": 1
//     //     },
//     //     "stay": {
//     //         "_id": "622f337a75c7d36e498aaaf8",
//     //         "name": "Westin Kaanapali KORVN 2BR",
//     //         "price": 595,
//     //         "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
//     //     },
//     //     "msgs": [],
//     //     "status": "approved" // pending, approved
//     // },
// ]

