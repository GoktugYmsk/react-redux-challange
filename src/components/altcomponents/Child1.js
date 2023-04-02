import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: false,
    message: '',
    deneme: '',
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
        },
        setDeneme:(state,acticon) => {
            state.deneme = acticon.payload;
        }
    },
})


export const { dark, light,setMessage,setDeneme } = Child1.actions

export default Child1.reducer