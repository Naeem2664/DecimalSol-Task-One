import React ,{useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../styles/form.css";
import { fontFamily, fontSize } from "../assets/fonts";
import {
  updateField,
  nextStep,
  prevStep,
  submitForm,
} from "../features/slices/formSlice";
const FormComponent = () => {
  const dispatch = useDispatch();

  const { step, formData } = useSelector((state) => state.form);
  const handleChange = (e) => {
    dispatch(updateField({ [e.target.name]: e.target.value }));
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
  };
  const handleSubmit = () => {
    dispatch(submitForm(formData));
    alert("Form submitted successfully!");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <input
              name="street"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
            />
          </>
        );

      default:
        return null;
    }
  };

  const applyStyles = () => {
    const inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
      input.style.fontFamily = fontFamily.poppins;
      input.style.fontSize = fontSize.base;
    }
  };
  useEffect(() => {
    applyStyles();
  }
  , [step ]);
  
  return (
    <>
      <div className="container" style={{fontFamily:fontFamily.poppins}}>
        <h1 style={{ fontFamily: fontFamily.poppinsBold ,fontSize:fontSize["4xl"]}}>User Info</h1>
        <form action="" className="form">
          {renderStep()}
          <div className="btns">
            {step > 1 && (
              <button type="button" onClick={handlePrev}>
                Previous
              </button>
            )}
            {step < 2 && (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {step === 2 && (
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
