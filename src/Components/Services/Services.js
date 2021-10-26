import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServiceCart/ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="course container">
        {
            services.map(service => <ServicesCart serv={service}> </ServicesCart>)
        }
    </div>
    );
};

export default Services;<h1>Services</h1>