import React from 'react';
import Input from './Input';
import Info from './Info';

const Contact = () => {
    return (
        <div id='contact' className='px-14 mt-10'>
            <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
                Contact With Me
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-14'>
                <div>
                    <Info />
                </div>
                <div>
                    <Input />
                </div>
            </div>
        </div>
    );
};

export default Contact;