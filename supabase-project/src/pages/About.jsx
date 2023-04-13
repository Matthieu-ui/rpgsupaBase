import React from 'react'
import { Icon } from "@iconify/react";

const About = () => {
    return (
        <>
            <div className="flex flex-col h-screen mx-auto nm-flat-secondary-sm">
                <div className="header flex nm-convex-primary-sm p-5 items-center ">
                    <Icon icon="mdi:home" className="stroke-1 stroke-red-400 text-accent m-2 w-10 h-10" />
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">About</h1>
                </div>
                <div className="p-5 mx-auto flex-grow">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">Built with</h1>
                    <ul
                    className='mt-10 list-none text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm'
                    >
                        <li>React</li>
                        <li>Supabase</li>
                        <li>React Router</li>
                        
                        <li>React Iconify</li>
                      <li> Tailwind CSS</li>
                      </ul>


  </div>
            </div>

  
        </>
    )
}
//root.jsx
export default About
