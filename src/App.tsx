import React from "react";
import "./App.css";
import TriviaApp from "./components/TriviaApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="header">Trivia</header>
      <main>
        <ul>
          <li>
            <Link to="/trivia">Trivia</Link>
          </li>
        </ul>
      </main>
      <footer className="footer">Created by ME</footer>
    </div>
    <Routes>
      <Route  path="/trivia" element={ <TriviaApp /> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
