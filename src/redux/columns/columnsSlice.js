import { createSlice } from "@reduxjs/toolkit"
import { addColum, delColumn, fetchColumnsByIdBoards, updateColumn } from "./operations"

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchColumnsByIdBoards.pending, state => {
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
            .addCase(addColum.fulfilled, (state, { payload }) => {
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addColum.rejected, (state, { payload }) => {
                state.error = payload;
            })
            .addCase(delColumn.fulfilled, (state, { payload }) => {
                state.error = null;
                const index = state.items.findIndex(item => item.id === payload.id);
      			state.items.splice(index, 1);
            })
            .addCase(delColumn.rejected, (state, { payload }) => {
            state.error = payload
            })
            .addCase(updateColumn.fulfilled, (state, { payload }) => {
            //
            })
            .addCase(updateColumn.rejected, (state, { payload }) => {
            //
        })
    },
})

export const columnsReducer = columnsSlice.reducer;