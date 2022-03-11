import './App.css'
import { BrowserRouter, Route, Routes, Links } from 'react-router-dom'
import { useState } from 'react'

// import files
import Countries from './countries'
import Heading from './heading'
import Country from './country'

function App() {
  let [text, setText] = useState('')
  const [countries, setCountries] = useState([])
  return (
    <>
      <Heading text={text} setText={setText}></Heading>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Countries
                text={text}
                setText={setText}
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
