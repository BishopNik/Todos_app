/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, changeSetting } from './operations';

const initialState = {
	user: {name: null, email: null, avatarURL: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	error: null,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		})
			.addCase(register.fulfilled, (state, { payload }) => {
				if (payload === undefined) {
					state.isLoading = false
                return
            }
				state.error = null;
				state.user = payload.user;
				state.isLoading = false
			})
			.addCase(logIn.pending, state => {
				state.isLoading = true
			})
			.addCase(logIn.fulfilled, (state, { payload }) => {
				if (payload === undefined) {
					state.isLoading = false
                return
            }
				state.error = null
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
				state.isLoading = false
			})
			.addCase(logIn.rejected, (state, { payload }) => {
				state.error = payload;
				alert(state.error)
			})
			.addCase(logOut.fulfilled, state => {
				state.error = null
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(logOut.rejected, (state, payload) => {
				state.error = payload;
				alert(state.error)
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
