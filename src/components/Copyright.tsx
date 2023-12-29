import React from 'react';

const Copyright = () => {
    return (
        <footer className='py-10 md:block hidden bottom-0 w-full bg-Cream text-white text-center bg-[#00224c]'>
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" 
                target="_blank" 
                rel="noreferrer" 
                className='underline underline-offset-4 '>
                    Frontend Mentor</a>. 
                Coded with enthusiasm by {" "}
            <a href="https://github.com/chungvuiloong" className='underline underline-offset-4'>
                Jere / Chung Vui Loong
            </a>.
        </footer>
    );
};

export default Copyright;