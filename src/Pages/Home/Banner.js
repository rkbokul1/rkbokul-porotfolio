import React from 'react';
import rkbokul from '../../Components/image/passport.png';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 text-white">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={rkbokul} className="max-w-52 md:max-w-lg rounded-lg" alt='rkbokul' />

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

                        <div>
                            <p
                                data-aos="fade-down-right"
                                data-aos-duration="1000"
                                className="text-left text-white w-full lg:w-[60ch]"
                            >
                                Hi I am a Mern Stack developer And I can build your website as you
                                want.
                                <br />
                                <br />
                                Creative problem solver with demonstrated ability to work on multiple projects simultaneously.Positive driven and confident individual with an apt for learning new technology.{" "}
                            </p>
                        </div>

                        <div className="flex gap-5 my-10 -mb-20">
                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <a
                                    className="btn btn-primary text-white py-[0.85rem] px-4 lg:px-12"
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    My Resume
                                </a>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <a
                                    className="btn btn-primary text-white py-[0.85rem] px-4 lg:px-12"
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Hire me
                                </a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner;