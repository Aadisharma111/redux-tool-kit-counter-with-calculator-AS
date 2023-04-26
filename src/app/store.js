import { configureStore } from "@reduxjs/toolkit";
import addSubReducer from "../features/addsub/AddSubSlice";


export const store = configureStore({
    //1 p:V
    reducer:{
        //we can take as A Point consider value

        // Also use of the Method
        addSub:addSubReducer
    }
})