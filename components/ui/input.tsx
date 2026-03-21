import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {};

export function Input(
    {
        className, 
        ...props 
    }: InputProps) {
    return (
        <input className={`w-full px-4 py-2 rounded-lg border border-slate-200
                            focus:outline-none focus:ring-2 focus:ring-lavender-primary
                            focus:border-lavender-primary transition-all bg-white
                            placeholder:text-slate-400 text-slate-900 ${className}`}
                            {...props} 
                />
            );
        }