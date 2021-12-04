export interface ISwitchOption {
	name: string;
	value: string;
	placeholder: string;
}

export interface ISwitch {
	selected: string;
	onChange: (event: Event) => void;
	option: ISwitchOption[];
	defaultValue: string;
	name?: string;
}