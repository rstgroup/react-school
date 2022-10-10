import React from 'react';
import './App.css';
import NavigationBar from "./components/navigationBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
