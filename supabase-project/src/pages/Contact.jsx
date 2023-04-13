//contact.jsx   
import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="flex flex-col h-screen mx-auto nm-flat-secondary-sm">
                <div className="header flex nm-convex-primary-sm p-5 items-center ">
                    <Icon icon="mdi:home" className="stroke-1 stroke-red-400 text-accent m-2 w-10 h-10" />
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">Contact</h1>
                </div>

            </div>

  
        </>
    )
    }


export default Contact