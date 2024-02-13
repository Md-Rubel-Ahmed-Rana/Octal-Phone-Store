import React from 'react';
import allu from "../../../images/allu.png"
import jeet from "../../../images/jeet.png"
import stave from "../../../images/stave.png"

const Feedback = () => {
    return (
        <div className='my-20'>
        <h3 className="text-3xl my-5 text-center">Customers Feedback</h3>
        <div className='lg:flex lg:px-10 rounded-lg gap-10  mb-10'>
                <div className='card bg-[#F2f2f2] shadow-xl p-5 m-4 rounded-md'>
                <p>"HI guys, This is a wonderfull website from where I have bought my best branded mobile. They provide the world class service".</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img className='w-12 h-12 rounded-full' src={allu} alt="" />
                            <p>Allu Arjun</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
            </div>
                <div className='card m-4 bg-[#F2f2f2] shadow-xl p-5 rounded-md'>
                    
                <p>"Hello everyone, This is my favourite website. Sometimes I come here to buy my best branded mobile. Their services are very impressive".</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 mt-2'>
                            <img className='w-12 h-12 rounded-full' src={stave} alt="" />
                            <p>Stave Jobs</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
            </div>
                <div className='card m-4 bg-[#F2f2f2] shadow-xl p-5 rounded-md'>
                    <p>"Just, I have wondered by visiting this website. Their service to person to person is one of the best service. I really support them".</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img className='w-12 h-12 rounded-full' src={jeet} alt="" />
                            <p>Jeet</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Feedback;