import { useState } from 'react';
import './App.css';

function App() {
  const [love, setLove] = useState('Rio gantenk site');
  return (
    <>
      <h1>{love}</h1>
      <button
        onClick={() => {
          setLove('BAPAK AKU ADIT');
        }}
      >
        pencet aku dong
      </button>
    </>
  );
}

export default App;
