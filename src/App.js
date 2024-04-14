import { useState } from 'react';
import './App.css';
import Popup from './components/popup/popup';
import Notification from './components/notification/notification';

function App() {

  const [open, setOpen] = useState(false)
  const [isAlertVisible, setAlertVisible] = useState(false);
  const handleOpenModal = () => {
    setOpen(!open)
    setAlertVisible(false)
  }


  return (
    <div className="App">
     {isAlertVisible &&  <Notification  type="success" message="You are welcome" />  } 
      <Popup open={open} setOpen={setOpen} isAlertVisible={isAlertVisible} setAlertVisible={setAlertVisible}/>
      <header className='header'></header>
      <div className='app-body'>
        <button onClick={handleOpenModal} className="btuON">Консультация</button>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
