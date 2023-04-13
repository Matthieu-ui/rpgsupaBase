import { Link, Outlet } from "react-router-dom";
import React from "react";
import { Icon } from "@iconify/react";

function Sidebar() {


  return (
    <div className="flex h-max">
      <nav className="bg-primary w-36 pr-1">
        <div className="flex items-center justify-center h-16 text-xl font-bold bg-gray-800 nm-inset-primary-sm p-3 rounded-br-lg">
          <Icon
            icon="ri:team-fill"
            className="stroke-1 text-accent stroke-red-400 t w-10 h-10 mr-2 drop-shadow-sm hover:drop-shadow-md transition duration-200 ease-in-out hover:scale-110"
          />


          <span className=" font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-600 drop-shadow-sm">
            TeamUp{" "}

          </span>
        </div>

        <div className="mt-2 h-56 ">
          <div className="h-36 ">
            <Link
              to="/"
              className="flex items-center  py-2 px-4 text-gray-400 hover:text-white focus:text-white nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg focus:nm-inset-secondary-sm"
            ><Icon icon="ri:home-4-fill" className="m-1 w-5 h-5 stroke-1 text-accent stroke-red-400" />
              Home
            </Link>

            <Link to="/characters" className="flex items-center  py-2 px-4 text-gray-400 hover:text-white focus:text-white focus:nm-inset-secondary-sm nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg">
              <Icon icon="game-icons:wizard-face" className="m-1 w-5 h-5 stroke-1 text-accent stroke-red-900" />
              Characters
            </Link>

            <Link to="/create" className="flex items-center py-2 px-4 text-gray-400 hover:text-white focus:text-white focus:nm-inset-secondary-sm nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg">


              <Icon icon="mdi:plus-box-multiple" className="m-1 w-5 h-5 stroke-1 text-accent stroke-red-400" />
              Create
              </Link>



            <Link to="/clans" className="flex items-center   py-2 px-4 text-gray-400 hover:text-white focus:text-white focus:nm-inset-secondary-sm nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg">
              <Icon icon="ri:team-fill" className="m-1 w-5 h-5 stroke-1 text-accent stroke-red-400" />
              Clans
            </Link>


            <Link
              to="/about"
              className="flex items-center   py-2 px-4 text-gray-400 hover:text-white focus:text-white focus:nm-inset-secondary-sm nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg"
            ><Icon icon="ri:information-fill" className="m-1 w-5 h-5 stroke-1 text-accent stroke-red-500" />
              About
            </Link>



            <Link
              to="/contact"
              className="flex items-center  py-2 px-4 text-gray-400 hover:text-white focus:text-white focus:nm-inset-secondary-sm  nm-concave-primary-xs hover:nm-inset-secondary-lg rounded-tr-lg rounded-br-lg"
            >
              <Icon icon="bi:envelope" className="m-1 w-5 h-5 stroke-1 text-accent" />
              Contact
            </Link>
          </div>

        </div>

      </nav>

      <div className="flex-1 w-full">
        <Outlet />
      </div>

    </div>
  );
}

export default Sidebar;