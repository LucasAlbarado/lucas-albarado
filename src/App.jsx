import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";
import NavBarExample from "./layouts/navBar.jsx";
import Error404 from "./components/error404.jsx";
import LoginRegister from "./components/loginRegister.jsx";
import Menu from "./components/menu.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginRegister />} />
            <Route path="error404" element={<Error404 />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
