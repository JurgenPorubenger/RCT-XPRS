import React from 'react';
import './App.css';
import News from './Components/News';
// import Input from './Components/Input';
// eslint-disable-next-line import/no-named-as-default
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Всем привет!.
        <News data="ffff" />
        {' '}
        {/* добавили свойство data */}
      </header>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
