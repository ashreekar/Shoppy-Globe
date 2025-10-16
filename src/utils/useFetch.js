import { useState, useEffect } from "react"

const useFetch = (url) => {
    // setting up data,load and err states for updation on call of useEffect
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted=true;  // for better peofrmence by eleminating the previous ongoing call
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
// cleanup functioon to abort ongoing api call on component unmount
        return ()=>{
            isMounted=false;
        }
    }, [url]);

    // returning data,error,loading
    return { data, error, loading };
}

export { useFetch };