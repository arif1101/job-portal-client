import React from 'react';
import banner1 from '../../assets/image/banner-1.jpg'
import banner2 from '../../assets/image/banner-2.jpg'
import { motion } from 'motion/react';
import { easeOut } from 'motion';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[563px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 flex flex-col gap-4 items-center'>
                        <motion.img 
                            animate={{y: [0, 100, 0]}}
                            transition={{duration: 10, repeat: Infinity}}
                            className='w-[300px] border-l-[5px] border-b-[5px]  border-blue-400 rounded-t-[32px] rounded-br-[32px]' src={banner1} alt="" />
                        <motion.img 
                            animate={{x: [100, 150, 100]}}
                            transition={{duration: 10, repeat: Infinity}}
                            className='w-[300px] border-l-[5px] border-b-[5px]  border-blue-400 rounded-t-[32px] rounded-br-[32px]' src={banner2} alt="" />
                    </div>
                    <div className='flex-1'>
                        <motion.h1 
                            animate={{x: [0,100,0],
                            }}
                            transition={{duration: 6, delay: 2, ease: easeOut, repeat: Infinity}}
                            className="text-5xl font-bold">Letest <motion.span
                            animate={{
                                color: ["#FF5733", "#33FF57", "#3357FF"],
                            }}
                            transition={{
                                duration: 3, // Duration of color cycle
                                ease: "easeInOut",
                                repeat: Infinity, // Repeats infinitely
                            }}
                            >Job</motion.span> for you!</motion.h1>
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