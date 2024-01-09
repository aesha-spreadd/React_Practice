import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, BrowserRouter, Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Lifecycle from './components/Lifecycle';
import ErrorPage from './ErrorPage';
import Favorite from './components/Favorite';
import Datafetch from './components/Datafetch';
import Header from './components/Header';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/lifecycle">Lifecycle</Link>
          </li>
          <li>
            <Link to="/datafetch">Datafetch</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/datafetch" element={<Datafetch />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <>
        <Favorite />
        <Header />
      </>
    </div>
  );
};

export default App;
