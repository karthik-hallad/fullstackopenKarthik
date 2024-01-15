import React from 'react'
import Country from './Country.jsx'
import OneCountry from './OneCountry.jsx'

export default function Countries({ countries, country, changeCountry }) {
    console.log(country)

    let result = countries.filter((c) => c.name.common.toLowerCase().includes(country.toLowerCase()))

    let show = (country) => {
        changeCountry(country.name.common)
    }

    if (result.length > 10) {
        return (
            <div>
                {/* {JSON.stringify(result)} */}
                Too Many Records
            </div>
        )
    }

    if (result.length == 1) {
        return (
            <div>
                <OneCountry country={result[0]} />
            </div>
        )
    }

    return (
        <div>
            {
                result.map((country) => {
                    return <Country country={country} show={() => show(country)} />
                })
            }
        </div>
    )




}
