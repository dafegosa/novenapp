import './App.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Gozos() {
  const history = useHistory()

  let number = 0
  const handleInputChange = (e) => {
    e.preventDefault()
    number = e.target.value
  }
  const checkMyAnswer = (e) => {
    e.preventDefault()
    console.log(number)
    if (number == 12) {
      history.push(`/pe`)
    } else {
      console.log('MAL')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={checkMyAnswer}>
          <p>
            Si la priemara pista quieres obtener, con el numero de gozos debes
            responder.
          </p>
          <input
            id='answer'
            name='answer'
            type='number'
            required
            onChange={handleInputChange}
          />
          <br></br>

          <button>Probar suerter</button>
        </form>
        <img
          style={{ width: '30%' }}
          src='https://res.cloudinary.com/dafegosa/image/upload/v1608321726/loguito_dwuxu8.png'
        />
        <br></br>
      </header>
    </div>
  )
}

export default Gozos
