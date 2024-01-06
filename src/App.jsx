import { useState } from 'react';
import './App.css';

function App() {
  const [love, setLove] = useState('Rio gantenk site');
  return (
    <>
      <h1>{love}</h1>
      <button
        onClick={() => {
          setLove('I Love You❤');
        }}
      >
        pencet aku dong
      </button>
    </>
  );
}

export default App;
