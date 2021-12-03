import { ChangeEvent, FC, useState } from "react";
import style from "./Switch.module.css";
import cn from "classnames";
import { ISwitch } from "./Switch.props";

const Switch: FC<ISwitch> = ({ name, option }) => {
	const [select, setSelect] = useState('');

	const valueHandler = (event: ChangeEvent ) => {
		if (event.target != null) {
      setSelect(event.target.value);
    }
	};

  return (
    <div>
      <span className={style.Name}>{name}</span>

      <div
        className={cn(style.Switch, {
          [style.Checked]: select === "2 часа",
        })}
      >
        {option &&
          option.map((item, index) => (
            <label className={style.Option} onChange={valueHandler} key={index}>
              <input type="radio" name={item.name} value={item.value} />
              {item.placeholder}
            </label>
          ))}
      </div>
    </div>
  );
};

export { Switch };
