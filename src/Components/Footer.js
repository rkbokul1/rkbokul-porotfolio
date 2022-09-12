import React from 'react';

const Footer = () => {

    return (
        <div className='px-14 mt-5'>
            <hr />
            <footer className="footer items-center justify-center md:justify-between p-3 bg-base-100 text-neutral-content px-14">
                <div>
                    <p>All rights reserve &copy;Raihanul Kabir {new Date().getFullYear()}</p>
                </div>
                <div>
                    <p>Date: {new Date().toLocaleDateString()}<br />Providing web and it solutions since- 2020</p>
                </div>
                <div>
                    <span className="footer-title">Find Me on</span>
                    <div className="grid grid-flow-col gap-4">

                       <a title='Github' href='https://github.com/rkbokul1' target="-blank" className='text-2xl'><i class="fa-brands fa-github"></i></a>

                       <a title='Linkedin' href='https://www.linkedin.com/in/rkbokul1/' target="-blank" className='text-2xl'><i class="fa-brands fa-linkedin"></i></a>

                       <a title='Facebook' href='https://www.facebook.com/rkbokul3' target="-blank" className='text-2xl'><i class="fa-brands fa-facebook"></i></a>

                       <a title='Twittwe' href='https://twitter.com/rkbokul1' target="-blank" className='text-2xl'><i class="fa-brands fa-square-twitter"></i></a>

                       <a title='Whatsapp' href='https://wa.me/+8801775630871' target="-blank" className='text-2xl'><i class="fa-brands fa-square-whatsapp"></i></a>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;