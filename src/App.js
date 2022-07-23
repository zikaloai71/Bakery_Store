import './App.css';
// import db from "./firebase-config";
// import auth from "./firebase-config";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './pages/Products';
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route  path='/LogIn' element={<LogIn />}/>
      <Route  path='/SignUp' element={<SignUp />}/>
      <Route  path='/Cart' element={<Cart />}/>
      <Route path='/Products' element={<Products />}/>
      </Routes>
      <Footer />
    </Router>
    </>
    
  
  );
}

export default App;
