import React from 'react';
import './styles.css';
import SkillCard from './SkillsCards/SkillCard';
import SkillList from './SkillsCards/SkillList';
import Fader from '../components/Fader';

const Skills = () => {

        return (
                <div className="skills__wrapper">
                        <Fader delay={500}>
                                <div style={{fontWeight: '600', fontSize: '34px', paddingBottom: '59px'}}>
                                        Skills
                                </div>
                        </Fader>
                        <Fader delay={800}>
                                <div style={{marginBottom:'87px'}}>
                                        I work in such programs as
                                </div>
                        </Fader>
                        <SkillList/>
                        {/*ListSkills <SkillCard> */}
                </div>
        );
};

export default Skills;