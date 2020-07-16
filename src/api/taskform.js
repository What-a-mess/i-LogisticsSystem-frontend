import myaxios from "../plugins/myaxios"

export function getTaskFormDetail(taskFormId) {
    return myaxios({
        url: "/taskforms/" + taskFormId,
        method: "GET"
    })
}