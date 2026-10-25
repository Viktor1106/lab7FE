import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <hr />
      <h2>Завдання 2. Галерея товарів</h2>
      <Gallery />
    </div>
  );
}

export default App;