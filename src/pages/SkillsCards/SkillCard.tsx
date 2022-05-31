import React, { useState } from 'react';
import './cardStyles.css';
import { Skill } from './model';
interface SkillCardProps {
        image: string;
        title: string;
        stars: number;
}

const SkillCard: React.FC<SkillCardProps>= ({
        image,
        title,
        stars
}) => {
        const setStars = (stars: number): JSX.Element[] => {
                let marks: JSX.Element[] = [];
                if (stars > 5){stars = 5;}
                if (stars < 0) {stars = 0;}
                for (let i = 0; i < stars; i++){
                        marks.push(<img src="/images/MarkedStar.svg" style={{marginLeft:'5px'}}/>);
                }
                for (let i = 0; i < 5-stars; i++){
                        marks.push(<img src="/images/UnmarkedStart.svg" style={{marginLeft: '5px'}}/>);
                }
                return marks;
        };
        return (
                <div className="card__wrapper">
                        <img src={image} alt={title} title={title} style={{marginBottom:'24px'}}/>
                        <div style={{maxWidth:'92px',margin: 'auto', color:'#828282', marginBottom:'40px'}}>
                                {title.length > 6 ? title: (<div style={{marginBottom:'60px'}}>{title}</div>)}
                        </div>
                        <div style={{marginBottom:'110px'}}>
                                {setStars(stars)}
                        </div>
                </div>
        );
};

export default SkillCard;