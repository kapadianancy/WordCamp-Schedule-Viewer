import React from 'react'
import Routes from './Routes/Routes'
import { withRouter } from 'react-router'
import styles from '../public/assets/css/index.scss'
import { getData } from './axios'

function App (props) {
  getData()
  return (
        <>
            <Routes/>
        </>

  )
}

export default withRouter(App)
