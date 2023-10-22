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

export const HostedBy = ({ host, link }:{ host?:string, link?:string }) => {
    let color:string='';
    let host_logo: string='';

    if (link) {
        color += 'bg-emerald-500'
    } else {
        color +='bg-red-500'
    }

    if ( host === 'Vercel' ) {
        host_logo += `logos:vercel`
    } else if ( host === 'Netlify' ) {
        host_logo += `logos:netlify`
    }  else {
        host_logo += `none`
    }

    return (
        <div>
            <a href={link} className='badge bg-slate-300 py-2 gap-2'>
                { link ? <Iconify icon={host_logo} className='' /> : <div className='text-black'>None</div>}
                <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
                </span>
            </a>
        </div>
    )
} 