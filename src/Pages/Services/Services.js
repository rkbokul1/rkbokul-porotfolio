import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="text-white max-w-7xl mx-auto mt-5">
            <div data-aos="zoom-in" data-aos-duration="500">
                <p className="text-xs lg:text-sm text-white uppercase">Services</p>
                <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
                    What I Do{" "}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
            </div>
        </div>
    );
};

export default Services;