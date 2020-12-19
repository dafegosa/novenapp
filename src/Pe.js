import './App.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Pe() {
  const history = useHistory()
  let answer = ''
  const handleInputChange = (e) => {
    e.preventDefault()
    answer = e.target.value
  }
  const checkMyAnswer = (e) => {
    e.preventDefault()
    console.log(answer)
    if (answer == 'convirtamonos') {
      history.push(`/rope`)
    } else {
      console.log('MAL')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={checkMyAnswer}>
          <h1>PISTA # 1</h1>
          <p>
            Encuentrame en el lugar en donde debes estar por si comienza a
            temblar.
          </p>
          <label>Ingresa la(s) palabra(s) encontradas</label>
          <input
            id='answer'
            name='answer'
            type='text'
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

export default Pe
