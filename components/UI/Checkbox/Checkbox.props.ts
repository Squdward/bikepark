import React from "react";

export interface ICheckbox  {
	id: string,
	label?: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean,
	name?: string,
	disabled?: boolean,
	className?: string,
}