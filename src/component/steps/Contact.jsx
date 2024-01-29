import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperControl';

const Contact = () => {
  const { userData, setUserData } = useContext(StepperContext);

    // function to handle user change user inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3 text-left'>
        {/* email */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            email
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["email"] || ""}
              name="email"
              placeholder='Email eg: iyadpaki@gmail.com'
              type=''
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        {/* phone */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            phone number
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["phone"] || ""}
              name="phone"
              placeholder='Phone Number eg: 07035749821'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        {/* address */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            address
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder='Address'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
