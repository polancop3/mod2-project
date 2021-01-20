import './App.css';
import React from "react";
import Manga from './components/Manga'
import Anime from './components/Anime'
import Footer from './components/footer'
import About from './components/About'
import Header from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  render(){
  return (
    <div>
    <Router>
      <div className ="routes">
        <nav>
          <ul>
            <li>
              <Link to="/">Anime</Link>
            </li>
            <li>
              <Link to="/Manga">Manga</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
          <Header/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Manga">
            <Manga />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Anime />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer/>
    </div>
  );
  }
}


export default App;
