import { FC, useEffect, useRef, useState } from "react";
import style from "./Hint.module.css";
import Image from "next/image";
import cn from "classnames";
import React from "react";

const Hint: FC = React.memo(({children}) => {
	const [open, setOpen] = useState(false);
	const button = useRef(null);

	const showHint = () => {
    event.preventDefault();
		setOpen(true);
	};

	const hideHint = () => {
		setOpen(false);
	};

	const isClickOutside = (e: MouseEvent) => {
    if (button.current != null) {
      const target = e.target as Element;

      button.current.contains(target) || hideHint();
    }
  };

	useEffect(() => {
		document.addEventListener('click', isClickOutside);
		
		return () => {
			document.removeEventListener('click', isClickOutside);
		};
	}, []);

	return (
    <div className={style.Container}>
      <button className={style.Button} onClick={showHint} ref={button}>
        <Image src={require("./Icon/question.svg")} />
      </button>

      <div
        className={cn(style.Hint, {
          [style.Open]: open,
        })}
      >
        {children}
      </div>
    </div>
  );
});

export {Hint};