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

// FOR ORDERLIST orderService.query({hostId : loggedinUser._id})
// FOR TRIPSLIST orderService.query({buyerId : loggedinUser._id})

async function query(filterBy={}) {
    var orders = await storageService.query(STORAGE_KEY)

    if (filterBy.hostId) orders = orders.filter(order => order.hostId === filterBy.hostId)
    if (filterBy.buyerId) orders = orders.filter(order => order.buyer._id === filterBy.buyerId)

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
    return savedOrder
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
            status: 'pending' // pending, approved/
    }
}

const orders = [
    {
      "_id": "o1225",
      "hostId": "u103",
      "buyer": {
        "_id": "u101",
        "fullname": "Clem"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf8",
            "name": "Westin Kaanapali KORVN 2BR",
            "price": 595
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1235",
      "hostId": "u103",
      "buyer": {
        "_id": "u101",
        "fullname": "Clem"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf9",
            "name": "Belle chambre à côté Metro Papineau",
            "price": 30
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o8225",
      "hostId": "u103",
      "buyer": {
        "_id": "u102",
        "fullname": "Shira"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf9",
            "name": "Belle chambre à côté Metro Papineau",
            "price": 30
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1295",
      "hostId": "u103",
      "buyer": {
        "_id": "u102",
        "fullname": "Shira"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf8",
            "name": "Westin Kaanapali KORVN 2BR",
            "price": 595
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o1125",
      "hostId": "u103",
      "buyer": {
        "_id": "u106",
        "fullname": "Tal"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf8",
            "name": "Westin Kaanapali KORVN 2BR",
            "price": 595
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o1265",
      "hostId": "u102",
      "buyer": {
        "_id": "u103",
        "fullname": "Kamal"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaafb",
            "name": "Fresh and modern 1BR in Bed-Stuy",
            "price": 79
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o4225",
      "hostId": "u101",
      "buyer": {
        "_id": "u103",
        "fullname": "Kamal"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaafe",
            "name": "Home, Sweet, Harlem. Welcome!",
            "price": 110
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o2225",
      "hostId": "u103",
      "buyer": {
        "_id": "u104",
        "fullname": "Inbar"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf8",
            "name": "Westin Kaanapali KORVN 2BR",
            "price": 595
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1725",
      "hostId": "u103",
      "buyer": {
        "_id": "u105",
        "fullname": "Guy"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
            "_id": "622f337a75c7d36e498aaaf8",
            "name": "Westin Kaanapali KORVN 2BR",
            "price": 595
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
]

// utilService.saveToStorage(STORAGE_KEY, orders)