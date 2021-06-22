/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import React from 'react'
import { withRouter } from 'react-router-dom'
import CalendarSidebar from '../Calendar/Calendar-sidebar'
import SideBar from '../../../public/assets/images/calendar.png'

function Sidebar (props) {
  const style = {
    paddingRight: '5px'
  }

  const cardStyle = { margin: '0px 5px' }
  return (

		<div className={`sidebar sidebar-main sidebar-expand-md ${props.themeClass}`} style={style}>

			<div className="sidebar-mobile-toggler text-center">
				<a href="#" className="sidebar-mobile-main-toggle">
					<i className="icon-arrow-left8"></i>
				</a>
				Navigation
				<a href="#" className="sidebar-mobile-expand">
					<i className="icon-screen-full"></i>
					<i className="icon-screen-normal"></i>
				</a>
			</div>

			<div className="sidebar-content" style={style}>

			<div className="sidebar-user">
					<div className="card-body __web-inspector-hide-shortcut__" style={cardStyle} >
						<div className="media">
							<div className="mr-3">
							<img src={SideBar} width="38" height="38" alt=""/>
							</div>
							<div className="media-body">
								<CalendarSidebar/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
export default withRouter(Sidebar)
