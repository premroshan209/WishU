import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishType: '',
  themeId: '',
  recipients: {
    type: 'individual', // or 'group'
    details: [{ name: '', email: '', dob: '' }]
  },
  images: [],
  gifts: [],
  quotes: [''],
};

const wishFormSlice = createSlice({
  name: 'wishForm',
  initialState,
  reducers: {
    setWishType: (state, action) => {
      state.wishType = action.payload;
    },
    setThemeId: (state, action) => {
      state.themeId = action.payload;
    },
    setRecipientType: (state, action) => {
      state.recipients.type = action.payload;
    },
    setRecipientDetails: (state, action) => {
      state.recipients.details = action.payload;
    },
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    setGifts: (state, action) => {
      state.gifts = action.payload;
    },
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
  },
});

export const {
  setWishType, setThemeId, setRecipientType, setRecipientDetails,
  addImage, setGifts, setQuotes
} = wishFormSlice.actions;

export default wishFormSlice.reducer;