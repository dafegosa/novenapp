import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Instructions from './Instructions'
import Home from './Home'
import Gozos from './Gozos'
import Pe from './Pe'
import Rope from './Rope'
import Believe from './Believe'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={Home} />
      <Route path='/Welcome' component={App} />
      <Route path='/instructions' component={Instructions} />
      <Route path='/gozos' component={Gozos} />
      <Route path='/pe' component={Pe} />
      <Route path='/rope' component={Rope} />
      <Route path='/beli' component={Believe} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
