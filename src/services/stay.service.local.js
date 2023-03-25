
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
    getLabels
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

function getLabels() {
  return [
      {
          key: 'Trending',
          url: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
      },
      {
          key: 'Adapted',
          url: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg',
      },
      {
          key: 'Tropical',
          url: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      },
      {
          key: 'Iconic',
          url: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
      },
      {
          key: 'Beachfront',
          url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      },
      {
          key: 'Campers',
          url: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg',
      },
      {
          key: 'Ryokans',
          url: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg',
      },
      {
          key: 'Minsus',
          url: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg',
      },
      {
          key: 'Play',
          url: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg',
      },
      {
          key: 'Hanoks',
          url: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
      },
      {
          key: 'Private',
          url: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      },
      {
          key: 'OMG!',
          url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      },
      {
          key: 'Skiing',
          url: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
      },
      {
          key: 'Private',
          url: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
      },
      {
          key: 'Off-the-grid',
          url: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
      },
      {
          key: 'Luxe',
          url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      },
      {
          key: 'Caves',
          url: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
      },
      {
          key: 'Boats',
          url: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
      },
      {
          key: 'Casas particulares',
          url: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg',
      },
      {
          key: 'new',
          url: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
      },
      {
          key: 'top',
          url: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg',
      },
      {
          key: 'Golfing',
          url: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
      },
      {
          key: 'Earth homes',
          url: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
      },
      {
          key: 'Countryside',
          url: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
      },
  ];
}
const stays = [
  {
    "_id": "101",
    "name": "Duplex",
    "type": "House",
    "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/bb4cf8ea4bd97c02cdd8198f1195b6b5_eaof7i.jpg"],
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/maxresdefault_euzz8v.jpg","https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/bb4cf8ea4bd97c02cdd8198f1195b6b5_eaof7i.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/Wyoming_20-_20Courtesy_20of_20Trulia_x6h8ev.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
      "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/image_sjcfbw.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
        "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475398/1_udeiwg.jpg","https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
          "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/kiawah_island-realtor_psnkc9.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
            "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/946121_873a_oo6b5j.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
              "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/99988ab9-ea42-4f60-b796-9c994a6a7fe9-falcon-nest_lpcjdx.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
                "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475783/c881fa97-90fc-4679-a251-8db9b4698fe3-floating-home-exterior_awgevt.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/eb_qjbemy.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/bb4cf8ea4bd97c02cdd8198f1195b6b5_eaof7i.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
                  "imgUrls": ["https://res.cloudinary.com/deayegq6w/image/upload/v1679475784/AM-Biance-1-1_zipc0o.jpg","https://res.cloudinary.com/deayegq6w/image/upload/v1679475457/dream-home-luxury-house-success_bsgev2.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475458/single-family-new-construction-home-in-suburb-neighborhood-in-the-south_qlwj6z.jpg", "https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg"],
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
  