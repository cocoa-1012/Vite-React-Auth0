import { useCallback, useMemo, createContext, useContext } from 'react' 
import { useDispatch } from 'react-redux'
import auth0, { Auth0DecodedHash, Auth0Error, Auth0ParseHashError } from 'auth0-js'

import { setSession } from '../../hooks/useSession'

import { Props } from './types'

const DATABASE_CONNECTION = import.meta.env.VITE_AUTH0_DATABASE_CONNECTION 

const AuthContext = createContext<{
  loginWithEmailPassword: (email: string, password: string) => Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  loginWithGoogle: () => void,
  getAuthInfo: () => Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  getUser: (accessToken: string) => Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  resetPassword: (email: string) => Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  signUp: (username: string, email: string, password: string) => Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  signOut: () => void,
}>(undefined as any) // eslint-disable-line @typescript-eslint/no-explicit-any

function AuthContextProvider({ children }: Props) {
  const dispatch = useDispatch()

  const webAuth = useMemo(() => new auth0.WebAuth({ 
    domain: import.meta.env.VITE_AUTH0_DOMAIN, 
    clientID: import.meta.env.VITE_AUTH0_CLIENT_ID, 
    redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    scope: 'openid profile email offline_access',
    responseType: 'token',
  }), [])

  const loginWithEmailPassword = useCallback((email: string, password: string) => { 
    const urlParams = new URLSearchParams(window.location.search)
    const stateParam = urlParams.get('state') || '' 

    return new Promise((resolve, reject) => { 
        webAuth.login({ 
          email,
          password,
          realm: DATABASE_CONNECTION, 
          state: stateParam,
        }, (error: Auth0Error | null, result) => { 
          if (error) { 
            return reject(error) 
          }
          console.log('auth0 login result:', result)
          resolve(result) 
        }) 
    }) 
  }, [webAuth])

  const signOut = useCallback(() => {
    webAuth.logout({ returnTo: import.meta.env.VITE_AUTH0_LOGOUT_REDIRECTION_URL })
    dispatch(setSession(undefined))
  }, [webAuth])

  const getAuthInfo = useCallback(() => {
    return new Promise((resolve, reject) => {
      webAuth.parseHash({ hash: window.location.hash }, function(err: Auth0ParseHashError | null, authResult: Auth0DecodedHash | null) {
        if (err) {
          return reject(err)
        }
        // It can include the following:
        // authResult.accessToken - access token for the API specified by `audience`
        // authResult.expiresIn - string with the access token's expiration time in seconds
        // authResult.idToken - ID token JWT containing user profile information
        resolve(authResult)
      })
    })
  }, [webAuth])
 
  const getUser = useCallback((accessToken: string) => {
    return new Promise((resolve, reject) => {
      webAuth.client.userInfo(accessToken, function(err, user) {
        if (err) {
          return reject(err)
        }

        resolve(user)
      })
    })
  }, [webAuth])
  
  const loginWithGoogle = useCallback(() => webAuth.authorize({ connection: 'google-oauth2' }), [webAuth]) 

  const resetPassword = useCallback((email: string) => {
    return new Promise((resolve, reject) => {
      webAuth.changePassword({
        email,
        connection: DATABASE_CONNECTION,
      }, (error, result) => {
        if (error) {
          reject(error)
          return
        }

        resolve(result)
      })
    })
  }, [webAuth])

  const signUp = useCallback((username: string, email: string, password: string) => { 
    return new Promise((resolve, reject) => { 
      webAuth.signup({ 
        connection: DATABASE_CONNECTION, 
        password: password,
        username,
        email, 
      }, 
      (error, result) => { 
        if (error) { 
            reject(error) 
            return 
        } 
        resolve(result) }) }) 
      }, [webAuth]) 

    const value = useMemo(
      () => ({ 
        loginWithEmailPassword, 
        loginWithGoogle,
        getAuthInfo,
        getUser,
        resetPassword,
        signUp,
        signOut,
      }), 
    [
      loginWithGoogle, 
      loginWithEmailPassword,
      getUser,
      getAuthInfo,
      resetPassword,
      signUp,
      signOut,
    ]) 

    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
} 

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)
