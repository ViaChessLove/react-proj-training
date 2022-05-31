import React from 'react';
import './styles.css';

interface ButtonProps {
        content: string;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({content, onClick}) => {
        return (
                <button onClick={onClick}>
                       {content} 
                </button>
        );
};

export default Button;