import { configureStore } from "@reduxjs/toolkit";
import user1Reducer from "./UserSlice";
import cart2Reducer from "./CartSlice";

const store = configureStore({
   reducer:{
     userSlice: user1Reducer,
     Slice2 : cart2Reducer,
   }
})

export default store;