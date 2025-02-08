import { StrictMode } from 'react'
import '../styles/index.css'
import Shop from './Shop.jsx'
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import {createRoot} from "react-dom/client";
import Navbar from "../components/Navbar.jsx";
import Contact from "./Contact.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </Router>
  </StrictMode>
);
