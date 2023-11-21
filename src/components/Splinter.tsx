import React from 'react';
import Spline from '@splinetool/react-spline';

const Splinter = () => {
    return (
        <section className='bg-[#00dcda]'>                     
            <h2 className='tracking-tight xl:text-[20rem] lg:text-[13rem] md:text-[10rem] text-[6rem] break-words
                font-sans font-500'  
                style={{ color: 'var(--ext-dark-blue-01)' }}
            >
                Splinter
            </h2>
            <Spline scene="https://prod.spline.design/GLErkvWSW79m5Ro6/scene.splinecode" />
        </section>
    );
};

export default Splinter;