import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputI extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>  {
    className?: string,
}