import React from 'react';
import Header from "../Header/Header";
import CalendarBody from "../Calendar/Calendar-body";
import Sidebar from "../Sidebar/Sidebar";

function Home(props) {
    return (
       <>
           <Header/>           
           <div className="page-content">
           <Sidebar/>
           <CalendarBody/>
           </div>
       </>
    );
}

export default Home;