export interface ICheckbox  {
	id: string,
	label?: string,
	onChange: () => void;
	checked: boolean,
	name?: string,
	disabled?: boolean,
	className?: string,
}