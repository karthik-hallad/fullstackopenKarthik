import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries.jsx'

export default function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountries(res.data)
        console.log(res.data)
      })
  }, [])

  let changeCountry = (country) => {
    setCountry(country)
  }

  return (
    <div>
      <h2> Find countries</h2>
      <input onChange={(e) => setCountry(e.target.value)} />

      <br />

      <Countries countries={countries} country={country} changeCountry={changeCountry} />




    </div>
  )
}
