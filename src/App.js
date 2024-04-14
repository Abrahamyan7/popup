import { useState } from 'react';
import './App.css';
import Popup from './components/popup/popup';

function App() {

  const [open, setOpen] = useState(false)


  return (
    <div className="App">
      <Popup open={open} setOpen={setOpen} />
      <header className='header'></header>
      <div className='app-body'>
        <button onClick={() => setOpen(!open)} className="btuON">Консультация</button>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
