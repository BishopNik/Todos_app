/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { addColumn, delColumn, fetchColumnsByIdBoards, updateColumn } from './operations';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const columnsSlice = createSlice({
	name: 'columns',
	initialState,
	reducers: {
		updateStateAfterDeleteBoard: (state, { payload }) => {
			const { id } = payload;
			state.items = state.items.filter(item => item.boarderId !== id);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchColumnsByIdBoards.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchColumnsByIdBoards.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(fetchColumnsByIdBoards.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(addColumn.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items.push(payload);
			})
			.addCase(addColumn.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(delColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items = state.items.filter(item => item._id !== payload);
			})
			.addCase(delColumn.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(updateColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items = state.items.map(item => {
					if (item._id === payload._id) return payload;
					return item;
				});
			})
			.addCase(updateColumn.rejected, (state, { payload }) => {
				state.error = payload;
			});
	},
});

export const columnsReducer = columnsSlice.reducer;
