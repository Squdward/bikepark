import {memo} from "react"
import style from "./index.module.scss";

const Checkbox = memo(({ id, onChange, checked, name, disabled = false, className }) => {
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
	)
})

export default Checkbox