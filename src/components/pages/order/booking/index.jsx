import style from "./index.module.scss";
import Bubble from "../../../ui/bubble"
import Hint from "../../../ui/hint"
import Input from "../../../ui/input";
import cn from "classnames";
import Button from "../../../ui/button";
import Radio from "../../../ui/radio";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../../redux/slices/Order";
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';

const Booking = () => {
	const { name, phoneNumber, adress, typePay} = useSelector(state => state.Order);
	const { endDate } = useSelector(state => state.MainFilter);
	const [disabled, setDisabled] = useState(true);
	const dispatch = useDispatch();

	const onChange = (e) => {
		const value = e.target.value;
		const name = e.target.name

		dispatch(setValue({name, value}))
	}

	const returnDate = new Date(endDate).toLocaleDateString(undefined, {day: '2-digit', month: '2-digit', year: '2-digit'} )
	const returnTime = new Date(endDate).toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'})

	const bookOrder = () => {
		console.log(name, phoneNumber, adress, typePay)
		try {
			// fetch
		} catch (error) {
			console.error(error)
		}
	}

	const isValid = (val, type) => {
		const value = val.trim();

		if(value !== '' && value.length > 2) {
			if(type === 'phone') {
				const reg = /[\(\)\-\_]/g;
				const formattedValue = val.replace(reg, "")

				return formattedValue.length === 13 ? true : false
			}
			
			return true 
		}
	}

	useEffect(() => {
		
		if(isValid(name) && isValid(phoneNumber, 'phone') && isValid(adress) && isValid(typePay) ) {
			setDisabled(false)
		} else {
			setDisabled(true);
		}
	}, [name, phoneNumber, adress, typePay])

	return (
		<Bubble tail={true}>
			<>
				<div className={style.Inner}>
					<div className={style.Column}>
						<fieldset className={style.Group}>
							<legend className={style.Label}>Контактные данные</legend>
								<Input placeholder="Имя*" name='name' className={style.Input} onChange={onChange} value={name}/>
								<InputMask mask={"+375(99)-999-99-99"} placeholder="Номер телефона*" name="phoneNumber" className={style.Input} onChange={onChange} value={phoneNumber}>
									{(inputProps) => <Input {...inputProps}/>}
								</InputMask>
						</fieldset>

						<fieldset className={style.Group}>
							<legend className={style.Label}>Информация о доставке</legend>
							<Input placeholder="Адрес*" className={style.Input} onChange={onChange} name="adress" value={adress}/>
						</fieldset>

						<fieldset className={style.Group}>
							<legend className={style.Label}>Форма оплаты</legend>

							<div className={cn(style.Cell, style.halfWidth)}>
								<Radio label={'Онлайн'} value={'Онлайн'} checked={typePay === 'Онлайн'} onChange={onChange} name='typePay'/>
							</div>

							<div className={cn(style.Cell, style.halfWidth)}>
								<Radio label={"На месте"} value={'На месте'} checked={typePay === 'На месте'} onChange={onChange} name='typePay'/>
								<Hint className={style.Hint}>Здесь будет подсказка</Hint>
							</div>
						</fieldset>
					</div>

					<div className={style.Column}>
						<fieldset className={style.Group}>
							<legend className={style.Label}>Фактическая дата возврата велосипеда</legend>
							<Input
								className={cn(style.Input, style.halfWidth)}
								disabled
								value={returnDate}
								required
								name="name"
							/>
							<Input
								className={cn(style.Input, style.halfWidth)}
								disabled
								value={returnTime}
								name="phoneNumber"
							/>
							<Input
								className={style.Input}
								placeholder="Возврат по адресу"
								disabled
								value="ул. Революционная 11"
								name="return"
							/>
						</fieldset>

						<div className={style.Rules}>
							<h4 className={style.Heading}>Возвращение велосипеда</h4>
							<p className={style.Answer}>На возвращение велосипеда даётся 1 час. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять
								Важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
							</p>
							<h4 className={style.Heading}>Выбор адреса для возврата</h4>
							<p className={style.Answer}>Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. </p>
						</div>
					</div>
				</div>

				<Button className={style.Button} onClick={bookOrder} disabled={disabled}>Забронировать</Button>
			</>
		</Bubble>
	)
}

export default Booking