const isValid = (val, type) => {
    const value = val.trim()

    const validator = {
        phone: isValidPhone,
        email: isValidEmail,
        password: isValidPassword,
    }

    if (value !== "" && value.length > 2) {
        if (type) {
            return validator[type](value)
        }

        return true
    }

    return false
}

const isValidPhone = (val) => {
    const reg = /[\\\-_]/g
    const formattedValue = val.replace(reg, "")

    return formattedValue.length === 13
}

const isValidEmail = (val) => {
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

    return emailReg.test(val)
}

const isValidPassword = (val) => {
    /*
	Пароль должен содержать
	не меньше 1 строчной буквы
	не меньше 1 заглавной буквы
	не меньше 1 цифры
	Не меньше 8 символов
	*/
    const strongPassword = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    )

    return strongPassword.test(val)
}

export default isValid
