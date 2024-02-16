import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/loginRegister.css";
import logo1 from "../images/logo1.png";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

function LoginRegister() {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const handleSignInClick = () => {
    setShowRegisterForm(false);
  };

  const handleSignUpClick = () => {
    setShowRegisterForm(true);
  };

  const handleSuccessfulRegistration = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
    // Mostrar el mensaje con SweetAlert
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
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
              <form className="form" id="form-register">
                {/* Contenido del formulario de registro */}
                <label>
                  <i className="bx bx-user-circle"></i>
                  <input
                    type="text"
                    name="user"
                    placeholder="Nombre de Usuario"
                    maxLength="30"
                    id="username-r"
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
                    id="email-r"
                    required
                  />
                </label>
                <label>
                  <i className="bx bx-lock"></i>
                  <input
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    minLength="8"
                    maxLength="16"
                    autoComplete="current-password"
                    id="password-r"
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
              <p>Inicia sesión con email</p>
              <form className="form" id="form-login">
                <label>
                  <i className="bx bx-user-circle"></i>
                  <input
                    type="text"
                    name="user"
                    placeholder="Nombre de Usuario"
                    maxLength="30"
                    id="username-l"
                    required
                  />
                </label>
                <label>
                  <i className="bx bx-lock"></i>
                  <input
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    minLength="8"
                    maxLength="16"
                    autoComplete="email"
                    id="password-l"
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
