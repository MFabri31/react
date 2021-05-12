import React from "react";
import { useForm } from "../Hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco ';
  }
  if (!form.email.trim()) {
    errors.email = 'El campo "Email" es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.name = 'El campo "Email" es incorrecto ';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "Asunto" es requerido';
  }

  if (!form.message.trim()) {
    errors.message = 'El campo "Mensaje" es requerido';
  } else if (!regexMessage.test(form.message.trim())) {
    errors.name =
      'El campo "Mensaje" no debe ser exceder de los 255 caracteres  ';
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <>
      <h3>Contacto</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__fields">
          <label htmlFor="name" className="form__label">
            Nombre
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className="form__field"
            id="name"
            name="name"
            value={form.name}
            placholder="Escribe tu nombre..."
            required
          />
          {errors.name && <p style={{ fontSize: "1rem" }}>{errors.name}</p>}
        </div>
        <div className="form__fields">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            className="form__field"
            id="email"
            name="email"
            value={form.email}
            placholder="Escribe tu email..."
            required
          />
          {errors.email && <p style={{ fontSize: "1rem" }}>{errors.email}</p>}
        </div>
        <div className="form__fields">
          <label htmlFor="subject" className="form__label">
            Asunto
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className="form__field"
            id="subject"
            name="subject"
            value={form.subject}
            placholder="Asunto..."
            required
          />
          {errors.subject && (
            <p style={{ fontSize: "1rem" }}>{errors.subject}</p>
          )}
        </div>
        <div className="form__fields">
          <label htmlFor="message" className="form__label">
            Mensaje
          </label>
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            id="message"
            name="message"
            value={form.message}
            cols="50"
            rows="5"
            placeholder="Deja un mensaje..."
            required
          ></textarea>
          {errors.message && (
            <p style={{ fontSize: "1rem" }}>{errors.message}</p>
          )}
        </div>
        <input type="submit" value="Enviar" />
        {loading && <p>Enviando...</p>}
        {response && <p>Los datos se enviaron correctamente</p>}
      </form>
    </>
  );
};

export default ContactForm;
