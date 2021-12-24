export interface IOption {
	id: number;
	value: string;
	label: string;	
}

export interface ISelect {
	options: IOption[];
	defaultOption: string;
	id?: string;
	label: string;
	onChange: (val: string) => void;
}