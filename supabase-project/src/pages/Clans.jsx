import React from 'react'
import { Icon } from "@iconify/react";

const Clans = () => {

    return (
        <>
        <div className="container">
        <div className="header flex nm-concave-primary-sm p-5 items-center ">
<Icon icon="ri:team-fill" className="stroke-1 stroke-red-400 text-accent m-2 w-10 h-10" />
<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">Clans</h1>
        </div>
        <div className="p-5 mx-auto flex nm-inset-secondary-lg h-screen">
            <p
            className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm'
            >component under construction</p>
        </div>
    </div>
        </>
    )
}

export default Clans