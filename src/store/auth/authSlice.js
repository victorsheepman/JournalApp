import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'name',
  initialState:{
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status='authenticated'
      state.displayName = payload.displayName;
      state.email = payload.email
      state.photoURL = payload.photoURL
      state.uid = payload.uid
      state.errorMessage = null
    },
    logout: (state, {payload}) => {
      state.status = 'not-authenticated'
      state.displayName = null
      state.email = null
      state.photoURL = null
      state.uid = null
      state.errorMessage = payload?.errorMessage
    },
    isCheking:(state)=>{
        state.status = 'checking'
    }
  },
})


export const { login, logout, isCheking  } = authSlice.actions