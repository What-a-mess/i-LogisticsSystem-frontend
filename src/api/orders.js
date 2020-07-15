import myaxios from "../plugins/myaxios"

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