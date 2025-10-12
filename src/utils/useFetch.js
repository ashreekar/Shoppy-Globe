import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted=true;
        async function callApi() {
            try {
                setLoading(true);
                const response = await fetch(url);
               
                const data = await response.json();

                if (data) {
                    setdata(data);
                }

                if (!isMounted) return;

            } catch (error) {
                seterror(error);
            } finally {
                setLoading(false);
            }
        }

        callApi();

        return ()=>{
            isMounted=false;
        }
    }, [url]);

    return { data, error, loading };
}

export { useFetch };