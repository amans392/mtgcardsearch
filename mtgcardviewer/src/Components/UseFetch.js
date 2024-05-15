import { useState, useEffect } from "react"
const useFetch = () => {
    const URL = "https://api.magicthegathering.io/v1/cards"
    const [data, setData] = useState(null) 

    useEffect(() => {
        fetch(URL)
        .then(res => {
            return res.json()
        })
        .then(data) => {
            console.log(data)
        }
    }, []);

}
export default useFetch;