import { FC } from "react";
import style from "./Switch.module.css";
import cn from "classnames";
import { ISwitch } from "./Switch.props";

const Switch: FC<ISwitch> = ({
  selected,
  defaultValue,
  placeholder,
  name,
  option,
  onChange,
}) => {
  return (
    <div>
      <span className={style.Name}>{placeholder}</span>

      <div
        className={cn(style.Switch, {
          [style.Checked]: selected !== defaultValue,
        })}
      >
        {option &&
          option.map((item, index) => (
            <label className={style.Option} key={index}>
              <input
                type="radio"
                name={name}
                value={item.value}
                onChange={onChange}
                checked={selected === item.value}
              />
              {item.placeholder}
            </label>
          ))}
      </div>
    </div>
  );
};

export { Switch };
