import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: false,
}

export const Child1 = createSlice({
    name: 'theme',
    initialState,
    reducers: {
       dark: (state) =>{
        state.theme = false
       },
       light: (state) =>{
        state.theme = true
       }
    },
})


export const {dark,light } = Child1.actions

export default Child1.reducer