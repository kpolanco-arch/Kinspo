export const fetchSaved = () => (
    $.ajax ({
        url: "api/savepins",
        method: "GET"
    })
)

export const createSaved = (saved) => (
    $.ajax({
        url: "api/savepins",
        method: "POST",
        data: {saved}
    })
)

export const deleteSaved = (savedId) => (
    $.ajax({
        url: `api/savepins/${savedId}`,
        method: "DELETE"
    })
)