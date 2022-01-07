import React from "react";

export interface ITypeCards {
	material: string;
	price: string;
	hint: string;
	image: string;
	name: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}