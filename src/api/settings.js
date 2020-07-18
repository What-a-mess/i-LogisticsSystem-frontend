import myaxios from "../plugins/myaxios"

export function getsiteIOSettings() {
    return myaxios({
        url: "/settings/siteIOSettings",
        method: "GET"
    })
}