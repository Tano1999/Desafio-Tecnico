import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './styles/_app.scss';
import Banner from './components/Banner';
import AboutUs from './components/About';
import Catalogue from './components/Catalogue';
import {Footer} from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Contact } from './components/Contact';
import Form from './components/form';
import TestMain  from './components/TestMain';


function App() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="App">
      {/* header */}
      {/* < Header /> */}
      {/* <Banner /> */}
      {/* body */}
      {/* <AboutUs/> */}
      {/* <Catalogue/> */}
      {/* <Contact/> */}
      {/* footer */}
      {/* <Footer/> */}
      {/* <Form/> */}

      <TestMain/>
      <footer></footer>
      
    </div>
  );
}

export default App;
