import style from "./Checkbox.module.css";
import { FC } from "react";
import { ICheckbox} from "./Checkbox.props";
import cn from "classnames";

const Checkbox: FC<ICheckbox> = ({ id, onChange, checked, name, disabled=false, className}) => {
  return (
    <label htmlFor={id} className={style.Checkbox}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
        name={name}
        disabled={disabled}
        className={className}
      />
    </label>
  );
};

export default Checkbox;
