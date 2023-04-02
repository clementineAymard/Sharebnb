
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
    // addStayMsg,
    // removeStayMsg
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('stay')
        var stays = await collection.find(criteria).toArray()
        return stays
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = collection.findOne({ _id: new ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding stay ${stayId}`, err)
        throw err
    }
}

async function remove(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.deleteOne({ _id: new ObjectId(stayId) })
        return stayId
    } catch (err) {
        logger.error(`cannot remove stay ${stayId}`, err)
        throw err
    }
}

async function add(stay) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.insertOne(stay)
        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
}

async function update(stay) {
    try {
        const stayToSave = {
            vendor: stay.vendor,
            price: stay.price
        }
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: new ObjectId(stay._id) }, { $set: stayToSave })
        return stay
    } catch (err) {
        logger.error(`cannot update stay ${stayId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    console.log('BACKEND FILTER: ', filterBy)

    const criteria = {}
    if (filterBy.loc) {
        const locCriteria = { $regex: filterBy.loc, $options: 'i' }
        criteria.$or = [
            {
                "loc.country": locCriteria
            },
            {
                "loc.city": locCriteria
            }
        ]
    }
    if (filterBy.adults && filterBy.children && filterBy.infants) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.children) + parseInt(filterBy.infants)
        criteria.capacity = { $gte: capacityCriteria }
    }
    if (filterBy.adults && filterBy.children && !filterBy.infants) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.children)
        criteria.capacity = { $gte: capacityCriteria }
    }

    if (filterBy.adults && filterBy.infants && !filterBy.children) {
        const capacityCriteria = parseInt(filterBy.adults) + parseInt(filterBy.infants)
        criteria.capacity = { $gte: capacityCriteria }
    }
    if (filterBy.category) {
        criteria.labels = filterBy.category
    }

    console.log('criteria', criteria)

    return criteria
}
// async function addStayMsg(stayId, msg) {
//     try {
//         msg.id = utilService.makeId()
//         const collection = await dbService.getCollection('stay')
//         await collection.updateOne({ _id: new ObjectId(stayId) }, { $push: { msgs: msg } })
//         return msg
//     } catch (err) {
//         logger.error(`cannot add stay msg ${stayId}`, err)
//         throw err
//     }
// }

// async function removeStayMsg(stayId, msgId) {
//     try {
//         const collection = await dbService.getCollection('stay')
//         await collection.updateOne({ _id: new ObjectId(stayId) }, { $pull: { msgs: { id: msgId } } })
//         return msgId
//     } catch (err) {
//         logger.error(`cannot add stay msg ${stayId}`, err)
//         throw err
//     }
// }

