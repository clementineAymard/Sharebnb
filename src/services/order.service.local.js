
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { stayService } from './stay.service.local.js'

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
}
window.cs = orderService


async function query(filterBy={}) {
    var orders = await storageService.query(STORAGE_KEY)

    if (filterBy.hostId) orders = orders.filter(order => order.hostId === filterBy.hostId)
    if (filterBy.userId) orders = orders.filter(order => order.buyer._id === filterBy.userId)

    return orders
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
    } else {
        // Later, buyer is set by the backend ?
        order.buyer = userService.getLoggedinUser()
        savedOrder = await storageService.post(STORAGE_KEY, order)
    }
    return savedStay
}

function getEmptyOrder() {
    return {
            hostId: '',
            buyer: {
              _id: '',
              fullname: ''
            },
            totalPrice: 160,
            startDate: '',
            endDate:'',
            guests: {
              adults: 0,
              kids: 0
            },
            stay :{
              _id: '',
              name: '',
              price: 0
            },
            msgs: [],
            status: '' // pending, approved/
    }
}

const orders = [
    {
      "_id": "o1225",
      "hostId": "u102",
      "buyer": {
        "_id": "u101",
        "fullname": "User 1"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "h102",
            "name": "House Of Uncle My",
            "price": 80.00
        },
        "msgs": [],
        "status": "pending" // pending, approved
    }
]

// ;(async () => {
//     await storageService.post(STORAGE_KEY, orders[0])
// })()