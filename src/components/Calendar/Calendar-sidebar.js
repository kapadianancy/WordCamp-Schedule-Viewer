import React from 'react'
import Calendar from 'react-calendar'

function CalendarSidebar (props) {
  return (
        <>
            <Calendar style={{width: 'auto'}} className={props.themeClass}/>
        </>
  )
}

export default CalendarSidebar
