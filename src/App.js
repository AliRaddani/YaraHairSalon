import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import './App.css';
import React from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />


        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
