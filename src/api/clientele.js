import myaxios from "../plugins/myaxios"

export function getCustomers(params){
    return myaxios({
        url: "/clientele/customers",
        method: "GET",
        params
    })
}

export function getSuppliers(params) {
    return myaxios({
        url: "/clientele/suppliers",
        method: "GET",
        params
    })
}

export function deleteSupplier(supplierId) {
    return myaxios({
        url: "/clientele/suppliers/" + supplierId,
        method: "DELETE"
    })
}

export function modifySupplier(supplierId, params) {
    return myaxios({
        url: "/clientele/supplier/"+supplierId,
        method: "PATCH",
        params
    })
}

export function getSupplierItems(supplierId) {
    return myaxios({
        url: "/clientele/suppliers/"+supplierId+"/itemSupply",
        method: "GET"
    })
}