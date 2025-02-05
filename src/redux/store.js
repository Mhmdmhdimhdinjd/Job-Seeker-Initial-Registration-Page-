import { configureStore } from '@reduxjs/toolkit';
import PersonalInformation from './features/Slice';

const store = configureStore({
  reducer: {
    job_seeker: PersonalInformation
  }
});

export default store;
