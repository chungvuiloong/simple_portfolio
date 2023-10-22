import React from 'react';
import Iconify from './Iconify';

export const StatusTag = () => {
    return (
        <div className="relative btn btn-neutral  flex flex-row">
            <div>Test</div>
            <div className="absolute -top-1 -right-1">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            </div>
        </div>
    );
};

export const Vercel = ({vercel_link}:{vercel_link?:string}) => {
    let color:string='';

    if (vercel_link) {
        color += `bg-sky-500`
    } else {
        color +=`bg-red-500`
    }
    return (
        <div className="badge bg-slate-300 gap-2">
            { vercel_link ? <Iconify icon={`logos:vercel`} /> : <div className='text-black'>None</div>}
            <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
            </span>
        </div>
    )
} 