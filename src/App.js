import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
// import FAQ from './components/FAQ/FAQ';
import Menubar from './components/Menubar/Menubar';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
      {/* <FAQ /> */}
    </div>
  );
}

export default App;
