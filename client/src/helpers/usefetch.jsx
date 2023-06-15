import React, { useEffect, useState } from 'react'

function usefetch(url, method = "GET", body = {}) {

    const [data, setData] = useState({});

    useEffect(() => {
        const options = method !== 'GET' ? {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        } : null

        fetch(url, options)
            .then((resp) => {
                console.log(resp)
                if (!resp.ok) throw new Error(resp.error)
                return resp.json()
            })
            .then((json) => {
                setData(json);
            })
    }, [url])
    return [data, setData];
}

export default usefetch