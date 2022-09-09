import React from 'react';
import EducationCard from './EducationCard';

const Certificate = () => {
    const trainee = {
        degree: "Complete Development Course",
        institute: "Programming Hero",
        Pid: 'web-2011',
        year: "January 2022 - May 2022",
    };
    return (
        <div>
            <div className="relative max-w-2xl mx-auto mt-16">
            <div className="absolute top-0 h-full border-r-2 border-white border-1 -left-3"></div>
                <ul className="space-y-2">
                    <EducationCard key={trainee.id} education={trainee} />
                </ul>
            </div>
        </div>
    );
};

export default Certificate;