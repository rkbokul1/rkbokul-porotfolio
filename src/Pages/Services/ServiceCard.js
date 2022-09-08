import React from 'react';

const ServiceCard = ({service}) => {
    const { title, description, icon } = service;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <div className="text-white hover:text-neutral p-8 lg:p-12 ">
                    <div className="text-left">
                        {/* <p className="text-5xl text-secondary">{icon}</p> */}
                        <img src={icon} alt="" />
                        <h2 className="font-semibold text-xl lg:text-2xl my-4">{title}</h2>
                        <p className="text-sm lg:text-base">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;