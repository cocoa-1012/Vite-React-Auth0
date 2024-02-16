import React from 'react'
import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'

import useRouteQuery from '../../../hooks/useRouteQuery'

import useSession from '../../../hooks/useSession'

import { Props } from './types'

function RequireSignIn({
  children,
  only,
}: Props): React.ReactElement {
  
  const routeQuery = useRouteQuery()
  const location = useLocation()
  const { user } = useSession()

  if (only && !only({ routeQuery })) {
    return children || <Outlet />
  }

  if (!user) {
    return (
      <Navigate
        to='/signin'
        state={{ from: location }}
      />
    )
  }

  return children || <Outlet />
}

export default React.memo(RequireSignIn)
