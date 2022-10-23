import React from 'react';
import './App.css';
import NavigationBar from "./components/navigationBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import CharactersPage from "./pages/characters";
import PlanetsPage from "./pages/planets";
import ShipsPage from "./pages/ships";
import routes from "./constants/routes";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <NavigationBar />
            <Routes>
                <Route path={routes.home.path} element={<HomePage />} />
                <Route path={routes.characters.path} element={<CharactersPage />} />
                <Route path={routes.planets.path} element={<PlanetsPage />} />
                <Route path={routes.ships.path} element={<ShipsPage />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
