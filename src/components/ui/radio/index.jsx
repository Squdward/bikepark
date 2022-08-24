import style from "./index.module.scss"

const Radio = ({ checked, label, name, ...props }) => {
    return (
        <label
            className={style.Wrapper}
            tabIndex={0}
        >
            <input
                type="radio"
                name={name}
                checked={checked}
                {...props}
            />
            <span className={style.Checkmark}></span>
            <span className={style.Label}>{label}</span>
        </label>
    )
}

export default Radio
