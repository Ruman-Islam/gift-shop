import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Menubar from './components/Menubar/Menubar';
import Orders from './components/Orders/Orders';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shop from './components/Shop/Shop';
import Banner from './components/Banner/Banner';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
// import FAQ from './components/FAQ/FAQ';

export const UseCartIcon = createContext();

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UseCartIcon.Provider
      value={[isCartOpen, setIsCartOpen, user, setUser]}>
      <div className="App page-container">
        <div className="content-wrap">
          <Menubar />
          <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <FAQ /> */}
        </div>
        <Footer />
      </div>
    </UseCartIcon.Provider>
  );
}

export default App;
