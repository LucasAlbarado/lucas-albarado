import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/loginRegister.css";
import logo1 from "../images/logo1.png";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";


function LoginRegister({ setIsAuthenticated, setUserName}) {
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loginFormData, setLoginFormData] = useState({
    name: "",
    password: ""
  });
  useEffect(() => {
    // Verificar si hay un estado de autenticación almacenado en localStorage al cargar el componente
    const isAuthenticatedStorage = localStorage.getItem("isAuthenticated");
    const userNameStorage = localStorage.getItem("userName");
    if (isAuthenticatedStorage === "true" && userNameStorage) {
      setIsAuthenticated(true);
      setUserName(userNameStorage);
    }
  }, [setIsAuthenticated, setUserName]); // Solo se ejecuta una vez al cargar el componente

  const handleSignInClick = () => {
    setShowRegisterForm(false);
  };

  const handleSignUpClick = () => {
    setShowRegisterForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://nodejs-mysql-apirest-8516156f22db.herokuapp.com/api/login", loginFormData);
      console.log(response.data);
      setIsAuthenticated(true); // Cambiar el estado a autenticado
      localStorage.setItem("isAuthenticated", "true");
      setUserName(response.data.user.name); // Guardar el nombre de usuario en el estado
      localStorage.setItem("userName", response.data.user.name); // Guardar el nombre de usuario en localStorage
      Swal.fire({
        title: "Inicio de sesión exitoso",
        text: `¡Bienvenido de nuevo, ${response.data.user.name}!!`,
        icon: "success"
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error durante el inicio de sesión. Por favor, verifica tus credenciales e inténtalo de nuevo.",
        icon: "error"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://nodejs-mysql-apirest-8516156f22db.herokuapp.com/api/users", formData);
      console.log(response.data);
      Swal.fire({
        title: "Registro exitoso",
        text: "¡Tu cuenta ha sido creada correctamente!",
        icon: "success",
        confirmButtonText: "Ingresa aqui"
      }).then((result) => {
        if (result.isConfirmed) {
          handleSignInClick();
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo más tarde.",
        icon: "error"
      });
    }
  };
  
  

  return (
    <div className="main">
      <div
        className={`container-form ${showRegisterForm ? "registro" : "login"}`}
      >
        {showRegisterForm ? (
          <div className="information">
            <div className="welcome">
              <img
                src={logo1}
                alt="logo de la pagina"
                id="imagen-welcome"
                className="imagen-logo"
              />
              <h2>Bienvenido!</h2>
              <p>
                Si ya tienes una cuenta en ICONIK y quieres iniciar sesión, haz
                click en el botón.
              </p>
              <button onClick={handleSignInClick} id="button">
                Iniciar sesión
              </button>
            </div>
          </div>
        ) : (
          <div className="information">
            <div className="welcome">
              <img
                src={logo1}
                alt="logo de la pagina"
                id="imagen-welcome"
                className="imagen-logo"
              />
              <h2>Bienvenido de Nuevo!</h2>
              <p>Si aún no tienes una cuenta, haz click en el botón.</p>
              <button onClick={handleSignUpClick} id="button">
                Registrarse
              </button>
            </div>
          </div>
        )}
        <div className="form-information">
          {showRegisterForm ? (
            <div className="form-information-register">
              <h2>Crear una cuenta</h2>
              <div className="icons">
                <Link to="/Error404">
                  <FaGoogle className="bx bxl-google bx-flashing" />
                </Link>
                <Link to="/Error404">
                  <FaGithub className="bx bxl-github bx-flashing" />
                </Link>
                <Link to="/Error404">
                  <FaLinkedinIn className="bx bxl-linkedin bx-flashing" />
                </Link>
              </div>
              <p>USAR EMAIL PARA REGISTRARTE</p>
              <form onSubmit={handleSubmit} className="form" id="form-register">
                {/* Contenido del formulario de registro */}
                <label>
                  <i className="bx bx-user-circle"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre de Usuario"
                    maxLength="30"
                    id="username-r"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <i className="bx bx-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    maxLength="256"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email-r"
                    required
                  />
                </label>
                <label>
                  <i className="bx bx-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    minLength="8"
                    maxLength="16"
                    autoComplete="current-password"
                    id="password-r"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                <input type="submit" value="Registrarse" id="button" />
              </form>
            </div>
          ) : (
            <div className="form-information-register">
              <h2>Iniciar Sesión</h2>
              <div className="icons">
                <Link to="/Error404">
                  <FaGoogle className="bx bxl-google bx-flashing" />
                </Link>
                <Link to="/Error404">
                  <FaGithub className="bx bxl-github bx-flashing" />
                </Link>
                <Link to="/Error404">
                  <FaLinkedinIn className="bx bxl-linkedin bx-flashing" />
                </Link>
              </div>
              <p>Inicia sesión con el nombre se usuario</p>
              <form onSubmit={handleLoginSubmit} className="form" id="form-login">
                <label>
                  <i className="bx bx-user-circle"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre de Usuario"
                    maxLength="30"
                    id="username-l"
                    value={loginFormData.name}
                    onChange={handleLoginChange}
                    required
                  />
                </label>
                <label>
                  <i className="bx bx-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    minLength="8"
                    maxLength="16"
                    id="password-l"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </label>
                <input
                  type="submit"
                  value="Iniciar Sesión"
                  id="button"
                  className="iniciar-sesion"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
