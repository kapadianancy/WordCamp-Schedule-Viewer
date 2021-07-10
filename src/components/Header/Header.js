/* eslint-disable react/prop-types */
import React from 'react'
import NancyProfile from '../../../public/assets/images/nancy-profile.jpeg'
import FullMoon from '../../../public/assets/images/full-moon.png'
import NewMoon from '../../../public/assets/images/new-moon.png'
import Eclipse from '../../../public/assets/images/eclipse.png'

function Header (props) {
  const style = {
    height: 70
  }

  const today = new Date().toDateString()

  return (
        <>
            <div className={`navbar navbar-expand-md ${props.themeClass}`} style={style}>
                <div className="navbar-brand">
                    <a href="#" className="d-inline-block">
                        {/* <img src="../assets/images/logo_light.png" alt=""/> */}
                        <h1 className={props.themeClass} style={{ fontWeight: 'bold' }}>W-ScheduleViewer</h1>
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="navbar-mobile">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#"
                               className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                                <i className="icon-paragraph-justify3"></i>
                            </a>
                        </li>

                    </ul>

                    <span id="today-date" className="ml-md-3 mr-md-auto" style={{ fontSize: '20px' }}>{today}</span>

                    <ul className="navbar-nav">

                        <li className="nav-item dropdown dropdown-user">
                            <a className={`navbar-nav-link d-flex align-items-center dropdown-toggle ${props.themeClass}`}
                               data-toggle="dropdown">
                                 <img src={NancyProfile} className="rounded-circle mr-2" height="34" alt=""/>
                                <span>Nancy Kapadia</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <a onClick={() => props.changeTheme(props.themes[0])} className="dropdown-item"><img src={FullMoon}/>Full Moon</a>
                                <a onClick={() => props.changeTheme(props.themes[1])} className="dropdown-item"><img src={Eclipse}/> Eclipse</a>
                                <a onClick={() => props.changeTheme(props.themes[2])} className="dropdown-item"><img src={NewMoon}/> New Moon</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default Header
