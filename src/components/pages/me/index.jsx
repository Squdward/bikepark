import Layout from "../../layouts/layout"
import Bubble from "../../ui/bubble"
import Tabs from "../../ui/tabs"
import CurrentOrder from "./currentOrder";
import style from "./index.module.scss";

const Me = () => {
	const TabList = [
		{
			placeholder: 'Текущие заказы',
			content: () => <CurrentOrder/>
		},
		{
			placeholder: 'Выполненные заказы',
			content: () => <div>Выполненные заказы</div>
		},
		{
			placeholder: 'Личные данныe',
			content: () => <div>Личные данные</div>
		},
	]

	return (
		<Layout title={'Личный кабинет'}>
			<Bubble>
				<div className={style.Wrapper}>
					<h1 className={style.Title}>Личный кабинет</h1>

					<Tabs
						defaultValue={TabList[0].placeholder}
						tabs={TabList}
					/>
				</div>
			</Bubble>
		</Layout>
	)
}

export default Me