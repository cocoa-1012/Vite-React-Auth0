import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'

import PageLoader from '../../../components/PageLoader/PageLoader'

import useSession, { setSession } from '../../../hooks/useSession'
import { useAuth } from "../../../contexts/AuthContext"

import { Props } from './types'

function AuthSuccessRedirect({ children
}: Props): React.ReactElement {
  const dispatch = useDispatch()
  const location = useLocation()
  const { user } = useSession()
  const { getUser, getAuthInfo } = useAuth()

  useEffect(() => {
    const getAuth = async () => {
      const authResult: any = await getAuthInfo()  // eslint-disable-line @typescript-eslint/no-explicit-any
      if (!authResult) {
        return
      }
      console.log('auth result:', authResult)

      if (authResult.accessToken) {
        const user: any = await getUser(authResult.accessToken) // eslint-disable-line @typescript-eslint/no-explicit-any
        console.log('user: ', user)
        dispatch(setSession({
          ...authResult,
          user,
        }))
      }
    }

    getAuth()
  }, [])

  if (user) {
    return (
        <Navigate
          to='/'
          state={{ from: location }}
        />
      )  
  } else {
    return <PageLoader />
  }

  return children || <Outlet />
}

export default React.memo(AuthSuccessRedirect)
