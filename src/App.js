import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Menubar from './components/Menubar/Menubar';
import Orders from './components/Orders/Orders';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shop from './components/Shop/Shop';
import Banner from './components/Banner/Banner';
import NotFound from './components/NotFound/NotFound';
// import FAQ from './components/FAQ/FAQ';
import './App.css';
import { createContext, useState } from 'react';

export const UseCartIcon = createContext();

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <UseCartIcon.Provider value={[isCartOpen, setIsCartOpen]}>
      <div className="App">
        <Menubar />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product-detail/:productId' element={<ProductDetail />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <FAQ /> */}
      </div>
    </UseCartIcon.Provider>
  );
}

export default App;
