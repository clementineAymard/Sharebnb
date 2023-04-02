import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { stayService } from './stay.service.local.js'
import ordersDB from "./../../src/data/orders.json" assert { type: "json" }

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

    if (filterBy.hostId) orders = orders.filter(order => order.host._id === filterBy.hostId)
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
            host: {
              _id: '',
              fullname: '',
              imgUrl: ''
            },
            buyer: {
              _id: '',
              fullname: '',
              imgUrl: ''
            },
            totalPrice: 160,
            startDate: '',
            endDate:'',
            guests: {
              adults: 0,
              children: 0,
              infants: 0
            },
            stay :{
              _id: '',
              name: '',
              price: 0,
              imgUrl: ''
            },
            msgs: [],
            status: 'pending' // pending, approved/
    }
}

const orders = [
    {
      "_id": "o1225",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u101",
        "fullname": "Clem",
        "imgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628"
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
            "price": 595,
            "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1235",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u101",
        "fullname": "Clem",
        "imgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628"
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
            "price": 30,
            "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437045/dmquvficldi8ssfdlrrx.jpg"
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o8225",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u102",
        "fullname": "Shira",
        "imgUrl":"https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
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
            "price": 30,
            "imgUrl":"http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437045/dmquvficldi8ssfdlrrx.jpg"
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1295",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u102",
        "fullname": "Shira",
        "imgUrl":"https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
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
            "price": 595,
            "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o1125",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u106",
        "fullname": "Tal",
        "imgUrl":"https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80"
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
            "price": 595,
            "imgUrl":"http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o1265",
      "host":  {
        "_id": "u102",
        "fullname": "Shira",
        "imgUrl":"https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
      } ,
      "buyer": {
        "_id": "u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
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
            "price": 79,
            "imgUrl": "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436912/xle8ueqxjeazbs4bp09p.jpg"
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o4225",
      "host": {
        "_id": "u101",
        "fullname": "Clem",
        "imgUrl": "https://img.freepik.com/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg?w=1380&t=st=1680181859~exp=1680182459~hmac=38035667a19d20d04fbd3dfb34be02fc7a1339a2ee85cc27a4e1648e5c382628"
      },
      "buyer": {
        "_id": "u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
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
            "price": 110,
            "imgUrl":"http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436390/om97cgufeacwlric2r5w.jpg"
        },
        "msgs": [],
        "status": "pending" // pending, approved
    },
    {
      "_id": "o2225",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u104",
        "fullname": "Inbar",
        "imgUrl":"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            "price": 595,
            "imgUrl":"http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
    {
      "_id": "o1725",
      "host": {
        "_id" :"u103",
        "fullname": "Kamal",
        "imgUrl": "https://res.cloudinary.com/deayegq6w/image/upload/v1679227648/samples/people/smiling-man.jpg"
      },
      "buyer": {
        "_id": "u105",
        "fullname": "Guy",
        "imgUrl": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
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
            "price": 595,
            "imgUrl":"http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"
        },
        "msgs": [],
        "status": "approved" // pending, approved
    },
]

// utilService.saveToStorage(STORAGE_KEY, orders)
// utilService.saveToStorage(STORAGE_KEY, ordersDB)
 
//   // TEST DATA
  ;(async ()=>{
      await utilService.saveToStorage(STORAGE_KEY, ordersDB)
  })()


  console.log('llll');