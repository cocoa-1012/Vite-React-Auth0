const sendRequest = async (
    url: string,
    method: string,
    body: object,
) => {
    await fetch(url, {
        method: method,
        body: JSON.stringify({
            body: body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export default sendRequest;