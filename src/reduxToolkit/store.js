import { configureStore } from "@reduxjs/toolkit"
import users from "./user/userSilce"

const store = configureStore({
    reducer:{
        users,
    }
})

export default store