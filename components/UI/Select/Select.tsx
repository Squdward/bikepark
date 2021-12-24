import { FC, useEffect, useRef, useState } from "react";
import style from "./Select.module.css";
import cn from "classnames";
import { ISelect } from "./Select.props";
import React from "react";

const Select: FC<ISelect> = React.memo(({ options, defaultOption, id, onChange, label}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultOption);
  const select = useRef(null);

  const openMenu = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const isClickOutside = (e: MouseEvent) => {
    if (select.current != null) {
      const target = e.target as Element;

      select.current.contains(target) || closeMenu();
    }
  };

  const selectOption = (val: string) => {
    setValue(val);

    onChange(val);
    
    closeMenu();
  };

  useEffect(() => {
    document.addEventListener("click", isClickOutside);

    return () => {
      document.removeEventListener("click", isClickOutside);
    };
  });

  return (
    <div className={style.Select} ref={select}>
      <label htmlFor={id} className={style.Name}>
        {label}
      </label>

      <div className={style.Wrapper}>
        <button
          id={id}
          value={value}
          onClick={openMenu}
          className={cn(style.Button, {
            [style.Open]: open,
          })}
        >
          {value}
        </button>

        <ul
          className={cn(style.List, {
            [style.Open]: open,
          })}
        >
          {options &&
            options.map((item) => (
              <li
                className={cn(style.Option, {
                  [style.Checked]: value === item.value,
                })}
                onClick={() => selectOption(item.value)}
                key={item.id}
              >
                {item.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

export { Select };
