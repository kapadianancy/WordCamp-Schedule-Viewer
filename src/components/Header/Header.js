import React from 'react';
import NancyProfile from '../../../public/assets/images/nancy-profile.jpeg';

function Header(props) {
    var divStyle = {
        color: 'red'
    }
    var style={
        height:70
    }
       
    return (
        <>
            <div className="navbar navbar-expand-md navbar-dark" style={style}>
                <div className="navbar-brand">
                    <a href="#" className="d-inline-block">
                        {/* <img src="../assets/images/logo_light.png" alt=""/> */}
                        <h1 style={{color: "white", fontWeight: "bold"}}>WordCamp Schedule Viewer</h1>
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

                    <span  id="today-date" className="ml-md-3 mr-md-auto" style={{fontSize:"20px"}}>Today's Date</span>

                    <ul className="navbar-nav">


                        <li className="nav-item dropdown dropdown-user">
                            <a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle"
                               data-toggle="dropdown">
                                 <img src={NancyProfile} className="rounded-circle mr-2" height="34" alt=""/>
                                {/*<Avatar name={user == null ? null : user.name} round={true} size="50" color="#26a69a"*/}
                                {/*        style={{margin: "5px 10px 10px auto"}}/>*/}
                                <span>Nancy Kapadia</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;