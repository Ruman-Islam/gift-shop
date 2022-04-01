import { Route, Routes } from 'react-router-dom';
import './App.css';
// import FAQ from './components/FAQ/FAQ';
import Menubar from './components/Menubar/Menubar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      {/* <FAQ /> */}
    </div>
  );
}

export default App;
