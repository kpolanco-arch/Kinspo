export const fetchPins = () => {
    return (
        $.ajax({
            url: '/api/pins',
            method: 'GET'
        })
    )
};


export const fetchPin = pinId => (
    $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'GET'
    })
);

export const createPin = pin => (
    $.ajax({
        url: '/api/pins/',
        method: 'POST',
        data: pin ,
        contentType: false,
        processData: false
    })
);

export const updatePin = pin => (
    $.ajax({
        url: `/api/pins/${pin.id}`,
        method: 'PATCH',
        data: { pin }
    })
);

export const deletePin = pinId => (
    $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'DELETE'
    })
);
