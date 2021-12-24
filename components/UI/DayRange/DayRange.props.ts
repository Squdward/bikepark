export interface IDayRange {
	startDate: Date | string;
	endDate: Date | string;
	name: string;
	onChange: (date: Date[], name: string) => void;
}