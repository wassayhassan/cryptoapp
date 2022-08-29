import React from "react";
import {MdSpaceDashboard} from 'react-icons/md';
import { SiPurescript} from 'react-icons/si';
import { BsWallet} from 'react-icons/bs';
import { BiNotification} from 'react-icons/bi';
import strategy from '../imgs/strategy.jpg';
import { Button } from "flowbite-react";

import { NavLink, useLocation } from "react-router-dom";
function NavBar(){

   let linkActive = "flex flex-row text-blue-500 bg-blue-100 rounded-md p-1 m-1";
   let linkNormal = "flex flex-row p-1 text-black rounded-md hover:bg-blue-100 m-1"

 let {pathname} = useLocation();

    return(
        <div className="nav-container flex flex-col justify-between p-1 bg-slate-100 w-48 min-h-screen max-h-screen sticky top-0">
        <div className="uppernav flex flex-col">
             <div className="logo-container flex flex-row justify-center w-full">
               <p className="font-bold text-2xl">Trad<span className="text-blue-500">ER</span></p>
             </div>
             <div className="navlinks-container mt-6">
                <ul>
                    <NavLink to="/" className={({isActive})=>  isActive? linkActive  : linkNormal
                    }>
                        <div className="flex flex-col justify-center m-1">
                           <MdSpaceDashboard size="1.5em"color={pathname==="/"? 'blue': 'black'}/>
                        </div>
                      
                        <p className="font-semibold text-lg m-1">DashBoard</p>
                        
                    </NavLink>
                    <NavLink to="/trade" className={({isActive})=>  isActive? linkActive  : linkNormal
                    }>
                        <div className="flex flex-col justify-center m-1">
                           <SiPurescript size="1.4em"color={pathname==="/trade"? 'blue': 'black'}/>
                        </div>
                      
                        <p className="font-semibold text-lg m-1">Trade</p>
                        
                    </NavLink>
                    <NavLink to="/wallet" className={({isActive})=>  isActive? linkActive  : linkNormal
                    }>
                        <div className="flex flex-col justify-center m-1">
                           <BsWallet size="1.4em"color={pathname==="/wallet"? 'blue': 'black'}/>
                        </div>
                      
                        <p className="font-semibold text-lg m-1">Wallet</p>
                        
                    </NavLink>
                    <NavLink to="/notifications" className={({isActive})=>  isActive? linkActive  : linkNormal
                    }>
                        <div className="flex flex-col justify-center m-1">
                           <BiNotification size="1.5em"color={pathname==="/notifications"? 'blue': 'black'}/>
                        </div>
                      
                        <p className="font-semibold text-lg m-1">Notifications</p>
                        
                    </NavLink>
                </ul>
             </div>
 
        </div>
          <div className="lownav-container bg-white rounded-md mb-4">
          <div className="flex flex-row justify-center">
          <img src={strategy} alt="" className="w-24 h-24" />
          </div>
         <div className="flex flex-row justify-center mt-4 mb-2">
           <Button>Discover New</Button>
         </div>
         
       </div>
    </div>
    )
}
export default NavBar;