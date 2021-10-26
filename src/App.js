
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContractUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
