import bgaApi from '../../state/api'

import {
  PostUserRequestPayload,
  PostUserResponseBody,
} from './types'

const authService = bgaApi.injectEndpoints({
  endpoints: build => ({
    postUser: build.mutation<PostUserResponseBody, PostUserRequestPayload>({
      query: () => ({
        url: '/api/private',
        method: 'POST',
      }),
    }),
  }),
})

export default authService

export const {
  usePostUserMutation,
} = authService

export const {
  endpoints: {
    postUser
  },
} = authService
