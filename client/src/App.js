import React from 'react'
import './App.css'
// import News from './Components/News/News'
// import Input from './Components/Input';
import RegisterForm from './Components/RegisterForm/Form'
import LoginForm from './Components/LoginForm/Form'

function App () {
  return (
    <div className="App">
      <header className="App-header" />
      {/*  <News data="ffff" /> */}
      <RegisterForm />
      <LoginForm />
    </div>
  )
}

export default App
