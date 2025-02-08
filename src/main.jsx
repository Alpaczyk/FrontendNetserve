import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import {createRoot} from "react-dom/client";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Navbar>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/App" element={<App />} />
          </Routes>
          </Navbar>
      </Router>
  </StrictMode>
);
