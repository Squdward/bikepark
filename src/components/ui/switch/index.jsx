import cn from "classnames"

import style from "./index.module.scss"

const Switch = ({
    placeholder,
    selected,
    defaultValue,
    option,
    onChange,
    name,
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
                        <label
                            className={style.Option}
                            key={index}
                        >
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
    )
}

export default Switch
