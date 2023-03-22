
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
    "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "otherImg.jpg"],
      "price": 160.00,
      "summary": "A house is a single-unit residential building.It may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other material, outfitted with plumbing, electrical, and heating, ventilation, and air conditioning systems.",
      "capacity": 6,
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
        "country": "Brazil",
        "countryCode": "PT",
        "city": "Rio de Janeiro",
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
      "name": "Panoramic View Villa in OliveGroves",
      "type": "House",
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "otherImg.jpg"],
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
          "country": "Italy",
          "countryCode": "PT",
          "city": "Rome",
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/maxresdefault_euzz8v.jpg", "otherImg.jpg"],
      "price": 140.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 3,
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
        "country": "France",
        "countryCode": "PT",
        "city": "Lyon",
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "otherImg.jpg"],
      "price": 110.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 4,
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
        "country": "Spain",
        "countryCode": "PT",
        "city": "Madrid",
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/Wyoming_20-_20Courtesy_20of_20Trulia_x6h8ev.jpg", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 2,
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
        "country": "Italy",
        "countryCode": "PT",
        "city": "Venice",
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
      "name": "Cozy bungalow with amazing seaview, secret garden",
      "type": "House",
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/image_sjcfbw.jpg", "otherImg.jpg"],
        "price": 180.00,
        "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        "capacity": 4,
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
          "country": "Brazil",
          "countryCode": "PT",
          "city": "São Paulo",
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
        "name": "New and modern apartment",
        "type": "House",
        "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475398/1_udeiwg.jpg", "otherImg.jpg"],
          "price": 160.00,
          "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
          "capacity": 4,
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
            "country": "France",
            "countryCode": "PT",
            "city": "Paris",
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
          "name": "The Garden Room",
          "type": "House",
          "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/kiawah_island-realtor_psnkc9.jpg", "otherImg.jpg"],
            "price": 140.00,
            "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
            "capacity": 3,
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
              "country": "Italy",
              "countryCode": "PT",
              "city": "Naples",
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
            "name": "Entire vacation home hosted by Simon & Nina",
            "type": "House",
            "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/946121_873a_oo6b5j.jpg", "otherImg.jpg"],
              "price": 150.00,
              "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
              "capacity": 4,
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
                "country": "Spain",
                "countryCode": "PT",
                "city": "Barcelona",
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
              "name": "Entire bungalow",
              "type": "House",
              "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/99988ab9-ea42-4f60-b796-9c994a6a7fe9-falcon-nest_lpcjdx.jpg", "otherImg.jpg"],
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
                "name": "Windows On The Bay",
                "type": "House",
                "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/c881fa97-90fc-4679-a251-8db9b4698fe3-floating-home-exterior_awgevt.jpg", "otherImg.jpg"],
                  "price": 70.00,
                  "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                  "capacity": 3,
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
                    "country": "Netherlands",
                    "countryCode": "PT",
                    "city": "Amsterdam",
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
                  "name": "Peaceful Getaway",
                  "type": "House",
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/eb_qjbemy.jpg", "otherImg.jpg"],
                    "price": 180.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 4,
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
                      "country": "Florida",
                      "countryCode": "PT",
                      "city": "Miami",
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
                  "name": "Apartment overlooking the sea and the mountains",
                  "type": "House",
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/bb4cf8ea4bd97c02cdd8198f1195b6b5_eaof7i.jpg", "otherImg.jpg"],
                    "price": 180.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 6,
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
                      "country": "France",
                      "countryCode": "PT",
                      "city": "Paris",
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
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/AM-Biance-1-1_zipc0o.jpg", "otherImg.jpg"],
                    "price": 180.00,
                    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                    "capacity": 4,
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
                      "country": "New York",
                      "countryCode": "PT",
                      "city": "New York",
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
  