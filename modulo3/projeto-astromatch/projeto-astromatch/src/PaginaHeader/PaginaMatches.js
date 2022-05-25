import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_CLIENT,BASE_URL } from '../urls/urls';
import { height } from "@mui/system";

function PaginaMatches () {
    const [matches, setMatches] = useState(undefined)

    useEffect = (() => {
        getMatches()
    },[])
    const getMatches = () => {
        const url = `${BASE_URL}/${API_CLIENT} /matches`
        axios.get(url)
        .then((res)=>{
            setMatches(res.data.profile)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const todosMatches = matches && matches.map((match) =>{

    
        return (
            <figure key={match.id}>
            <img src={match.photo} alt={match["photo_alt"]}height={"270"}/>
            <span>{match.name}</span>
            </figure>

        );
    })
return (
    <div>
        <h2> Matches</h2>
        {todosMatches}
    </div>

)
}


export default PaginaMatches;