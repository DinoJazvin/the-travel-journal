import React from 'react'
import './App.css'
import data from './data.js'
import Card from './Card.jsx'
import './App.css'
import './Card.css'


function App() {
  const dataItems = data.map(item => {
    return <Card items={item} />
  })

  return (
    <div>
      <nav>
          <img src="./src/images/globe.png"/>
          <h1>mytraveljournal.</h1>
      </nav>
      <div className="main-content-cards">
        {dataItems}
      </div>
    </div>
  )
}

export default App
