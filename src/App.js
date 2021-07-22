import React from 'react'
import Routes from './Routes/Routes'
import { withRouter } from 'react-router'
import styles from '../public/assets/css/index.scss'

function App (props) {
  return (
        <>
            <Routes/>
        </>

  )
}

export default withRouter(App)
