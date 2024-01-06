import { useState } from 'react';
import './App.css';

function App() {
  const [love, setLove] = useState('');
  const [quotes, setQuotes] = useState('');
  return (
    <>
      <nav>Rio site</nav>
      <h1>{love}</h1>
      <h1>{quotes}</h1>
      <button
        onClick={() => {
          setLove('love you dari komplek cibalok');
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
