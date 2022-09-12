import React from 'react';
import EducationCard from './EducationCard';

const Educations = () => {
    const educations = [
        {
            id: 1,
            degree: "MSc. in Statitics",
            institute: "Hajee Mohammad Danesh Science And Technology University",
            year: "2020 - Running",
        },
        {
            id: 2,
            degree: "BSc (Hon's) in Statitics",
            institute: "Hajee Mohammad Danesh Science And Technology University",
            year: "2016 - 2019",
        },
    ];
    return (
        <div>
            <div className="relative max-w-2xl mx-auto mt-16">
                <div className="absolute top-0 h-full border-r-2 border-white border-1 -left-3"></div>
                {/* <div className='absolute -left-4 top-[50%] w-4 h-4 rounded-full bg-primary hover:bg-white'></div> */}
                <ul className="space-y-2">
                    {educations.map((education) => (
                        <EducationCard key={education.id} education={education} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Educations;