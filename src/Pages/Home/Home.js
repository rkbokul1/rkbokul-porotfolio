import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Project from '../Project/Project';
import Line from '../../Components/Line';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Banner />

            <div className='max-w-7xl mx-auto px-12'>
                <Services />
                <Line />
                <Project />
                <Line />
                <Resume />
                <Line />
                <Contact />
            </div>

            <Footer />
        </div>
    );
};

export default Home;