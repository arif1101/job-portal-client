import React from 'react';
import banner1 from '../../assets/image/banner-1.jpg'
import banner2 from '../../assets/image/banner-2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[563px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 flex flex-col gap-4'>
                        <img className='w-[300px] border-l-[10px] border-b-[10px]  border-purple-500 rounded-t-[32px] rounded-br-[32px]' src={banner1} alt="" />
                        <img className='w-[300px] border-l-[10px] border-b-[10px]  border-purple-500 rounded-t-[32px] rounded-br-[32px]' src={banner2} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;