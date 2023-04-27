import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';



const Testimonial = () => {
    const reviews= [
        {
        _id:1,
        name:'Mobinul Islam',
        review:'Great work from Dr Smolarek and the Nuffield team. From reassuring diagnosis and friendly staff. The convenience of picking my Op date, so my sick leave ran into Christmas holiday. Professional service from the nurses who looked after my wellbeing and safety with their checks.',
        location:'Dhaka',
        img:people1
    },
    {
        _id:2,
        name:'Riya Islam',
        review:'I feel extremely fortunate to have been in the care of Mr Modi & his excellent team. My condition was poor prior to surgery making it a particularly difficult procedure which he helped me through both physically and mentally.',
        location:'Khulna',
        img:people2
    },
    {
        _id:3,
        name:'Nayma Rahman',
        review:'I really appreciated the empathy and openness to listen to my questions and concerns. Nick explained the procedure clearly with reassurance and transparency. Thank you to taking care of me and for giving me back my quality of life. Thank you',
        location:'Barishal',
        img:people3
    },
];
    
    
    return (
        <section className='my-20' >
            <div className='flex justify-between'>
                <div className='ml-7'>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <p>What our patients Says</p>
                </div>
                <div>
                    <img className='lg:w-48 w-24  ' src={quote} alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                  reviews.map(review=><Review key={review._id} review={review}></Review>)
              }
            </div>
        </section>
    );
};

export default Testimonial;