import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Herry',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur exercitationem ex inventore incidunt nostrum, neque perferendis sunt! Autem, fugiat.',
            img: people1,
            location: 'Rajshahi'
        },
        {
            _id: 2,
            name: 'Wilson Herry',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur exercitationem ex inventore incidunt nostrum, neque perferendis sunt! Autem, fugiat.',
            img: people2,
            location: 'Rajshahi'
        },
        {
            _id: 3,
            name: 'Wilson Herry',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur exercitationem ex inventore incidunt nostrum, neque perferendis sunt! Autem, fugiat.',
            img: people3,
            location: 'Rajshahi'
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h4 className="text-3xl">What Our Patients Say</h4>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonials;