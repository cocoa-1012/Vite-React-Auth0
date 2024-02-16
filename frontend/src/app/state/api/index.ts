import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import auth0 from 'auth0-js'

import { Auth0Session } from './types'

const getSession = async (): Promise<Auth0Session> => {
  const webAuth = new auth0.WebAuth({ 
    domain: import.meta.env.VITE_AUTH0_DOMAIN, 
    clientID: import.meta.env.VITE_AUTH0_CLIENT_ID, 
    redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    scope: 'openid profile email offline_access',
    responseType: 'token', 
  })

  return new Promise((resolve, reject) => {
    webAuth.checkSession({}, function (err, authResult) {
      if (err) {
        return reject(err)
      }
      
      resolve(authResult)
    })
  })
}

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_SERVER_URL || 'http://localhost:8080',
  credentials: 'include',
  prepareHeaders: async (headers) => {

    const session = await getSession()

    if (session.accessToken) {
      headers.set('Access-Control-Allow-Credentials', 'true')
      headers.set('Authorization', `Bearer ${session.accessToken}`)
    }

    return headers
  },
})

const bgaApi = createApi({
  reducerPath: 'bgaApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: []
})

export default bgaApi

