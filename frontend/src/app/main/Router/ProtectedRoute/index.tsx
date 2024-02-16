import React, {
  useEffect,
  useMemo,
} from 'react'

import { Outlet } from 'react-router-dom'


import useSession, { SessionState } from '../../../hooks/useSession'

import Error403 from '../../../pages/error/Error403'

import { Props } from './types'

function ProtectedRoute({
  children,
  otherwise,
  test,
  toast,
}: Props): React.ReactElement {
  const session = useSession()
  /**
   * @todo implement toast in the ui package
   */
  const otherwises = useMemo(() => Array.isArray(otherwise) ? otherwise : [ otherwise ], [ otherwise ])
  const tests = useMemo(() => Array.isArray(test) ? test : [ test ], [ test ])
  const toasts = useMemo(() => Array.isArray(toast) ? toast : [ toast ], [ toast ])

  const failedTestIndex = tests.findIndex(test => test && !test(session))

  useEffect(() => {
    if (failedTestIndex >= 0) {
      if (toasts.length === 1) {
        return
      }

      const theToast = toasts[failedTestIndex]
      if (theToast) {
        // showToast(theToast)
      }
    }
  }, [
    failedTestIndex,
    toasts,
  ])

  if (failedTestIndex >= 0) {
    if (otherwises.length === 1) {
      return otherwises[0] || <Error403 />
    }

    if (otherwises[failedTestIndex]) {
      return otherwises[failedTestIndex] || <Error403 />
    }

    return <Error403 />
  }

  return children || <Outlet />
}

export default React.memo(ProtectedRoute)

export const isLoggedIn = (session: SessionState) => !!session?.user

export const isNotLoggedIn = (session: SessionState) => !session?.user


