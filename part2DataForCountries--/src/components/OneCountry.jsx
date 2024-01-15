import React from 'react'

export default function OneCountry({ country }) {
    let langs = []
    Object.keys(country.languages).forEach(k => {
        // console.log("keyy", country.languages[k])
        langs.push(country.languages[k])
    })
    return (
        <div>
            country {country.name.common}
            <br></br>
            <ul>
                {
                    langs.map((l) => { return (<li>{l}</li>) })
                }
            </ul>
            <br></br>
            <img src={country.flags.png}></img>

        </div>
    )
}
