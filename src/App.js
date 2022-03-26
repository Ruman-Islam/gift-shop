import { useState } from 'react';
import './App.css';
import FAQ from './components/FAQ/FAQ';
import Menubar from './components/Menubar/Menubar';
import Shop from './components/Shop/Shop';

function App() {
  const [itemsCount, setItemsCount] = useState(0);
  return (
    <div className="App">
      <Menubar itemsCount={itemsCount} />
      <Shop setItemsCount={setItemsCount} />
      <FAQ />
    </div>
  );
}

export default App;
