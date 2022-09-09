import React from 'react';
import contact from '../../Components/image/contact us.jfif'

const info = () => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={contact} alt="contact" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-primary">Raihanul Kabir</h2>
                <p>Mern Stack Developer</p>
                <p>I am available for freelance work or project base work. Connect with me via call or email me in to my account</p>

                <p>Phone: <span>+8801775630871</span></p>
                <p>Email: <span>+rkbokul@gmail.com</span></p>
                <div className="card-actions ">
                    <button className="btn btn-outline hover:bg-primary ">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default info;