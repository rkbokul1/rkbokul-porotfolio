import React from 'react';
import SectionDivider from '../../Components/SectionDivider';

const EducationCard = ({ education }) => {
    const { degree, institute, year, Pid } = education;

    return (
        <div>
            <li>
                <div className="card shadow-2xl flex mb-10 text-white"
                >
                    <div className="p-5 lg:p-10 ml-10 text-accent">
                        <p className="text-xl text-white font-semibold mb-2">{degree}</p>
                        <SectionDivider margin={"mb-3 my-3"} />
                        {
                            Pid && <p className='text-white'>{Pid}</p>
                        }
                        <p className='text-white'>{institute}</p>
                        <p className='text-white'>{year}</p>
                    </div>                    
                </div>
            </li>
        </div>
    );
};

export default EducationCard;