import { useState, useCallback, useEffect } from "react";

export const useFetch = (url) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoadig] = useState(null);
    const [error, setError] = useState(null);
    const dataFetch = useCallback(async () => {
        setLoadig(true)
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("no se obtubo respuesta")
            const data = await res.json();
            setDatos(data);
        }
        catch (error) {
            setError(error)
            setDatos([])
        } finally {
            setLoadig(false)
        }
    }, []);



    useEffect(() => {
        dataFetch();
    }, []);

    return { datos, error, loading }
}