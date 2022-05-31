import React from 'react';
import './cardStyles.css';
import SkillCard from './SkillCard';
import { Skill } from './model';
import Fader from '../../components/Fader';


const SkillList = () => {
        let skills: JSX.Element[] = [];
        
        skills.push(<SkillCard image='/images/Ps.svg' title='Adobe Photoshop' stars={4}/>);
        skills.push(<SkillCard image='/images/Ai.svg' title='Adobe Illustrator' stars={3}/>);
        skills.push(<SkillCard image='/images/Group.svg' title='Adobe After Effects' stars={4}/>);
        skills.push(<SkillCard image='/images/Figma.svg' title='Figma' stars={4}/>);
        return (
                <div className="list__wrapper">
                        {skills.map((skill) =>(
                                (<Fader delay={1200}>
                                        {skill}
                                </Fader>)
                        ))}
                </div>
        );
};

export default SkillList;