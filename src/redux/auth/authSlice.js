const { createSlice } = require('@reduxjs/toolkit');
import { register, logIn, logOut, refreshUser } from '../auth/authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.]
  },
});
