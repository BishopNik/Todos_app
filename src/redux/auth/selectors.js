/** @format */

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const statusUserError = state => state.auth.error;

export const selectUserTheme = state => state.auth.user.theme;

export const selectIsLoading = state => state.auth.isLoading;
