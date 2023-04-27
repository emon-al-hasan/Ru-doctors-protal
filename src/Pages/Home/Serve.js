import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Serve = () => {
    return (
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-16 mb-16 my-52">
            <div className=' mr-16 '>
                <img className='rounded-2xl ' src={treatment} style={{ width: '458px', height: '575px' }} alt="" />
            </div>

            <div className='mt-14 pr-24'>
                <h1 className='text-sky-900 font-bold text-5xl my-7'>Exceptional Health Care,on Your Terms</h1>
                <p className='text-lg'>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.A healthy mouth, free of infections, injuries and other problems with teeth and gums, is important in maintaining your overall health.</p>
                <button class="btn  btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-7 ">Get Started</button>

                
            </div>
        </div>
    );
};

export default Serve;