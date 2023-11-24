import { Icon } from "@iconify/react";
import { useId } from "react";

const InputRegistro = ({ label, name, type, icon, value, onChange }) => {
  const inputId = useId();

  return (
    <div className="input-cont">
      <span className="icon">
        <Icon icon={icon} />
      </span>
      <input
        type={type}
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
        required
        autoCapitalize="off"
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
};

export default InputRegistro;
