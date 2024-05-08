import React from "react";
import { useEffect, useState } from "react";


const Tile = ({flagUrl, name , altFlag})=>{
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            allignItems: "center",
            margin: "10px",
            padding: "10px",
            border: "3px solid black",
            borderRadius: "7px",
            flexDirection: "column",
            width: "200px",
            height: "200px"
        }}>
            <img src={flagUrl}
             alt={altFlag} 
             />
            <h2 style={{
                color: "white",
            }}>{name}</h2>
        </div>
    )
}


export const Countries = () => {

    const apiUrl = "https://restcountries.com/v3.1/all"

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log(err))
    }, [])

    console.log({ countries })



    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            allignItems: "center",
            height: "100vh",
            flexWrap: "wrap"
        }

        }>
        {  countries.map((country)=> <Tile flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt}/>)}

        </div>
    )
}




