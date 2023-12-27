// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const localStorageTheme = localStorage.getItem('theme');
const initialTheme = localStorageTheme ? localStorageTheme : 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Update localStorage
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
