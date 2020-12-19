import './App.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Rope() {
  const history = useHistory()
  let answer = ''
  const handleInputChange = (e) => {
    e.preventDefault()
    answer = e.target.value
  }
  const checkMyAnswer = (e) => {
    e.preventDefault()
    console.log(answer)
    if (answer == 'de corazón,') {
      history.push(`/beli`)
    } else {
      console.log('MAL')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={checkMyAnswer}>
          <h1>PISTA # 2</h1>
          <p>
            Diana tiene la pista. Buscala,pidele la cuerta y ¡A saltar!, 50
            saltos deben lograr, todo el equipo tiene que participar
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

export default Rope
