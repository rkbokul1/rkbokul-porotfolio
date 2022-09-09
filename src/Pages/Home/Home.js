import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Banner />
            <Services />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;