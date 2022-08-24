import Checkbox from "../checkbox"
import Hint from "../hint"
import style from "./index.module.scss"

const TypeCards = ({
    material,
    price,
    hint,
    image,
    name,
    checked,
    onChange,
}) => {
    return (
        <div className={style.Card}>
            <div className={style.Wrapper}>
                <img
                    src={image}
                    className={style.Image}
                    alt={"img"}
                />
            </div>

            <div className={style.Body}>
                <p className={style.Material}>{material}</p>

                <div className={style.Info}>
                    <span className={style.Price}>{price}</span>

                    <div className={style.Control}>
                        <Hint>{hint}</Hint>

                        <Checkbox
                            name={name}
                            className={style.Checkbox}
                            id={"test"}
                            checked={checked}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeCards
