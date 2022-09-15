import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Banner />

            <div className='max-w-7xl mx-auto px-12'>
                <Services />
                <Project />
                <Resume />
                <Contact />
            </div>

            <Footer />
        </div>
    );
};

export default Home;