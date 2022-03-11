import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Countries({ text, setText, countries, setCountries }) {
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((resp) => resp.json())
      .then((json) => setCountries(json))
  }, [])

  return (
    <>
      <div className="countries">
        {text !== '' ? (
          countries
            .filter((item) => {
              return item.name.toLowerCase().includes(text.toLowerCase())
            })
            .map((item) => {
              return (
                <div className="country" key={item.numericCode}>
                  <img src={item.flag}></img>
                  <h2>Name: {item.name}</h2>
                  <h3>Capital: {item.capital}</h3>
                  <h3>Region: {item.region}</h3>
                  <h3>Population: {item.population}</h3>
                  <Link to={`/${item.name}`}>Details</Link>
                </div>
              )
            })
        ) : (
          <>
            {countries.map((item) => {
              let { name, population, flag, capital, region } = item
              return (
                <div className="country" key={item.numericCode}>
                  <img src={flag}></img>
                  <h2>Name: {name}</h2>
                  <h3>Capital: {capital}</h3>
                  <h3>Region: {region}</h3>
                  <h3>Population: {population}</h3>
                  <Link to={`/${name}`}>Details</Link>
                </div>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}

export default Countries
