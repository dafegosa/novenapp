import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import './App.css'

function App() {
  const history = useHistory()
  console.log(history)

  const enter = (e) => {
    console.log(history)
    console.log('history')
    history.push(`/instructions`)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>¡Bienvenido al dia Cuarto de novena!</p>
        <img
          style={{ width: '30%' }}
          src='https://res.cloudinary.com/dafegosa/image/upload/v1608321726/loguito_dwuxu8.png'
        />
        <br></br>
        <button onClick={enter}>Continuar</button>
      </header>
    </div>
  )
}

export default App
