import React from 'react';
import Header from "../Header/Header";
import CalendarBody from "../Calendar/Calendar-body";

function Home(props) {
    return (
       <>
           <Header/>
           <div className="page-content">
           <CalendarBody/>
           </div>
       </>
    );
}

export default Home;