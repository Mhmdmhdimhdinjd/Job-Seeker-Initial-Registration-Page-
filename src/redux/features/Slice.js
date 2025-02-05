import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'job_seeker',
  initialState: {
    PersonalInformation: 0,
  },
  reducers: {
    setInformation: (state , action ) => {
      state.PersonalInformation = action.payload;
    },
  }
});

export const { setInformation } = counterSlice.actions;

export default counterSlice.reducer;
