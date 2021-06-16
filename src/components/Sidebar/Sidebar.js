import React from 'react'
import { withRouter } from 'react-router-dom';
import CalendarSidebar from '../Calendar/Calendar-sidebar';

function Sidebar(proprs) {
	var style={
		height: "100%"	  
	}
	return (

		<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

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
					<div class="card-body">
						<CalendarSidebar/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default withRouter(Sidebar);