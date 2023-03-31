import { configureStore } from '@reduxjs/toolkit'
import Child1 from '../components/altcomponents/Child1'

export const store = configureStore({
    reducer: {
        activeTheme: Child1,
    },
})