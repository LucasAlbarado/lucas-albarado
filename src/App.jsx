import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";
import NavBarExample from "./layouts/navBar.jsx";
import Error404 from "./components/error404.jsx";
import LoginRegister from "./components/loginRegister.jsx";
import Menu from "./components/menu.jsx";
import Footer from "./layouts/footer.jsx";

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarExample isAuthenticated={isAuthenticated}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginRegister isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="error404" element={<Error404 />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
