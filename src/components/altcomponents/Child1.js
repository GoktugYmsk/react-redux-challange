import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: false,
    message: '',
}

export const Child1 = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        dark: (state) => {
            state.theme = false
        },
        light: (state) => {
            state.theme = true
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    },
})


export const { dark, light,setMessage } = Child1.actions

export default Child1.reducer