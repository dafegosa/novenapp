import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  console.log(history)

  const enter = (e) => {
    console.log(history)
    console.log('history')
    history.push(`/welcome`)
  }
  return <div></div>
}

export default Home
