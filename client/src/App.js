import React from 'react';
import './App.css';
import News from "./Components/News";
import Input from "./Components/Input";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Всем привет, я компонент App! Я умею отображать новости.
        <News data={'ffff'} /> {/*добавили свойство data */}
      </header>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Input />
        </div>
    </div>
  );
}

export default App;
