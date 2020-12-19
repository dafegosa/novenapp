import './App.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Believe() {
  const history = useHistory()
  let answer = ''
  const handleInputChange = (e) => {
    e.preventDefault()
    answer = e.target.value
  }
  const checkMyAnswer = (e) => {
    e.preventDefault()
    console.log(answer)
    if (answer == 'creamos') {
      console.log('BIEN')
    } else {
      console.log('MAL')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={checkMyAnswer}>
          <h1>PISTA # 3</h1>
          <p>
            En el primer piso o en el segundo piso. ¿En donde puede estar? Está
            en la casa, pero no hay mucho en donde buscar, pues ni cuartos ni
            baños en ella vas a encontar.
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

export default Believe
