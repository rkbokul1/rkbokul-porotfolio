import React from 'react';
import rkbokul from '../Components/image/passport.png';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={rkbokul} className="max-w-52 md:max-w-lg rounded-lg shadow-2xl" alt='rkbokul' />
                    <div>
                        <p className="text-3xl md:text-6xl font-bold">HI, I'M <span className='text-primary uppercase'>Raihanul Kabir</span></p>

                        <p data-aos="fade-down-right" data-aos-duration="1000" className='text-3xl md:text-5xl uppercase font-bold'>
                            <Typed
                                strings={[
                                    "A Frontend Developer",
                                    "A Mern Developer",
                                    "A Backend Developer",
                                    "A React.JS Developer",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </p>
                        <br />
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;