import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLaoding] = useState(true);

    useEffect(() => {
        async function fetchIt() {
            try {
                const response = await fetch(url);
                const jsonDat = await response.json();

                setData(jsonDat);
                setLaoding(false);
            } catch (error) {
                setErr(err);
                setLaoding(false);
            }
        }

        fetchIt();
    }, [url]);

    return { data, err, loading };
}

export { useFetch };