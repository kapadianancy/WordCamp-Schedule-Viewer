import React from 'react'
import Routes from './Routes/Routes'
import { withRouter } from 'react-router'
import styles from '../public/assets/css/index.scss'
import { getData } from './axios'
import { Ready, Run } from '../public/assets/js/custom-calendar'

function App (props) {
  getData()
  Ready()

  return (
        <>
            <Routes/>
        </>

  )
}

export default withRouter(App)
