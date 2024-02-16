import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import { RootState } from '../../types'

import {
  User,
} from './types'

export const initialState: any = { // eslint-disable-line @typescript-eslint/no-explicit-any
  accessToken: undefined,
  user: undefined,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<any>) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      if (!action.payload) {
        return initialState
      }

      return {
        ...state,
        ...action.payload,
      }
    },
    setUser: (state, action: PayloadAction<User | undefined>) => {
      if (!action.payload) {
        return state
      }

      state.user = action.payload

      return state
    },
    setUserEmailNotificationSetting: (state, action: PayloadAction<boolean>) => {
      if (!state.user) {
        return state
      }

      state.user.isEmailNotificationEnabled = action.payload

      return state
    },
  },
})

export const {
  setSession,
  setUserEmailNotificationSetting,
  setUser,
} = sessionSlice.actions

export const sessionSelectors = { session: (state: RootState) => state.session }

export default sessionSlice.reducer

export * from './types'
