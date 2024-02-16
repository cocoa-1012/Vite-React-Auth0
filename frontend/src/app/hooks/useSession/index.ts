import { useSelector } from 'react-redux'

import {
  sessionSelectors,
} from '../../state/slices/session'

function useSession() {
  const session = useSelector(sessionSelectors.session)

  return session || {}
}


export function useUserEmail() {
  const session = useSession()

  return session.user?.email || ''
}

export function useAuthInfo() {
  const session = useSession()
  const fullName = `${session.user?.firstName} ${session.user?.lastName}`
  const isLoggedInAndVerified = !!session.user && !!session.user.emailVerifiedAt
  const isNotLoggedIn = !session.user

  console.log("useSession:::", fullName, isLoggedInAndVerified, isNotLoggedIn)
  return {
    fullName,
    isLoggedInAndVerified,
    isNotLoggedIn,
  }
}

export default useSession

export * from '../../state/slices/session'
