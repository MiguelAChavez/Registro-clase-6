import { Icon } from "@iconify/react";
import { useId } from "react";

const InputRegistro = ({ label, name, type, icon }) => {
  const inputId = useId();

  return (
    <div className="input-cont">
      <span className="icon">
        <Icon icon={icon} />
      </span>
      <input type={type} name={name} id={inputId} />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
};

export default InputRegistro;
