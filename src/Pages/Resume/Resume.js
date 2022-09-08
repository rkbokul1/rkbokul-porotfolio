import React, { useState } from 'react';
import Skill from './Skill';

const Resume = () => {
    const [skills, setSkills] = useState(true);
    const [education, setEducation] = useState(false);
    const [certificate, setCertificate] = useState(false);

    const handleSkill = () => {
        setSkills(true);
        setEducation(false);
        setCertificate(false);
        console.log('click')
        console.log(skills)
    }
    const handleEducation = () => {
        setSkills(false);
        setEducation(true);
        setCertificate(false);
    }
    const handleCertificate = () => {
        setSkills(false);
        setEducation(false);
        setCertificate(true);
    }

    return (
        <div id='resume'>
            <div className="grid grid-cols-3 px-14 mb-5">
                <button onClick={handleSkill} className="btn btn-lg btn-outline shadow-lg">
                    skill
                </button>
                <button onClick={handleEducation} className="btn btn-lg btn-outline shadow-lg">
                    Educations
                </button>
                <button onClick={handleCertificate} className="btn btn-lg btn-outline shadow-lg">
                    Certificate
                </button>
            </div>

            <div>
                {
                    skills && <Skill />
                }
                {
                    education && 'Fuck you baby'
                }
                {
                    certificate && 'Pala!'
                }

            </div>
        </div>
    );
};

export default Resume;