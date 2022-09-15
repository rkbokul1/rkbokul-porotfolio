import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div id='porotfolio' className='pt-16'>
            <div>
                <div data-aos="zoom-in" data-aos-duration="500">
                    <p className="text-xs lg:text-sm text-white uppercase">Porotfolio</p>
                    <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
                        What I Did{" "}
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};

export default Project;