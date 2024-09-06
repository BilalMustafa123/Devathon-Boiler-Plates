import Display from "./Components/Display/Display";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import image from './assets/bg-black.jpeg'

function App() {
  return (
    <div>
      <Navbar />
      <div className="App bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <Home />
      </div>
      <Display />
      <Footer />
    </div>
  );
}

export default App;
