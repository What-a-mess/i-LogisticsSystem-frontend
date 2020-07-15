import myaxios from "../plugins/myaxios"
import mockaxios from "../plugins/mockaxios"

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

export function getWarehousesList(mainsiteId) { // TODO: 换为myaxios
    return myaxios({
        url: "/mainsites/" + mainsiteId + "/warehouses",
        method: "GET"
    })
}

export function getItems(mainsiteId, props) { // TODO: 换为myaxios
    console.log(props)
    return mockaxios({
        url: "/mainsites/" + mainsiteId + "/items",
        props
    })
}