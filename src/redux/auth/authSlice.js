/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, changeSetting } from './operations';

const initialState = {
	user: { id: null, name: null, email: null, avatarURL: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.error = null;
				state.isRegistering = true;
				state.isRegistered = false;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.isRegistering = false;
				state.isRegistered = true;
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isRegistering = false;
				if (payload) state.error = 'Error create user... Please change name or email.';
			})
			.addCase(logIn.pending, state => {
				state.error = null;
				state.isLogging = true;
			})
			.addCase(logIn.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
				state.isLogging = false;
			})
			.addCase(logIn.rejected, (state, { payload }) => {
				if (payload) state.error = 'Login error, please repeat.';
				state.isLogging = false;
			})
			.addCase(logOut.pending, state => {
				state.error = null;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(logOut.rejected, state => {
				state.error = 'Logout error...';
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state, { payload }) => {
				state.isRefreshing = false;
				state.error = payload;
			})
			.addCase(changeSetting.pending, state => {
				//
			})
			.addCase(changeSetting.fulfilled, (state, { payload }) => {
				//
			})
			.addCase(changeSetting.rejected, (state, { payload }) => {
				//
			});
	},
});

export const authReducer = authSlice.reducer;

export const { resetError } = authSlice.actions;
