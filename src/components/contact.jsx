import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./contact.css";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(20, "El nombre debe tener menos de 20 caracteres")
    .matches(
      /^[a-zA-ZÁÉÍÓÚáéíóúüÜñÑ]+$/,
      "El nombre solo puede contener letras"
    )
    .required("El nombre es requerido"),
  user_lastname: Yup.string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(20, "El apellido debe tener menos de 20 caracteres")
    .matches(
      /^[a-zA-ZÁÉÍÓÚáéíóúüÜñÑ]+$/,
      "El apellido solo puede contener letras"
    )
    .required("El apellido es requerido"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
  message: Yup.string().required("El mensaje es requerida"),
});

function Contact() {
  const initialValues = {
    user_name: "",
    user_lastname: "",
    email: "",
    message: "",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtén referencias a los campos de nombre, correo electrónico y mensaje
    const name = e.target.user_name.value;
    const lastname = e.target.user_lastname.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Verifica si los campos requeridos están completos
    if (!name || !lastname || !email || !message) {
      // Si algún campo está vacío, no envíes el formulario
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    // Si todos los campos están completos, procede a enviar el formulario
    emailjs
      .sendForm(
        "service_oryn2cp",
        "template_y5sxiri",
        e.target,
        "i5hfe9nste3bmiAHY"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleSubmit = (values) => {
    // Aquí va la acción de envío de datos
    console.log(values);
  };

  return (
    <div className="contact">
      <Container className="container-contact">
        <Row>
          <Col xs={10} lg={6} className=" mx-auto col1-contact">
            <div className="d-flex align-items-center justify-content-center ">
              <h1 className="contact-h1 text-white" >Contactanos</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="formulario" ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="user_name">Nombre</label>
                    <Field
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Ingresa tu nombre aquí"
                      className={`form-control ${
                        errors.user_name && touched.user_name
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="user_name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_lastname">Apellido</label>
                    <Field
                      type="text"
                      id="user_lastname"
                      name="user_lastname"
                      placeholder="Ingresa tu apellido aquí"
                      className={`form-control ${
                        errors.user_lastname && touched.user_lastname
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="user_lastname"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nombre@correo.com"
                      className={`form-control ${
                        errors.email && touched.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message">Dejanos tu mensaje:</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={5}
                      className={`form-control ${
                        errors.message && touched.message ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="p-4 pt-2 pb-2"
                      value="Send"
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
