import React from "react";

function LoginRegister() {
  return (
    <div>
      <div className="text-bienvenidos">
        <p>Bienvenidos a STREAM ON ROAD!</p>
      </div>
      <div className="row">
        <div className="col-lg-12 align-items-center align-self-center">
          <form className="form-login">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="Nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                No soy un robot
              </label>
              <a href="">¿Necesitas ayuda?</a>
            </div>
            <div className="mb-3">
              <p>
                ¿Primera vez? <a href="/ERROR404.html">Suscríbete aquí</a>
              </p>
            </div>
            <button type="submit" className="btn btn-primary" id="button-form">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
