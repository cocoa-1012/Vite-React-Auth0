import React from 'react'
import { Helmet } from 'react-helmet'

import BrowserRouter from '../components/BrowserRouter'

import Alert from '../components/Alert'
import { useAlert } from '../contexts/AlertContext'

import Router, { history } from './Router'

function Main(): React.ReactElement {
  const {
    alert,
    setAlert,
  } = useAlert()

  return (
    <BrowserRouter history={history}>
      <Helmet>
        <script type='text/javascript' src='' />
      </Helmet>
      <Router />
      {alert ? (
        <Alert
          openError={true}
          onClose={() => {
            setAlert(undefined)
          }}
          type={alert.type}
          description={alert.description}
        />
      ) : undefined}
    </BrowserRouter>
  )
}

export default Main
