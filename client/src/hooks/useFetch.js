import { useState } from 'react'

function useFetch(p_url, method = 'GET', body = {}) {
    const [data, setData] = useState(null)
    const [url, setUrl] = useState(p_url);

    useFetch(() => {
        fetch(url, method !== 'GET' && {
            method,
            headers: {
                'content-type': 'application/type',
            },
            body: body
        }).then((response)=> response.json())
        .then((json)=> setData(json))
    }, [url])
    return [data, setUrl]
}

export default useFetch