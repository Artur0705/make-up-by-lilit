import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

export const getContacts = createAsyncThunk(
  "contact/get-contacts",
  async (thunkAPI) => {
    try {
      return await contactService.getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAContact = createAsyncThunk(
  "contact/get-contact",
  async (contactId, thunkAPI) => {
    try {
      return await contactService.getContact(contactId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  contacts: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleContact = action.payload;
      })
      .addCase(getAContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default contactSlice.reducer;
