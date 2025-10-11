import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function callApi() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();

                if (response.status === 200 && data) {
                    setdata(data);
                }
                if(response.status===404){
                    setNotFound(true);
                }
            } catch (error) {
                seterror(error);
            } finally {
                setLoading(false);
            }
        }

        callApi();
    }, [url]);

    return { data, error, loading, notFound };
}

export { useFetch };