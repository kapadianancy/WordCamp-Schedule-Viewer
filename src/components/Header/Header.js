import React from 'react'
import NancyProfile from '../../../public/images/nancy-profile.jpeg'
function Header (props) {
  const imageStyle = {
    height: '50px',
    width: '50px'
  }
  return (
        <>
           <img src={ NancyProfile} style={imageStyle} />
        </>
  )
}
export default Header
