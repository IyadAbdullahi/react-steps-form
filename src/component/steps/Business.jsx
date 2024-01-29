import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperControl';

const Business = () => {

  const { userData, setUserData } = useContext(StepperContext);

  // function to handle user change user inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3 text-left'>
        {/* first name */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Business name
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessName"] || ""}
              name="businessName"
              placeholder='Business Name'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        {/* business sector */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            business sector
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <select
              onChange={handleChange}
              name="businessSector"
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="Tech" {...(userData['businessSector']=='Tech' ? { selected: 'selected' } : "")}>Tech</option>
              <option value="Non-tech" {...(userData['businessSector']=='Non-tech' ? { selected: 'selected' } : "")}>Non-tech</option>
            </select>
          </div>
        </div>

        
        {/* years of operation */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            years of operation
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["yearsOfOperation"] || ""}
              name="yearsOfOperation"
              placeholder='Years Of Operation'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

         {/* number of staff */}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            number of staff
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["numberOfStaff"] || ""}
              name="numberOfStaff"
              placeholder='Number Of Staff'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

         {/* number of staff */}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Business Membership
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["businessMembership"] || ""}
              name="businessMembership"
              placeholder='Business Membership'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* trade type */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Trade Type
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["tradeType"] || ""}
              name="tradeType"
              placeholder='Trade Type'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* number of staff */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            trade clustera
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["tradeCluster"] || ""}
              name="tradeCluster"
              placeholder='Trade Cluster'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* business sector */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            business class
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <select
              onChange={handleChange}
              name="businessClass"
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="Nano" {...(userData['businessClass']=='Nano' ? { selected: 'selected' } : "")}>Nano</option>
              <option value="Micro" {...(userData['businessClass']=='Micro' ? { selected: 'selected' } : "")}>Micro</option>
              <option value="Small" {...(userData['businessClass']=='Small' ? { selected: 'selected' } : "")}>Small</option>
              <option value="Medium" {...(userData['businessClass']=='Medium' ? { selected: 'selected' } : "")}>Medium</option>
            </select>
          </div>
        </div>

         {/* business Registration Status */}
         <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            business registration status
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <select
              onChange={handleChange}
              name="businessRegStatus"
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="Registered" {...(userData['businessRegStatus']=='Registered' ? { selected: 'selected' } : "")}>Registered</option>
              <option value="Not-registered" {...(userData['businessRegStatus']=='Not-registered' ? { selected: 'selected' } : "")}>Not-registered</option>
            </select>
          </div>
        </div>

        {/* Trade Certificate */}

      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Business Training Certificate
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <textarea
              onChange={handleChange}
              name="businessTrainingCerts"
              value={userData["businessTrainingCerts"] || ""}
              placeholder='Eg : computer/human relation'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

      </div>

     
    </>
  );
};

export default Business;
