const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    console.log('filterBy query: ', filterBy)
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('order')
        const orders = await collection.find(criteria).toArray()
        // var reviews = await collection.aggregate([
        //     {
        //         $match: criteria
        //     },
        //     {
        //         $lookup:
        //         {
        //             localField: 'byUserId',
        //             from: 'user',
        //             foreignField: '_id',
        //             as: 'byUser'
        //         }
        //     },
        //     {
        //         $unwind: '$byUser'
        //     },
        //     {
        //         $lookup:
        //         {
        //             localField: 'aboutUserId',
        //             from: 'user',
        //             foreignField: '_id',
        //             as: 'aboutUser'
        //         }
        //     },
        //     {
        //         $unwind: '$aboutUser'
        //     }
        // ]).toArray()
        // reviews = reviews.map(review => {
        //     review.byUser = { _id: review.byUser._id, fullname: review.byUser.fullname }
        //     review.aboutUser = { _id: review.aboutUser._id, fullname: review.aboutUser.fullname }
        //     delete review.byUserId
        //     delete review.aboutUserId
        // return review
        // })
        // console.log('orders:', orders)
        return orders
    } catch (err) {
        logger.error('cannot find orders', err)
        throw err
    }

}

async function remove(orderId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { loggedinUser } = store
        const collection = await dbService.getCollection('order')
        // remove only if user is owner/admin
        const criteria = { _id: new ObjectId(orderId) }
        if (!loggedinUser.isAdmin) criteria.buyerId = new ObjectId(loggedinUser._id)
        const { deletedCount } = await collection.deleteOne(criteria)
        return deletedCount
    } catch (err) {
        logger.error(`cannot remove order ${orderId}`, err)
        throw err
    }
}

async function add(order) {
    try {
        const orderToAdd = {
            buyerId: order.buyerId,
            buyerFullname: order.buyerFullname,
            buyerImg: order.buyerImg,
            hostId: order.hostId,
            hostFullname: order.hostFullname,
            imgUrl: order.hostImgUrl,
            totalPrice: order.totalPrice,
            startDate: order.startDate,
            endDate: order.endDate,
            adults: order.adults,
            children: order.children,
            infants: order.infants,
            stayId: order.stayId,
            stayName: order.stayName,
            stayPrice: order.stayPrice,
            stayImg: order.stayImg,
            msgs: [],
            status: 'pending'
        }
        // console.log('orderToAdd:', orderToAdd)
        const collection = await dbService.getCollection('order')
        await collection.insertOne(orderToAdd)
        return orderToAdd
    } catch (err) {
        logger.error('cannot insert order (ORDER.SERVICE L.106)', err)
        throw err
    }
}

async function update(order) {
    var savedOrder
    try {
        // savedOrder = await httpService.put('order', order)
        const collection = await dbService.getCollection('order')
        await collection.updateOne({ _id: new ObjectId(order._id) }, { $set: { status: order.status } })

        return savedOrder
    } catch (err) {
        console.log('Order service could not save order')
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.buyerId) criteria.buyerId = filterBy.buyerId
    if (filterBy.hostId) criteria.hostId = filterBy.hostId
    return criteria
}

module.exports = {
    query,
    remove,
    add,
    update
}


