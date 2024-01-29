import { useState } from 'react';
import './App.css'
import Stepper from "./component/Stepper";
import StepperContoll from "./component/StepperControll";
import Contact from "./component/steps/Contact";
import Business from "./component/steps/Business";
import Personal from "./component/steps/Personal";
import { StepperContext } from './contexts/StepperControl';
import BusinessLocation from './component/steps/BusinessLocation';
import BusinessRegistration from './component/steps/BusinessRegistration';
import SocialAccounts from './component/steps/SocialAccounts';
import { Final } from './component/steps/Final';
import TaxInformation from './component/steps/TaxInformation';

function App() {

  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    'Personal Information',
    'Contact Details',
    'Business Information',
    'Business Location',
    'Business Registration',
    'Social Accounts',
    'Tax Information',
    'Final'
    
  ];
  const displaySteps = (step)=>{
    switch (step) {
      case 1:
        return <Personal />
      case 2:
        return <Contact />
      case 3:
        return <Business />
      case 4:
        return <BusinessLocation />
      case 5:
        return <BusinessRegistration />
      case 6:
          return <SocialAccounts />
      case 7:
          return <TaxInformation />
      case 8:
        return <Final />
    }
  }

  const handleClick = (direction)=>{
    let newStep = currentStep;

    direction == "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

  }

  const handleSubmit = async () => {
    console.log('Submitting data:', userData);
  
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
  
      if (response.ok) {
        console.log('Data submitted successfully');
        handleClick('next');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div className="md:w-1/1 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* setpper */}
        <div className='container horizontal mt-5'>
          <Stepper 
          steps ={steps}
          currentStep ={currentStep}
          />
        </div> 

        {/* displaying comp */}
        <div className='my-10 pt-3 pl-10 pr-10 pb-2'>
        <StepperContext.Provider
        value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}
        >
        {displaySteps(currentStep)}
        </StepperContext.Provider>
        </div>
        {/* Navigaton Controls */}
        <div className='container horizontal mt-2'>
        {currentStep !== steps.length &&
        <StepperContoll 
        handleClick  = {handleClick }
        currentStep = {currentStep}
        steps = {steps}
        handleSubmit = {handleSubmit}
        />
        }
        </div>
    </div> 
  );
}

export default App
