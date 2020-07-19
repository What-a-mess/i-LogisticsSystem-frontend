import myaxios from "../plugins/myaxios"

export function getOrderSettings() {
    return myaxios({
        url: "/settings/orderSettings",
        method: "GET"
    })
}

export function getsiteIOSettings() {
    return myaxios({
        url: "/settings/siteIOSettings",
        method: "GET"
    })
}

export function getSiteoutSettings() {
    return myaxios({
        url: "/settings/siteoutSettings",
        method:"GET"
    })
}