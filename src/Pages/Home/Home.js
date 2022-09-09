import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id='home'>
            <Banner />
            <Services />
            <Resume />
            <Contact />
        </div>
    );
};

export default Home;