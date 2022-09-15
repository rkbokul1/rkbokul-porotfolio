import React from 'react';
import Input from './Input';
import Info from './Info';

const Contact = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" id='contact' className='pt-16'>
            <p className="text-primary font-bold text-3xl lg:text-5xl mb-5">
                Contact With Me
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 mb-14 gap-5'>

                <div className='flex justify-center'>
                    <Info />
                </div>

                <div className=' '>
                    <Input />
                </div>

            </div>

        </div>
    );
};

export default Contact;