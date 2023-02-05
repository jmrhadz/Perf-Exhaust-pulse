import Navbar from './components/navbar';
import ProductGrid from './components/productGrid'
import './App.css';


function App() {
  return (
    <div className="App bg-dark">
      <Navbar theme="dark" hasLogo={true} brand="Performance Exhuast Plus" tagline="Dual Exhaust Kits for your Truck" info={false} button="Buy Now"/>
      <Navbar theme="warning" hasLogo={false} brand={false} tagline={false} info="Editing Page" button="Publish Products"/>
      <div className="row">
        <div className="col-10 container bg-info"><ProductGrid/></div>
      </div>
    </div>
  );
}

export default App;
