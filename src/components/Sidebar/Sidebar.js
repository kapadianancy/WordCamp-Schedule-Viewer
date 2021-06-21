import React from 'react'
import { withRouter } from 'react-router-dom';
import CalendarSidebar from '../Calendar/Calendar-sidebar';
import SideBar from '../../../public/assets/images/calendar.png';

function Sidebar(proprs) {
	var style={
		height: "100%"	  
	}

	return (

		<div class="sidebar sidebar-light sidebar-main sidebar-expand-md">

			<div class="sidebar-mobile-toggler text-center">
				<a href="#" class="sidebar-mobile-main-toggle">
					<i class="icon-arrow-left8"></i>
				</a>
				Navigation
				<a href="#" class="sidebar-mobile-expand">
					<i class="icon-screen-full"></i>
					<i class="icon-screen-normal"></i>
				</a>
			</div>
			
			
			<div class="sidebar-content" style={style}>

			
			<div class="sidebar-user">
					<div class="card-body __web-inspector-hide-shortcut__" style={{margin:"20px 5px"}}>
						<div class="media">
							<div class="mr-3">
							<img src={SideBar} width="38" height="38" alt=""/>
							</div>
							<div class="media-body">
								<CalendarSidebar/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default withRouter(Sidebar);