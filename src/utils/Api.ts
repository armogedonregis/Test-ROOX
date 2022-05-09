import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = ({url}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const fetchData = () => {
        axios
            .get(url)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };
    useEffect(() => {
        fetchData();
    }, [url]);

    return { response, error, loading };
};