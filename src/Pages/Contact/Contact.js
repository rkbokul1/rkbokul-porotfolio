import React from 'react';
import Input from './Input';
import Info from './Info';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' >
            <div className='grid grid-cols-1 md:grid-cols-2 px-14 mb-14'>
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