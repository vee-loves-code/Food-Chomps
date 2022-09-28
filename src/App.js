import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Nav from './components/header/Nav';
import About from './components/main/about/About';
import Contact from './components/main/contact/Contact';
import Faq from './components/main/faq/Faq';
import Menu from './components/main/menu/Menu';
import Order from './components/main/order/Order';
import Services from './components/main/services/Services';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Menu/>
      <Faq/>
      <Contact/>
      <Order/>
      <Footer/>
  
    </div>
  );
}

export default App;
