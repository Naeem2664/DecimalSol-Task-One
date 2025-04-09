import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  submittedData: [],
 
}
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    nextStep:(state)=>{
      if(state.step < 2){
        state.step += 1;
      }
    },
    prevStep:(state)=>{
      if(state.step > 1){
        state.step -= 1;
      }
    },
    submitForm: (state, action) => {
      state.submittedData.push(action.payload);
      state.formData = initialState.formData;
      state.step = 1;
    },
  },
});

export const {updateField,nextStep,prevStep,submitForm} = formSlice.actions;
export default formSlice.reducer;