import React, {useState} from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import TestCalendar from '../Calendar/Test-Calendar'

function Home (props) {
  const [themeClassHeader, setThemeClassHeader] = useState('dark')
  const [themeClassSidebar, setThemeClassSidebar] = useState('light')
  const [themeClassCalendar, setThemeClassCalendar] = useState('light')


  const themes = ['full-moon', 'eclipse', 'new-moon']

  function changeTheme(theme) {
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
      <div className="page-content" style={{height: '100%'}}>
        <Sidebar themeClass={themeClassSidebar}/>
        <TestCalendar themeClass={themeClassCalendar}/>
      </div>
    </>
  )
}

export default Home
