import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing'
import { useState } from 'react';

function App() {
  const [final, setFinal] = useState(false)
  const [items, setItems] = useState(1)

  return (
    <div className="App">
      <NavBar final={final} setFinal={setFinal} items={items} setItems={setItems} />
      <Landing final={final} setFinal={setFinal} items={items} setItems={setItems} />
    </div>
  );
}

export default App;
