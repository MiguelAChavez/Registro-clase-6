import React, { useState } from "react";
import InputRegistro from "./InputRegistro";
import { INPUT_TYPE } from "../inputType";

const inputConfig = [
  {
    label: "Nombre",
    name: "name",
    type: INPUT_TYPE.TEXT,
    icon: "ph:user-fill",
  },
  {
    label: "Apellido",
    name: "lastName",
    type: INPUT_TYPE.TEXT,
    icon: "ph:user-fill",
  },
  {
    label: "Email",
    name: "mail",
    type: INPUT_TYPE.EMAIL,
    icon: "material-symbols:mail",
  },
  {
    label: "Teléfono",
    name: "phone",
    type: INPUT_TYPE.TEL,
    icon: "material-symbols:phone-in-talk-watchface-indicator",
  },
  {
    label: "Contraseña",
    name: "password",
    type: INPUT_TYPE.PASSWORD,
    icon: "teenyicons:password-solid",
  },
  {
    label: "Confirmar contraseña",
    name: "confirmPassword",
    type: INPUT_TYPE.PASSWORD,
    icon: "teenyicons:password-solid",
  },
];

const initialValues = {
  name: "",
  lastName: "",
  mail: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const Registro = () => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden 😢");
      return;
    }
    alert("Ok 😁");
    setFormData(initialValues);
    console.log(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {inputConfig.map((input, index) => (
        <InputRegistro
          key={index}
          label={input.label}
          name={input.name}
          type={input.type}
          icon={input.icon}
          value={formData[input.name]}
          onChange={handleInputChange}
        ></InputRegistro>
      ))}
      <section className="btn-cont">
        <button className="btn-register" type="submit">
          Registrar
        </button>
      </section>
    </form>
  );
};
