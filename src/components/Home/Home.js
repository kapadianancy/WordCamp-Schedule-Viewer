import React, { useState } from 'react'
import Header from '../Header/Header'
import CalendarBody from '../Calendar/Calendar-body'
import Sidebar from '../Sidebar/Sidebar'

function Home (props) {
  const [themeClass, setThemeClass] = useState('dark')
  const [themeClassSidebar, setThemeClassSidebar] = useState('light')
  const themes = ['full-moon', 'eclipse', 'new-moon']
  function changeTheme (theme) {
    switch (theme) {
      case themes[0]:
        setThemeClass('light')
        setThemeClassSidebar('light')
        break
      case themes[1]:
        setThemeClass('dark')
        setThemeClassSidebar('light')
        break
      case themes[2]:
        setThemeClass('dark')
        setThemeClassSidebar('dark')
        break
      default:
        break
    }
  }

  return (
       <>
           <Header themes={themes} themeClass={themeClass} changeTheme={changeTheme}/>
           <div className="page-content">
           <Sidebar themeClass={themeClassSidebar}/>
           <CalendarBody/>
           </div>
       </>
  )
}

export default Home
