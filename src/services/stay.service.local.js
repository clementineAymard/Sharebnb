
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    // addStayMsg
}
window.cs = stayService


async function query(filterBy = { }) { // filterBy = { txt: '', price: 0 }
    var stays = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description))
    }
    if (filterBy.price) {
        stays = stays.filter(stay => stay.price <= filterBy.price)
    }
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)
    } else {
        // Later, host is set by the backend
        stay.host = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, stay)
    }
    return savedStay
}

// async function addStayMsg(stayId, txt) {
//     // Later, this is all done by the backend
//     const stay = await getById(stayId)
//     if (!stay.msgs) stay.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     stay.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, stay)

//     return msg
// }

function getEmptyStay() {
    return {
        name: '',
        price: '',
    }
}


const stays = [
  {
    "_id": "101",
    "name": "Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Top of the world",
        "Trending",
        "Play",
        "Tropical"
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "102",
      "name": "Nice Duplex",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        "price": 80.00,
        "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        "capacity": 8,
        "amenities": [
          "TV",
          "Wifi",
          "Kitchen",
          "Smoking allowed",
          "Pets allowed",
          "Cooking basics"
        ],
        "labels": [
          "Top of the world",
          "Trending",
          "Play",
          "Tropical"
        ],
        "host": {
          "_id": "u101",
          "fullname": "Davit Pok",
          "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        "loc": {
          "country": "Portugal",
          "countryCode": "PT",
          "city": "Porto",
          "address": "17 Kombo st",
          "lat": -8.61308,
          "lng": 41.1413
        },
        "reviews": [
          {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
              "_id": "u102",
              "fullname": "user2",
              "imgUrl": "/img/img2.jpg"
            }
          }
        ],
        "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "103",
      "name": "Charming House",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Top of the world",
        "Trending",
        "Play",
        "Tropical"
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "104",
      "name": "Beautiful Cottage",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Top of the world",
        "Trending",
        "Play",
        "Tropical"
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "105",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Top of the world",
        "Trending",
        "Play",
        "Tropical"
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "106",
      "name": "Nice Duplex",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=960", "otherImg.jpg"],
        "price": 80.00,
        "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        "capacity": 8,
        "amenities": [
          "TV",
          "Wifi",
          "Kitchen",
          "Smoking allowed",
          "Pets allowed",
          "Cooking basics"
        ],
        "labels": [
          "Top of the world",
          "Trending",
          "Play",
          "Tropical"
        ],
        "host": {
          "_id": "u101",
          "fullname": "Davit Pok",
          "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        "loc": {
          "country": "Portugal",
          "countryCode": "PT",
          "city": "Porto",
          "address": "17 Kombo st",
          "lat": -8.61308,
          "lng": 41.1413
        },
        "reviews": [
          {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
              "_id": "u102",
              "fullname": "user2",
              "imgUrl": "/img/img2.jpg"
            }
          }
        ],
        "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
        "_id": "107",
        "name": "Nice Duplex",
        "type": "House",
        "imgUrls": ["https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small", "otherImg.jpg"],
          "price": 80.00,
          "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed",
            "Cooking basics"
          ],
          "labels": [
            "Top of the world",
            "Trending",
            "Play",
            "Tropical"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
          },
          "loc": {
            "country": "Portugal",
            "countryCode": "PT",
            "city": "Porto",
            "address": "17 Kombo st",
            "lat": -8.61308,
            "lng": 41.1413
          },
          "reviews": [
            {
              "id": "madeId",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
              }
            }
          ],
          "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
          "_id": "108",
          "name": "Nice Duplex",
          "type": "House",
          "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
            "price": 80.00,
            "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
            "capacity": 8,
            "amenities": [
              "TV",
              "Wifi",
              "Kitchen",
              "Smoking allowed",
              "Pets allowed",
              "Cooking basics"
            ],
            "labels": [
              "Top of the world",
              "Trending",
              "Play",
              "Tropical"
            ],
            "host": {
              "_id": "u101",
              "fullname": "Davit Pok",
              "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
            },
            "loc": {
              "country": "Portugal",
              "countryCode": "PT",
              "city": "Porto",
              "address": "17 Kombo st",
              "lat": -8.61308,
              "lng": 41.1413
            },
            "reviews": [
              {
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 4,
                "by": {
                  "_id": "u102",
                  "fullname": "user2",
                  "imgUrl": "/img/img2.jpg"
                }
              }
            ],
            "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
            "_id": "109",
            "name": "Nice Duplex",
            "type": "House",
            "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=960", "otherImg.jpg"],
              "price": 80.00,
              "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
              "capacity": 8,
              "amenities": [
                "TV",
                "Wifi",
                "Kitchen",
                "Smoking allowed",
                "Pets allowed",
                "Cooking basics"
              ],
              "labels": [
                "Top of the world",
                "Trending",
                "Play",
                "Tropical"
              ],
              "host": {
                "_id": "u101",
                "fullname": "Davit Pok",
                "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
              },
              "loc": {
                "country": "Portugal",
                "countryCode": "PT",
                "city": "Porto",
                "address": "17 Kombo st",
                "lat": -8.61308,
                "lng": 41.1413
              },
              "reviews": [
                {
                  "id": "madeId",
                  "txt": "Very helpful hosts. Cooked traditional...",
                  "rate": 4,
                  "by": {
                    "_id": "u102",
                    "fullname": "user2",
                    "imgUrl": "/img/img2.jpg"
                  }
                }
              ],
              "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
              "_id": "110",
              "name": "Nice Duplex",
              "type": "House",
              "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
                "price": 80.00,
                "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                "capacity": 8,
                "amenities": [
                  "TV",
                  "Wifi",
                  "Kitchen",
                  "Smoking allowed",
                  "Pets allowed",
                  "Cooking basics"
                ],
                "labels": [
                  "Top of the world",
                  "Trending",
                  "Play",
                  "Tropical"
                ],
                "host": {
                  "_id": "u101",
                  "fullname": "Davit Pok",
                  "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
                },
                "loc": {
                  "country": "Portugal",
                  "countryCode": "PT",
                  "city": "Porto",
                  "address": "17 Kombo st",
                  "lat": -8.61308,
                  "lng": 41.1413
                },
                "reviews": [
                  {
                    "id": "madeId",
                    "txt": "Very helpful hosts. Cooked traditional...",
                    "rate": 4,
                    "by": {
                      "_id": "u102",
                      "fullname": "user2",
                      "imgUrl": "/img/img2.jpg"
                    }
                  }
                ],
                "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
                "_id": "111",
                "name": "Nice Duplex",
                "type": "House",
                "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
                  "price": 80.00,
                  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                  "capacity": 8,
                  "amenities": [
                    "TV",
                    "Wifi",
                    "Kitchen",
                    "Smoking allowed",
                    "Pets allowed",
                    "Cooking basics"
                  ],
                  "labels": [
                    "Top of the world",
                    "Trending",
                    "Play",
                    "Tropical"
                  ],
                  "host": {
                    "_id": "u101",
                    "fullname": "Davit Pok",
                    "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
                  },
                  "loc": {
                    "country": "Portugal",
                    "countryCode": "PT",
                    "city": "Porto",
                    "address": "17 Kombo st",
                    "lat": -8.61308,
                    "lng": 41.1413
                  },
                  "reviews": [
                    {
                      "id": "madeId",
                      "txt": "Very helpful hosts. Cooked traditional...",
                      "rate": 4,
                      "by": {
                        "_id": "u102",
                        "fullname": "user2",
                        "imgUrl": "/img/img2.jpg"
                      }
                    }
                  ],
                  "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
                  "_id": "112",
                  "name": "Nice Duplex",
                  "type": "House",
                  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
                    "price": 80.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 8,
                    "amenities": [
                      "TV",
                      "Wifi",
                      "Kitchen",
                      "Smoking allowed",
                      "Pets allowed",
                      "Cooking basics"
                    ],
                    "labels": [
                      "Top of the world",
                      "Trending",
                      "Play",
                      "Tropical"
                    ],
                    "host": {
                      "_id": "u101",
                      "fullname": "Davit Pok",
                      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
                    },
                    "loc": {
                      "country": "Portugal",
                      "countryCode": "PT",
                      "city": "Porto",
                      "address": "17 Kombo st",
                      "lat": -8.61308,
                      "lng": 41.1413
                    },
                    "reviews": [
                      {
                        "id": "madeId",
                        "txt": "Very helpful hosts. Cooked traditional...",
                        "rate": 4,
                        "by": {
                          "_id": "u102",
                          "fullname": "user2",
                          "imgUrl": "/img/img2.jpg"
                        }
                      }
                    ],
                    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
                  "_id": "113",
                  "name": "Nice Duplex",
                  "type": "House",
                  "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=960", "otherImg.jpg"],
                    "price": 80.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 8,
                    "amenities": [
                      "TV",
                      "Wifi",
                      "Kitchen",
                      "Smoking allowed",
                      "Pets allowed",
                      "Cooking basics"
                    ],
                    "labels": [
                      "Top of the world",
                      "Trending",
                      "Play",
                      "Tropical"
                    ],
                    "host": {
                      "_id": "u101",
                      "fullname": "Davit Pok",
                      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
                    },
                    "loc": {
                      "country": "Portugal",
                      "countryCode": "PT",
                      "city": "Porto",
                      "address": "17 Kombo st",
                      "lat": -8.61308,
                      "lng": 41.1413
                    },
                    "reviews": [
                      {
                        "id": "madeId",
                        "txt": "Very helpful hosts. Cooked traditional...",
                        "rate": 4,
                        "by": {
                          "_id": "u102",
                          "fullname": "user2",
                          "imgUrl": "/img/img2.jpg"
                        }
                      }
                    ],
                    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
    {
                  "_id": "114",
                  "name": "Nice Duplex",
                  "type": "House",
                  "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
                    "price": 80.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 8,
                    "amenities": [
                      "TV",
                      "Wifi",
                      "Kitchen",
                      "Smoking allowed",
                      "Pets allowed",
                      "Cooking basics"
                    ],
                    "labels": [
                      "Top of the world",
                      "Trending",
                      "Play",
                      "Tropical"
                    ],
                    "host": {
                      "_id": "u101",
                      "fullname": "Davit Pok",
                      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
                    },
                    "loc": {
                      "country": "Portugal",
                      "countryCode": "PT",
                      "city": "Porto",
                      "address": "17 Kombo st",
                      "lat": -8.61308,
                      "lng": 41.1413
                    },
                    "reviews": [
                      {
                        "id": "madeId",
                        "txt": "Very helpful hosts. Cooked traditional...",
                        "rate": 4,
                        "by": {
                          "_id": "u102",
                          "fullname": "user2",
                          "imgUrl": "/img/img2.jpg"
                        }
                      }
                    ],
                    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    },
  ]
  
  // TEST DATA
  // ;(async ()=>{
  //     await storageService.post(STORAGE_KEY, stays[0])
  //     await storageService.post(STORAGE_KEY, stays[1])
  //     await storageService.post(STORAGE_KEY, stays[2])
  //     await storageService.post(STORAGE_KEY, stays[3])
  //     await storageService.post(STORAGE_KEY, stays[4])
  //     await storageService.post(STORAGE_KEY, stays[5])
  //     await storageService.post(STORAGE_KEY, stays[6])
  //     await storageService.post(STORAGE_KEY, stays[7])
  //     await storageService.post(STORAGE_KEY, stays[8])
  //     await storageService.post(STORAGE_KEY, stays[9])
  //     await storageService.post(STORAGE_KEY, stays[10])
  //     await storageService.post(STORAGE_KEY, stays[11])
  //     await storageService.post(STORAGE_KEY, stays[12])
  //     await storageService.post(STORAGE_KEY, stays[13])
  //     await storageService.post(STORAGE_KEY, stays[14])
  // })()
  
  // Homepage: TOP categories: Best Rate / Houses / Kitchen  - show all - link to Explore
  // Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
  // See More => /explore?topRate=true
  // See More => /explore?type=House
  // See More => /explore?amenities=Kitchen
  // Explore page:
  // stayService.query({type: 'House'})
  
  // UserDetails
  //  basic info
  //  visitedStays => orderService.query({userId: 'u101'})
  //  myStayOrders => orderService.query({hostId: 'u101'})
  //  ownedStays => stayService.query({hostId: 'u103'})
  
  // StayEdit - make it super easy to add Stay for development
  // StayList, StayPreview
  // Order, confirm Order
  // Lastly: StayExplore, Filtering
  
  
  
  // Example - figuring up if the user is an owner:
  // userService.login()
    //  const userStays = stayService.query({ownerId: loggeinUser._id})
    //  loggeinUser.isOwner = userStays.length > 0
  