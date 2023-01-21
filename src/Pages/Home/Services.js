import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services=[
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities.',
            img:flouride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description:'A filling is used to treat a small hole, or cavity, in a tooth.',
            img:cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description:'Teeth whitening involves bleaching your teeth to make them lighter.',
            img:whitening
        }

    ]
    return (
        <div className='my-28 mb-16'>
          <div className='text-center mb-16'>
              <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
              <h2 className='text-4xl'>Services We Provide</h2>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
              {
                  services.map(service=><Service key={service._id} service={service}></Service>)
              }
          </div>
        </div>
    );
};

export default Services;