import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'login failed');
      }
      const data = await response.json();
      localStorage.setItem('token', data.body.token);
      return data.body.token;
    } catch (error) {
      return rejectWithValue(error.message || 'An error occured');
    }
  },
);

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(authSlice.actions.logout());
};

const authState = {
  isLoading: false,
  userInfos: {},
  userToken: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    logout(state) {
      state.userToken = null;
      state.isAuthenticated = false;
      state.userInfos = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userToken = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
