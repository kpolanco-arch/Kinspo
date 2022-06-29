export const fetchSaved = () => (
    $.ajax ({
        url: "api/savepins",
        method: "GET"
    })
)

export const createSaved = (savepin) => (
    $.ajax({
        url: "api/savepins",
        method: "POST",
        data: {savepin}
    })
)

export const deleteSaved = (savedId) => (
    $.ajax({
        url: `api/savepins/${savedId}`,
        method: "DELETE"
    })
)