import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: Fluoride,
            name: 'Fluoride Treatment',
            description: ''
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: ''
        },
        {
            _id: 1,
            img: whitening,
            name: 'Teeth Whitening',
            description: ''
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;