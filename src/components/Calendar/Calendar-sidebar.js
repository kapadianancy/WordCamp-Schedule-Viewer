/* eslint-disable */
import React from 'react'
import Calendar from 'react-calendar'

function CalendarSidebar (props) {
  return (

        <div data-testid="calendar-sidebar-test">
            <Calendar style={{ width: 'auto' }} className={props.themeClass}/>
        </div>
  )
}

export default CalendarSidebar
