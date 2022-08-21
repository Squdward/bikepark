import React, { useState } from "react"
import Status from "../../status";
import style from "./index.module.scss";
import cn from "classnames";
import Button from "../../button";
import { useDispatch } from "react-redux/es/exports";
import { DELETE_ORDER } from "../../../../redux/sagas/root";
/*
	number: string | number,
	dataOrder: string,
	fullPrice: number,
	isPaid: string,
	status: 0 | 1 | 2 | 3 | 4
*/

const DropDownRow = (props) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch()

	const cancelOrder = () => {
		// post запрос на удаление 
		const answer = window.confirm('Вы уверены, что хотите отменить заказ? Это действие нельзя будет отменить.');
		if(answer) {
			dispatch({type: DELETE_ORDER, payload: props.id})
		} 
	}

	const extendOrder = () => {
		// редирект на страницу продления
		setTimeout(() => {
			alert('Продлена')
		}, 1000)
	}

	return (
		<React.Fragment>
			<tr className={style.Row} onClick={() => setOpen(!open)}>
				<td>Заказ №{props.number}</td>
				<td>{props.dataOrder}</td>
				<td>{props.fullPrice} AED</td>
				<td>{props.isPaid}</td>
				<td><Status statusNum={props.status} /></td>
			</tr>

		{/* Скрытая таблица */}
			{open &&
				<tr>
					<td colSpan={5} className={style.SuperCell}>
						<div className={style.Wrapper}>
							<table className={style.SecondTable}>
								<thead>
									<th>Велосипеды</th>
									<th>Цена</th>
									<th>Количество дней</th>
									<th>Сумма</th>
								</thead>
								{props.order && props.order.map( (item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.price}</td>
										<td>{item.days}</td>
										<td>{item.fullPrice}</td>
									</tr>
								))}
							</table>
							<div className={style.Footer}>
								<div className={style.Inner}>
									<div className={cn(style.Cell, style.Delivery)}>
										<span>Доставка</span>
										<span>{props.deliveryPrice} AED</span>
									</div>
									<div className={cn(style.Cell, style.Price)}>
										<span>Итого</span>
										<span>{props.fullPrice} AED</span>
									</div>
								</div>
								<div className={style.Info}>
									<div className={style.List}>
										<div>Тип аренды: 2 часа</div>
										<div>Период аренды: {props.rentStart} – {props.rentEnd} </div>
										<div>Тип оплаты: {props.payType}</div>
										<div>Тип доставки: {props.delivery}</div>
									</div>
									{props.status !== 3 ? <div className={style.Buttons}>
										<Button size={'full'} onClick={cancelOrder} type="ghost">Отменить заказ</Button>
										<Button size={'full'} onClick={extendOrder}>Продлить аренду</Button>
									</div>: ''}
								</div>
							</div>
						</div>
					</td>
				</tr>}
		</React.Fragment>
	)
}

export default DropDownRow