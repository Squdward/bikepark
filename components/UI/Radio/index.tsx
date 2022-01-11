import style from "./Radio.module.css";

const Radio = ({label, name, checked}) => {
    return (
        <label className={style.Wrapper} tabIndex={0}>
            <input type="radio" name={name} checked={checked} />
            <span className={style.Checkmark}></span>
            <span className={style.Label}>{label}</span>
        </label>
    );
}

export {Radio}