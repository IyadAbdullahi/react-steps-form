import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperControl';

const BusinessLocation = () => {
  const { userData, setUserData } = useContext(StepperContext);

  // function to handle user change user inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3 text-left'>
        {/* business address */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Business address
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessAddress"] || ""}
              name="businessAddress"
              placeholder='Business Address'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>
        
        {/* Registered Business Premise */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
          Registered Business Premise
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessPremiseReg"] || ""}
              name="businessPremiseReg"
              placeholder='Registered Business Premise'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

         {/* Business LGA */}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
          Business LGA
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessLga"] || ""}
              name="businessLga"
              placeholder='Business LGA'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

         {/* Business LGA Code*/}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
          Business LGA Code
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessLgaCode"] || ""}
              name="businessLgaCode"
              placeholder='business LGA Code'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

         {/* Business Ward */}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
          Business Ward
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessWard"] || ""}
              name="businessWard"
              placeholder='Business Ward'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

      </div>

     
    </>
  );
};

export default BusinessLocation;
