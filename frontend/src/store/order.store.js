import { orderService } from '../services/order.service'

export function getActionRemoveOrder(orderId) {
    return {
        type: 'removeOrder',
        orderId
    }
}
export function getActionAddOrder(order) {
    return {
        type: 'addOrder',
        order
    }
}
export function getActionUpdateOrder(order) {
    return {
        type: 'updateOrder',
        order
    }
}
export function getActionAddOrderMsg(orderId) {
    return {
        type: 'addOrderMsg',
        orderId,
        txt: 'Stam txt'
    }
}

export const orderStore = {
    state: {
        orders: [],
        currOrder: {}
    },
    getters: {
        orders({ orders }) { return orders },
        currOrder({ currOrder }) { return currOrder }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.unshift(order)
            state.currOrder = order
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(c => c._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async loadOrders(context, { filterBy }) {
            try {
                const orders = await orderService.query({...filterBy})
                context.commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },
        async addOrder(context, { order }) {
            try {
                order = await orderService.add(order)
                context.commit(getActionAddOrder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
        async updateOrder(context, { order }) {
            try {
                order = await orderService.save(order)
                context.commit(getActionUpdateOrder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in updateOrder', err)
                throw err
            }
        },
        async removeOrder(context, { orderId }) {
            try {
                await orderService.remove(orderId)
                context.commit(getActionRemoveOrder(orderId))
            } catch (err) {
                console.log('orderStore: Error in removeOrder', err)
                throw err
            }
        },

    }
}