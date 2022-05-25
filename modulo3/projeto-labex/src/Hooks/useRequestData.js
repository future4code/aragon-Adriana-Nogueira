import axios from "axios"
import { useEffect, useState } from "react"
import { API_CLIENT, BASE_URL } from "../urls/url"




const useRequestData=(path, initialState) => {
    const [data, setData] = useState(initialState)
    const getData = ( ) => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios.get(`${BASE_URL}/${API_CLIENT}/${path}`, header)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert(err.message);
        });
};
    useEffect(() => {
        getData()
    }, [])
        return[data,getData]
    }
    export default useRequestData
