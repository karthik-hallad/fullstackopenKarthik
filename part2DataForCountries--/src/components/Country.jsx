import React from 'react'

export default function Country({ country, show }) {
    return (
        <div id={country.area}>
            {country.name.common}
            <button onClick={show}>show</button>
        </div>
    )
}
