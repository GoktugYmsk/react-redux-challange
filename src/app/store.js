import { configureStore } from '@reduxjs/toolkit'
import Child1 from '../components/altcomponents/Child1'
import Child2 from '../components/altcomponents/Child2'

export const store = configureStore({
    reducer: {
        activeTheme: Child1,
        loginPage: Child2,
    },
})