import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Country() {
  let { name } = useParams()
  let [singlecountry, setSingleCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((resp) => resp.json())
      .then((json) => setSingleCountry(json[0]))
  }, [])

  useEffect(() => {
    if (singlecountry) {
      console.log(singlecountry)
    }
  }, [singlecountry])

  return (
    <>
      {singlecountry ? (
        <div className="single">
          <img src={singlecountry.flag}></img>
          <h2 className="name">Name: {singlecountry.name}</h2>
          <h2>Capital: {singlecountry.capital}</h2>
          <h2>Population: {singlecountry.population}</h2>
          <h2>Region: {singlecountry.region}</h2>
          <h2>Cureencie: {singlecountry.currencies[0].name}</h2>
          <button className="btn">
            <Link to="/">Go Back</Link>
          </button>
        </div>
      ) : (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      )}
    </>
  )
}

export default Country
