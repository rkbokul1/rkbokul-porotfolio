import React, { useState } from 'react';
import Certificate from './Certificate';
import Educations from './Educations';
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
        <div data-aos="fade-right" data-aos-duration="1000" id='resume' className='pt-16'>
            <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
                My Resume
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 mb-5">
                <button onClick={handleSkill} className="text-xs md:text-md btn sm:btn-sm md:btn-lg btn-outline hover:text-black hover:bg-secondary shadow-2xl">skill</button>
                <button onClick={handleEducation} className="text-xs md:text-md btn sm:btn-sm md:btn-lg  btn-outline hover:text-black hover:bg-secondary shadow-2xl"> Educations</button>
                <button onClick={handleCertificate} className="text-xs md:text-md btn sm:btn-sm md:btn-lg btn-outline hover:text-black hover:bg-secondary shadow-2xl"> Certificate </button>
            </div>

            <div>
                {
                    skills && <Skill />
                }
                {
                    education && <Educations />
                }
                {
                    certificate && <Certificate />
                }
            </div>

        </div>
    );
};

export default Resume;