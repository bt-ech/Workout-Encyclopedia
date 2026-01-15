import React from 'react';
import './styles.css';

interface CardProps {
    id: string ,
    title: string
}


const Card: React.FC<CardProps> = ({id , title}) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
        </div>
    );
};

export default Card;