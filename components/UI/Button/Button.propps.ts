import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: 'small' | 'medium' | 'large';
	className: string,
}