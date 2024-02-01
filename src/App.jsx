import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";
import NavBarExample from "./layouts/navBar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
