import { useState } from "react"
import Button from "../../../ui/button";
import Input from "../../../ui/input";
import InputPassword from "../../../ui/inputPassword";
import style from "./index.module.scss"
import cn from "classnames"
import { useDispatch } from "react-redux/es/exports";
import { changePersonal } from "../../../../redux/slices/User";
import { UPDATE_PERSONAL } from "../../../../redux/sagas/root";

const Personal = ({ name, email, password, phone, adress}) => {
	const [isEdit, setIsEdit] = useState(false);
	const dispatch = useDispatch();

	const changeIsEdit = () => {
		if(isEdit) {
			setIsEdit(false);
			updateData()
		} else {
			setIsEdit(true)
		}
	}

	const updateData = (e) => {
		dispatch({type: UPDATE_PERSONAL, payload: {
			name,
			email,
			password,
			phone,
			adress
		}})
	}

	const changeData = (event) => {
		const name = event.target.name;
		const value = event.target.value

		dispatch(changePersonal({name, value}))
	}

	return ( 
		<div>
			<div className={style.Content}>
				<div className={style.Field}>
					<Input
						className={cn(style.Input, {
							[style.Disabled]: !isEdit
						})}
						label="Имя"
						name="name"
						value={name}
						disabled={!isEdit}
						onChange={changeData}
						required
					/>
				</div>

				<div className={style.Field}>
					<Input
						className={cn(style.Input, {
							[style.Disabled]: !isEdit
						})}
						label="E-mail"
						name="email"
						value={email}
						disabled={!isEdit}
						onChange={changeData}
						required
					/>
				</div>

				<div className={style.Field}>
					<InputPassword
						className={cn(style.Input, {
							[style.Disabled]: !isEdit
						})}
						label="Пароль"
						name={password}
						value="*************"
						disabled={!isEdit}
						onChange={changeData}
						required
					/>
				</div>

				<div className={style.Field}>
					<Input
						className={cn(style.Input, {
							[style.Disabled]: !isEdit
						})}
						label="Номер телефона"
						name="phoneNumber"
						value={phone}
						disabled={!isEdit}
						onChange={changeData}
						required
					/>
				</div>

				<div className={style.Field}>
					<Input
						className={cn(style.Input, {
							[style.Disabled]: !isEdit
						})}
						label="Адрес доставки"
						name="adress"
						value={adress}
						disabled={!isEdit}
						onChange={changeData}
						required
					/>
				</div>

			</div>
			<Button onClick={changeIsEdit}>
				{!isEdit 
					?	"Редактировать"
					: "Сохранить"
				}
			</Button>
		</div>
	)
}

export default Personal