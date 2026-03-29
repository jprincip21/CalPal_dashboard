import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {};

export function Select(
    {
        className, 
        children,
        ...props 
    }: SelectProps) {
    return (
        <select className={`h-10 w-full px-4 py-2 rounded-lg border border-slate-200 
                            focus:outline-none focus:ring-2 focus:ring-lavender-primary 
                            focus:border-lavender-primary transition-all bg-white
                            text-slate-900 ${className}`}
                            {...props}
                            >
            {children}
        </select>
            );
        }