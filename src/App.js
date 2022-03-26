import './App.css';
import FAQ from './components/FAQ/FAQ';
import Menubar from './components/Menubar/Menubar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Shop />
      <FAQ />
    </div>
  );
}

export default App;
