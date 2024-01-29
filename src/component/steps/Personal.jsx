import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperControl';
import { useState } from 'react';

const Personal = () => {
  const [image, setImage] = useState(null);
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    //console.log(userData['form']);
  };

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const combinedChangeHandler = (e) => {
    handleChange(e);
    handleFileChange(e);
    // Add more functions if needed
  };

  return (
    <>
      <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3 text-left'>
        {/* first name */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            First Name
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["firstName"] || ""}
              name="firstName"
              placeholder='First Name'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        {/* last name */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Last Name
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["username"] || ""}
              name="username"
              placeholder='Username'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        {/* middle name */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Middle Name
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["middleName"] || ""}
              name="middleName"
              placeholder='Middle Name'
              type='text'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>
      </div>

      {/* another section */}
      <div className='grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3 text-left'>
        {/* DOB */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            DOB
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["dob"] || ""}
              name="dob"
              type='date'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* age category */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Age Category
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <select
              onChange={handleChange}
              name="ageCategory"
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="c18-25" {...(userData['ageCategory']=='c18-25' ? { selected: 'selected' } : "")}>18 - 25</option>
              <option value="c26-35" {...(userData['ageCategory']=='c26-35' ? { selected: 'selected' } : "")}>26 - 35</option>
              <option value="c36-45" {...(userData['ageCategory']=='c36-45' ? { selected: 'selected' } : "")}>36 - 45</option>
              <option value="c46-above" {...(userData['ageCategory']=='c46-above' ? { selected: 'selected' } : "")}>46 - Above</option>
            </select>
          </div>
        </div>

        {/* gender */}
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Gender
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="radio"
              id="male"
              value="male"
              checked={userData['gender'] == 'male'? 'male':""}
              onChange={handleChange}
              name="gender"
              className="mr-2 text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500"
            />
            <label htmlFor="male" className="text-sm text-gray-900 dark:text-white text-bold">Male</label>
          </div>

          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              type="radio"
              id="female"
              value="female"
              checked={userData['gender'] === 'female'? 'female':""}
              onChange={handleChange}
              name='gender'
              className="mr-2 text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500"
            />
            <label htmlFor="female" className="text-sm text-gray-900 dark:text-white text-bold"> Female</label>
          </div>
        </div>

      {/* image */}

      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            Passport Photo
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              name="ownerPicture"
              type='file'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

    {/* identification */}
    <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            id type
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <select
              onChange={handleChange}
              name="documentType"
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="nin" {...(userData['documentType']==='nin' ? { selected: 'selected' }: "")}>NIN</option>
              <option value="votersCard" {...(userData['documentType']==='votersCard' ? { selected: 'selected' } : "")}>Voters Card</option>
              <option value="driverLicense" {...(userData['documentType']==='driverLicense' ? { selected: 'selected' } : "")}>Driver License</option>
              <option value="ePassport" {...(userData['documentType']=== 'ePassport' ? { selected: 'selected' } : "")}>E-Passport</option>
            </select>
          </div>
        </div>

         {/* ID image */}

      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 text-gray-500 text-xs leading-8 uppercase'>
            id image
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              name="filePath"
              placeholder='Username'
              type='file'
              className='bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

   </div>
    </>
  );
};

export default Personal;
