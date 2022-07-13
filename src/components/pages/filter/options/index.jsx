import style from "./index.module.scss";
import Switch from "../../../ui/switch/index";
import DayRange from "../../../ui/dayRange";
import Select from "../../../ui/select";

const Options = () => {
	const SwitchOption = [
		{
			value: "По дням",
			placeholder: "По дням",
		},
		{
			value: "2 часа",
			placeholder: "2 часа",
		},
	];

	const selectOption = [
		{
			id: 1,
			value: "По Адресу",
			label: "По Адресу",
		},
		{
			id: 2,
			value: "Самовывоз",
			label: "Самовывоз",
		},
	];

	return (
		<div className={style.Options}>
			<Switch
				placeholder="Тип аренды"
				option={SwitchOption}
				defaultValue={"По дням"}
				selected={0}
				name={"rentType"}
				onChange={() => {}}
			/>

			<DayRange
					startDate={'form.startDate'}
					endDate={'form.endDate'}
					name={"startDate"}
					onChange={(data) => {}}
			/>

			<Select
				label={"Доставка"}
				defaultOption={'form.delivery'}
				options={selectOption}
				onChange={(select) => {}}
			/>
		</div>
	)
}

export default Options