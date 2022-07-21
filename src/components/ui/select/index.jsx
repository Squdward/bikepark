import style from "./index.module.scss"
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

const Select = ({ options, defaultOption, id, onChange, label, name }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(defaultOption || options[0].label);
	const select = useRef(null);

	const openMenu = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	const isClickOutside = (e) => {
		if (select.current != null) {
			const target = e.target;

			select.current.contains(target) || closeMenu();
		}
	};

	const selectOption = (val, label) => {
		setValue(label);

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
								onClick={() => selectOption(item.value, item.label)}
								key={item.id}
							>
								{item.label}
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default Select