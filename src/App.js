import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Not_found from './component/Not_found/Not_found';
import About from './component/About/About';
import Courses from './Courses/Courses';
import Footer from './component/Footer/Footer';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
      {/*============== Shikkhangon eLearning header Router Start =============*/}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Not_found></Not_found>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      {/*============== Shikkhangon eLearning header Router End =============*/}
    </div>
  );
}

export default App;
