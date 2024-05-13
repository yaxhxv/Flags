import React from "react";
import { useEffect, useState } from "react";


const Tile = ({flagUrl, name , altFlag})=>{
    return (
        <div className="countryCard" style={{
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
                color: "black",
            }}>{name}</h2>
        </div>
    )
}




export const Countries = () => {

    const apiUrl = "https://restcountries.com/v3.1/all"

    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log(err))
    }, [])

    console.log({ countries })

   const handleSearch = (e) =>{
    setSearchTerm(e.target.value)
   } ;

   const filteredCountries = countries.filter((country) =>
country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))



    return (

        <>
        <input type="text" style={{
            height:"6vh",
            width:"44vw"
        }} placeholder="Search for countries"  onChange={handleSearch}/>



        <div style={{
            display: "flex",
            justifyContent: "center",
            allignItems: "center",
            height: "100vh",
            flexWrap: "wrap"
        }

        }>
           
             
           {filteredCountries.map((country) => (
          <Tile
            key={country.cca3}
            flagUrl={country.flags.png}
            name={country.name.common}
            altFlag={country.flags.alt}
          />
        ))}

        </div>

        </>
    )
}




