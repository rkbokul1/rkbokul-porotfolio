import React from 'react';
import EducationCard from './EducationCard';

const Certificate = () => {
    const trainee = [
        {
            key: 1,
            degree: "Complete Development Course",
            institute: "Programming Hero",
            Pid: 'web-2011',
            year: "January 2022 - May 2022",
        },
        {
            key: 2,
            degree: "Graphics Design Course-2020",
            institute: "LEDP, Ministry Of ICT, Bangladesh",
            Pid: '389182',
            year: "January 2020 - june 2021",
        }
    ];

    return (
        <div>
            <div className="relative max-w-2xl mx-auto mt-16">
                <div className="absolute top-0 h-full border-r-2 border-white border-1 -left-3"></div>
                <ul className="space-y-2">
                    {/* <EducationCard key={trainee.id} education={trainee} /> */}
                    {
                        trainee.map(train => <EducationCard  key={train.key} education={train}/>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Certificate;