import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.warning('Something went wrong. ');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong. Please, try again .');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    // return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistToken);
      const response = await axios.get('/users/current');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
