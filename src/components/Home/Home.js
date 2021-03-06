import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import CalendarBody from '../Calendar/Calendar-body'

function Home (props) {
  const [themeClassHeader, setThemeClassHeader] = useState('dark')
  const [themeClassSidebar, setThemeClassSidebar] = useState('light')
  const [themeClassCalendar, setThemeClassCalendar] = useState('light')

  useEffect(() => {

  }, [themeClassHeader, themeClassCalendar, themeClassSidebar])

  const themes = ['full-moon', 'eclipse', 'new-moon']
  const changeTheme = (theme) => {
    switch (theme) {
      case themes[0]:
        setThemeClassHeader('light')
        setThemeClassSidebar('light')
        setThemeClassCalendar('light')
        break
      case themes[1]:
        setThemeClassHeader('dark')
        setThemeClassSidebar('light')
        setThemeClassCalendar('light')
        break
      case themes[2]:
        setThemeClassHeader('dark')
        setThemeClassSidebar('dark')
        setThemeClassCalendar('dark')
        break
      default:
        break
    }
  }

  return (
    <>
      <Header themes={themes} themeClass={themeClassHeader} changeTheme={changeTheme}/>
      <div className="page-content" style={{ height: '100%' }}>
        <Sidebar themeClass={themeClassSidebar}/>
        <CalendarBody themeClass={themeClassCalendar}/>
      </div>
    </>
  )
}

export default Home
