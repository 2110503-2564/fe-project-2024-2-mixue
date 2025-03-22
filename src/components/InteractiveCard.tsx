'use client'
import React from 'react';

export default function InteractiveCard({children,contentName}: 
    {children: React.ReactNode, contentName:string}){

    return (
        <div className="rounded-lg bg-white w-full shadow-lg 
        transition-transform transform 
        hover:scale-105 
        hover:bg-neutral-200 
        hover:shadow-xl duration-300 ease-in-out cursor-pointer">
      
        {children}
        </div>
    );
}