import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export function Button(
    {
        children,
        type ="button",
        className = "",
        ...props
    }: ButtonProps) {
    return (
        <button className={`
        bg-lavender-primary
        text-white 
        hover:bg-lavender-dark 
        rounded-md
        shadow-sm 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}`}
        type={type}
        {...props}>
            {children}
        </button>
    );
}