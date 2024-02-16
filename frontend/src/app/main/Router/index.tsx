import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'

import LoginPage from '../../pages/auth/Login/Login'
import SignUpPage from '../../pages/auth/SignUp/SignUp'
import ForgotPassword from '../../pages/auth/ForgotPassword/ForgotPassword'
import GameSetup from '../../pages/GameSetUp/GameSetUp'

import RequireSignIn from './RequireSignIn'
import AuthCallback from './AuthCallback'
import GuestViewPage from '../../pages/GuestView/GuestView'
import HostViewPage from '../../pages/HostView/HostView'
import ControlRoomPage from '../../pages/ControlRoom/ControlRoom';

export { default as history } from './history'

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path='/auth-callback' element={<AuthCallback />} />
      <Route path='/signin' element={<LoginPage />} />
      <Route path='signup' element={<SignUpPage />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route 
        path='/' 
        element={
          // <RequireSignIn>
            <GameSetup />
          // </RequireSignIn>
        } 
      />
      <Route path='guest-view' element={<GuestViewPage />} />
      <Route path='host-view' element={<HostViewPage />} />
      <Route path='control-room' element={<ControlRoomPage />} />
    </Routes>
  )
}

export default Router
