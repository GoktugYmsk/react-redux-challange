import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    password: '',
}

export const Child2 = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setPassword: (state, acticon) => {
            state.password = acticon.payload;
        },
    }
})


export const { setPassword } = Child2.actions

export default Child2.reducer