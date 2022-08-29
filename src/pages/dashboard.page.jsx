import React from "react";
import NavBar from "../components/sidenav.component";
import DashContent from "../components/dashboardcontent.component";


function DashBoard(){

    return (
        <div className="container flex flex-row">
            <>
              <NavBar />
           
              </>

           <DashContent />
        </div>
    )
}
export default DashBoard;