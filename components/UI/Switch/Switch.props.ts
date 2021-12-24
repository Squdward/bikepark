import { ChangeEvent } from 'react';

export interface ISwitchOption {
	value: string;
	placeholder: string;
}

export interface ISwitch {
	selected: string;
	option: ISwitchOption[];
	defaultValue: string;
	name: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}