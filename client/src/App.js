import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import News from './Components/News/News'
// import Input from './Components/Input';
import RegisterForm from './Components/RegisterForm/Form'
import LoginForm from './Components/LoginForm/Form'
import Chat from './Components/chatPage/Chat.js'
import Join from './Components/Join/Join'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  )
}

export default App
