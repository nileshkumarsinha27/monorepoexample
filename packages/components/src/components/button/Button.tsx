import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const Button: FC<ButtonProps> = ({ buttonText, ...props }: ButtonProps) => (
  <button {...props}>{buttonText}</button>
);

export default Button;
