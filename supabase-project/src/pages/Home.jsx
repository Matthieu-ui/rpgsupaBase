import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="flex flex-col h-screen mx-auto nm-flat-secondary-sm">
        <div className="header flex nm-convex-primary-sm p-5 items-center ">
          <Icon icon="mdi:home" className="stroke-1 stroke-red-400 text-accent m-2 w-10 h-10" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">Home</h1>
        </div>
        <div className="p-5 mx-auto flex-grow">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">Welcome to the TeamUp app</h1>
        <p className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm">This is the home page.</p>

        <div className="flex flex-col mx-auto text-accent">
        <div className="flex  p-5 ">
 <p
 className="text-md mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-red-600 drop-shadow-sm"
 >
Create a Character and save it to the database.
 </p>
 </div>
 <div className="flex flex-col mx-auto">
 <button className="bg-gradient-to-br from-red-400 to-red-600 hover:from-red-600 hover:to-red-400 text-white font-bold py-2 px-4 rounded-full">
    <Link to="/create">Create</Link>
    </button>



            </div>
            </div>

      


            

        </div>
    </div>
        </>
    );
}

export default Home;