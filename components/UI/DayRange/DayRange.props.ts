export interface IDayRange {
	startDate: Date | string;
	endDate: Date | string;
	name: string;
	onChange: (date: string, name: string) => void;
}