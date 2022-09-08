import React from 'react';

const FindMe = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
                <div>
                    <h5
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="text-left mb-3 uppercase tracking-wide"
                    >
                        Find Me
                    </h5>
                    
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="flex gap-5"
                    >
                        <Link to='/'
                            href="https://github.com/emonmorol"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="action-box">
                                {" "}
                                <i className="fa-brands fa-github"></i>
                            </div>
                        </Link>
                        <Link to='/'
                            href="https://www.linkedin.com/in/ekramul-hasan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="action-box">
                                {" "}
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </Link>
                        <Link to='/'
                            href="https://www.facebook.com/ekramul.hasan.morol/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="action-box">
                                {" "}
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <h5
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="text-left mb-3 uppercase tracking-wide"
                    >
                        Best skills
                    </h5>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="flex gap-5"
                    >
                        <div className="action-box text-blue-500">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div className="action-box text-yellow-500">
                            <i className="fa-brands fa-js-square"></i>
                        </div>
                        <div className="action-box text-blue-500">
                            <i className="fa-brands fa-css3-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMe;