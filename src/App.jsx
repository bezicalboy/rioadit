import { useState } from 'react';
import './App.css';

function App() {
  const [love, setLove] = useState('Rio gantenk site');
  const [quotes, setQuotes] = useState('');
  return (
    <>
      <h1>{love}</h1>
      <h1>{quotes}</h1>
      <button
        onClick={() => {
          setLove('BAPAK AKU ADIT');
        }}
      >
        pencet aku dong
      </button>
      <button
        onClick={() => {
          setQuotes('jika kamu pusing tidurlah');
        }}
      >
        Quotes hari ini
      </button>
    </>
  );
}

export default App;
