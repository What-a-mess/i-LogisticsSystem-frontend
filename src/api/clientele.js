import myaxios from "../plugins/myaxios"

export function getCustomers(params){
    return myaxios({
        url: "/clientele/customers",
        method: "GET",
        params
    })
}

export function getSuppliers() {
    return myaxios({
        url: "/clientele/suppliers",
        method: "GET"
    })
}

export function deleteSupplier(supplierId) {
    return myaxios({
        url: "/clientele/suppliers/" + supplierId,
        method: "DELETE"
    })
}