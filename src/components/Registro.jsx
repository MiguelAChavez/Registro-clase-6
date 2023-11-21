import InputRegistro from "./InputRegistro";
import { INPUT_TYPE } from "../inputType";

export const Registro = () => {
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
      name: "email",
      type: INPUT_TYPE.EMAIL,
      icon: "ph:user-fill",
    },
    {
      label: "Teléfono",
      name: "phone",
      type: INPUT_TYPE.TEL,
      icon: "ph:user-fill",
    },
    {
      label: "Contraseña",
      name: "password",
      type: INPUT_TYPE.PASSWORD,
      icon: "ph:user-fill",
    },
    {
      label: "Confirmar contraseña",
      name: "ConfirmPassword",
      type: INPUT_TYPE.PASSWORD,
      icon: "ph:user-fill",
    },
  ];

  const handleSubmit = () => {
    alert("Ok 😁");
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
        ></InputRegistro>
      ))}
      <button type="submit">Registrar</button>
    </form>
  );
};
