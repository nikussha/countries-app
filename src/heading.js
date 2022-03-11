import React from 'react'
import { useState } from 'react'

function Heading({ text, setText }) {
  return (
    <header className="header">
      <div className="form">
        <form>
          <label>
            Search
            <input
              type={'text'}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search country"
            ></input>
          </label>
        </form>
      </div>
    </header>
  )
}

export default Heading
