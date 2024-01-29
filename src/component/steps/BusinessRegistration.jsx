import React, { useContext, useEffect } from 'react';
import { StepperContext } from '../../contexts/StepperControl';
import { useState } from 'react';

const BusinessRegistration = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [formFields, setFormFields] = useState([{ filePath: '',  issuer: '', category:'', number:''  }]);
  //useEffect to execute the code only once the component mount
  useEffect(()=>{
    if(userData['businessRegInfo'] != undefined &&  formFields.length < 2){
      const copy = userData['businessRegInfo'];
      setFormFields([...copy]);
    }

  },[])
    // function to handle user change user inputs
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const fieldsCopy = [...formFields];
    fieldsCopy[index][name] = value;
    setFormFields(fieldsCopy);
    setUserData({...userData, ['businessRegInfo']:fieldsCopy})
  };
    // function to add field
  const handleAddField = () => {
    setFormFields([...formFields, { filePath: '',  issuer: '', category:'', number:''}]);
    setUserData({...userData, ['businessRegInfo']: [...formFields]}) 
  };
  // Function to remove a field
  const handleRemoveField = (index) => {
    const fieldsCopy = [...formFields];
    fieldsCopy.splice(index, 1);
    setFormFields(fieldsCopy);
    setUserData({...userData, ['businessRegInfo']:fieldsCopy})
  };

  // Function to handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the formFields data, e.g., send it to a server
  //   console.log(formFields);
  // };

  return (
    <>
     <h1 className='text-2xl font-bold mb-4'>Business Registration</h1>
    
      {/* Mapping through formFields to dynamically render form fields */}
      {
      formFields.map((field, index) => (
        <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-5 justify-center items-center border bg-white my-2 p-4 rounded' key={index}>
          <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            image
            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="file"
              name="filePath"
             // value={field.filePath}
              onChange={(event) => handleInputChange(index, event)}
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          </div>
          <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            issuer
            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="text"
              name="issuer"
              value={field.issuer}
              placeholder='Issuer'
              onChange={(event) => handleInputChange(index, event)}
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          </div>
          <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            category
            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="text"
              name="category"
              value={field.category}
              placeholder='Category'
              onChange={(event) => handleInputChange(index, event)}
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          </div>
          <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            number
            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="text"
              name="number"
              value={field.number}
              placeholder='Number'
              onChange={(event) => handleInputChange(index, event)}
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          </div>
          {/* Allowing removal of a field only if there is more than one field */}
          {formFields.length > 1 && (
           <div className='w-full mx-2 flex-1'>
           <div className='bg-white my-2 p-1 flex items-center justify-center'>
             <button 
               className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
               type="button" onClick={() => handleRemoveField(index)}>
               Remove
             </button>
           </div>
         </div>
          )}
        </div>
      ))
      }
      {/* Button to add a new field */}
      <button
      className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
       type="button" onClick={handleAddField}>
        Add More
      </button>
      {/* Button to submit the form */}
      <button type=""></button>
     
    </>
  );
};

export default BusinessRegistration;
