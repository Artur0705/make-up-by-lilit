import { configureStore } from "@reduxjs/toolkit";

import serviceReducer from "../features/service/serviceSlice";
import authReducer from "../features/auth/authSlice";
import contactReducer from "../features/contact/contactSlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    auth: authReducer,
    contact: contactReducer,
    upload: uploadReducer,
  },
});
