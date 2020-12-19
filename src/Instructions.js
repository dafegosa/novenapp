import './App.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Gozos() {
  const history = useHistory()
  const enter = (e) => {
    const { value } = e.target
    console.log('hola')
    history.push(`/gozos`)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Para esta actividad debes de decubrir palabras que te permitirán
          continuar hasta el final.
        </p>
        <p>
          Deberás resolver acertijos para obtener las pistas que te llevarán a
          las diferentes palabras.
        </p>

        <p>
          Al final, podrás construir una oración, y si lo haces primero, serás
          el campeón.
        </p>
        <img
          style={{ width: '30%' }}
          src='https://res.cloudinary.com/dafegosa/image/upload/v1608321726/loguito_dwuxu8.png'
        />
        <br></br>
        <button onClick={enter}>Comenzar</button>
      </header>
    </div>
  )
}

export default Gozos
