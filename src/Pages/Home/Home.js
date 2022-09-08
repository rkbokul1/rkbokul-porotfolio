import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Skill from '../Resume/Skill';

const Home = () => {
    return (
        <div id='home'>
            <Banner />
            <Services />
            <Resume />
        </div>
    );
};

export default Home;