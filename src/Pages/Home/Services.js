import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import care from '../../assets/images/care.jpg';
import neurology from '../../assets/images/neurology.jpg';
import ears from '../../assets/images/ears.png'
import physical from '../../assets/images/physical.png'
import ortho from '../../assets/images/ortho.png'
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
            name: 'Ear,Nose,Throat',
            description:'Best service for Ear,Nose,Throat with world class doctors.',
            img:ears
        },
        {
            _id: 3,
            name: 'Primary care',
            description:'Primary health care for all types of patient',
            img:care
        },
        {
            _id: 4,
            name: 'Neurology',
            description:'One of the best neurological service we provide to our patient.',
            img:neurology
        },
        {
            _id: 5,
            name: 'Orthopedics',
            description:'There are World class orthopedics surgeon provides best quality services. ',
            img:ortho
        },
        {
            _id: 6,
            name: 'Physical Therapy',
            description:'Physical therapy service to relive pain,strengthen weakened muscles',
            img:physical
        },
      
   
   

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