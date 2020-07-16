import myaxios from "../plugins/myaxios"
import mockaxios from "../plugins/mockaxios"

export function getOrders(props) {
    return mockaxios({ // TODO:改为myaxios
        url: "/orders",
        method: "GET",
        props
    })
}

export function getOrderDetail(orderId) {
    return mockaxios({ // TODO: 改为myaxios
        url: "/orders/" + orderId,
        method: "GET"
    })
}

export function getReturnForms(orderId) {
    return mockaxios({
        url: "/orders/" + orderId + "/returnforms",
        method: "GET"
    })
}

export function getTaskForms(orderId) {
    return mockaxios({
        url: "/orders/"+orderId+"/taskforms"
    })
}

export function patchOrderStatus(orderId, status) {
    console.log(orderId)
    console.log(status)
    return myaxios({
        url: "/orders/" + orderId + "/check",
        method: "PATCH",
        params: { processStatus: status }
    })
}

export function patchOrderInfo(orderId, data) {
    console.log(data);
    return myaxios({
        url: "/orders/" + orderId + "/check",
        method: "PATCH",
        params: data
    })
}

export function getExamineDetails(orderId) {
    return myaxios({
        url: "/orders/" + orderId + "/check",
        method: "GET"
    })
}