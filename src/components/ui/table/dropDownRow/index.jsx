import React, { useState } from "react"
import Status from "../../status";
import style from "./index.module.scss";
import cn from "classnames";
import Button from "../../button";

const DropDownRow = () => {
	const [open, setOpen] = useState(false);

	return (
		<React.Fragment>
			<tr className={style.Row} onClick={() => setOpen(!open)}>
				<td>Заказ № 123423</td>
				<td>24.07.2021 </td>
				<td>630 AED</td>
				<td>Не оплачен</td>
				<td><Status statusNum={0} /></td>
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
								<tr>
									<td>Городской велосипед Schwinn Traveler 20” </td>
									<td>90 </td>
									<td>2 </td>
									<td>180 AED </td>
								</tr>
								<tr>
									<td>Городской велосипед Schwinn Traveler 20” </td>
									<td>180 </td>
									<td>2 </td>
									<td>360 AED </td>
								</tr>
								<tr>
									<td>Городской велосипед Schwinn Traveler 20” </td>
									<td>45  </td>
									<td>2 </td>
									<td>90 AED</td>
								</tr>
							</table>
							<div className={style.Footer}>
								<div className={style.Inner}>
									<div className={cn(style.Cell, style.Delivery)}>
										<span>Доставка</span>
										<span>0 AED</span>
									</div>
									<div className={cn(style.Cell, style.Price)}>
										<span>Итого</span>
										<span>300 AED</span>
									</div>
								</div>
								<div className={style.Info}>
									<div className={style.List}>
										<div>Тип аренды: 2 часа</div>
										<div>Период аренды: 18.03.21 14:00 – 04.04.21 14:00 </div>
										<div>Тип оплаты: На месте</div>
										<div>Тип доставки: Самовывоз</div>
									</div>
									<div className={style.Buttons}>
										<Button size={'full'} type="ghost">Отменить заказ</Button>
										<Button size={'full'}>Продлить аренду</Button>
									</div>
								</div>
							</div>
						</div>
					</td>
				</tr>}
		</React.Fragment>
	)
}

export default DropDownRow