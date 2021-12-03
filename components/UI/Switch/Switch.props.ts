interface IOption {
	name: string | undefined;
	value: string | number;
	placeholder: string;
}

export interface ISwitch {
	name?: string;
	option: IOption[]
}