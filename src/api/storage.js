import myaxios from "../plugins/myaxios"
import qs from "qs"
// import mockaxios from "../plugins/mockaxios"

export function getMainsiteInDetails(mainsiteId, recordId) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/inventory/sitein/" + recordId,
        method: "GET"
    })
}

export function patchMainsiteInRecord(mainsiteId, recordId, data) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/inventory/sitein/" + recordId,
        method: "PATCH",
        params: data,
    })
}

export function getMainsiteOutDetails(mainsiteId, recordId) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/inventory/siteout/" + recordId,
        method: "GET"
    })
}

export function patchMainsiteOutRecord(mainsiteId, recordId, data) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/inventory/siteout/" + recordId,
        method: "PATCH",
        params: data,
    })
}

export function getWarehousesList(mainsiteId) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/warehouses",
        method: "GET"
    })
}

export function getItems(mainsiteId, params) {
    console.log(params)
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/items",
        method: "GET",
        params,
        paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    })
}

export function transferItem(mainsiteId, itemId, params) {
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/items/" + itemId,
        method: "PATCH",
        params
    })
}

export function getItemList() {

}