import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users/users";
export default configureStore({
    reducer:{
            users
    }
})