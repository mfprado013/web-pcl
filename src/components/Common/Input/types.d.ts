import { ChangeEvent, FocusEvent } from "react";

export interface IInput{
    id?: string;
    name?: string;
    type?: 'text' | 'number' | 'email';
    title?: string; 
    value?: any;
    register?: {};
    disabled?: boolean;
    error?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLElement>) => void;
    onBlur?: (e: FocusEvent<HTMLElement>) => void;
}