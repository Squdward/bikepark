import { ChangeEvent, FC, useState } from "react";
import style                         from "./Switch.module.css";
import cn                            from "classnames";
import { ISwitch }                   from "./Switch.props";

const Switch: FC<ISwitch> = ({ selected, onChange, defaultValue, name, option }) => {
  console.log(selected, defaultValue);
	// const [select, setSelect] = useState('');

	// const valueHandler = (event: ChangeEvent ) => {
	// 	if (event.target != null) {
  //     setSelect(event.target.value);
  //   }
	// };

  return (
    <div>
      <span className={style.Name}>{name}</span>

      <div
        className={cn(style.Switch, {
          [style.Checked]: selected !== defaultValue,
        })}
      >
        {option &&
          option.map((item, index) => (
            <label 
              className={style.Option}
              onChange={onChange}
              key={index}
            >
              <input
                type="radio"
                name={item.name}
                value={item.value}
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
