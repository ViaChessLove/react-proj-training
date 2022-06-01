import React from 'react';
import './styles.css';

interface ButtonProps {
        content: string;
        children?: JSX.Element;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({content, onClick, children}) => {
        return (
                <button onClick={onClick}>
                       {content}
                </button>
        );
};

export default Button;