import React from 'react';
import Calendar from 'react-calendar';

function CalendarSidebar(props) {
   
    return (
        <div>
            <Calendar style={{innerHeight:"100%",outerHeight:"100%"}}/>
        </div>
    );
}

export default CalendarSidebar;