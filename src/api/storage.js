import myaxios from "../plugins/myaxios"

export function getMainsiteInDetails(mainsiteId, recordId) {
    return myaxios({
        url: "/mainsites/"+mainsiteId+"/inventory/sitein/"+recordId,
        method: "GET"
    })
}

export function patchMainsiteInRecord(mainsiteId, recordId, data) {
    return myaxios({
        url: "/mainsites/"+mainsiteId+"/inventory/sitein/"+recordId,
        method: "PATCH",
        params: data,
    })
}