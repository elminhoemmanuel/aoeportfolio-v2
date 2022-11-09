import React from 'react';
import css from './button.module.css'

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<"button">, "children">

const Button = ({ children, className, ...rest }: ButtonProps) => {
    let style = `${css.button} ${className}`
    return (
        <button className={style} {...rest} >{children}</button>
    )
}

export default Button