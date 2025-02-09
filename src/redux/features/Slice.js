import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'job_seeker',
  initialState: {
    PersonalInformation: [
      {
        "firstName": "محمد مهدی",
        "lastName": "مهدی نژاد",
        "phoneNumber": "09114261502",
        "nationalCode": "2051398240",
        "gender": "male",
        "province": {
          "value": "mazandaran",
          "label": "مازندران"
        },
        "city": {
          "value": "sari",
          "label": "ساری"
        },
        "categories": [
          {
            "value": "health",
            "label": "سلامت"
          }
        ],
        "interests": [
          {
            "value": "reading1",
            "label": "1کتابخوانی"
          },
          {
            "value": "music",
            "label": "موسیقی"
          },
          {
            "value": "reading3",
            "label": "3کتابخوانی"
          }
        ],
        "ck": "<p>عتغافلقربزیسطیزبرلفقفاغعتزبرلاذتنمکجمحنخاعتغلب</p>"
      }
    ],
  },
  reducers: {
    setInformation: (state, action) => {
      state.PersonalInformation = action.payload;
      console.log(state.PersonalInformation)
    },
  }
});

export const { setInformation } = counterSlice.actions;

export default counterSlice.reducer;
