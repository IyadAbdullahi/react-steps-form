import React from 'react';

const StepperControll = ({ handleClick, currentStep, steps, handleSubmit }) => {
  return (
    <div className='container flex justify-around mb-8'>
      {/* back button */}
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl
        font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700
        hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
        Back
      </button>
      {/* submit button */}
      {currentStep === steps.length - 1 ? (
        <button
          type='button'
          onClick={handleSubmit}
          className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl
          font-semibold cursor-pointer hover:bg-slate-700
          hover:text-white transition duration-200 ease-in-out'>
          Submit
        </button>
      ) : (
        // next button
        <button
          onClick={() => handleClick("next")}
          className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl
          font-semibold cursor-pointer  hover:bg-slate-700
          hover:text-white transition duration-200 ease-in-out'>
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      )}
    </div>
  );
};

export default StepperControll;
