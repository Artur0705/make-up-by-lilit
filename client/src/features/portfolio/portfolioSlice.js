import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import portfolioService from "./portfolioService";

export const getPortfolios = createAsyncThunk(
  "portfolio/get-portfolios",
  async (thunkAPI) => {
    try {
      return await portfolioService.getPortolios();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAPortfolio = createAsyncThunk(
  "portfolio/get-portfolio",
  async (portfolioId, thunkAPI) => {
    try {
      return await portfolioService.getPortfolio(portfolioId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  portfolios: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolios.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPortfolios.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.portfolios = action.payload;
      })
      .addCase(getPortfolios.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAPortfolio.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAPortfolio.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singlePortfolio = action.payload;
      })
      .addCase(getAPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default portfolioSlice.reducer;
