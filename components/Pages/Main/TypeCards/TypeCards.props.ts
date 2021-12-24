export interface ITypeCards {
	material: string;
	price: string;
	hint: string;
	image: string;
	name: string;
	checked: boolean;
	onChange: () => void;
}