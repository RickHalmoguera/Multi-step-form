import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo'
import { SelectPlan } from './components/SelectPlan/SelectPlan'
import { StepIndicator } from './components/StepIndicator/StepIndicator'
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import { Addons } from './components/Addons/Addons'
import { Summary } from './components/Summary/Summary'
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({
    name: '', 
    email: '', 
    phone:''
    ,plan:{
      name:'',
      cost:'',
      yearly: false
    },
    addons:{
      online:{
      want: false,
      month: 1,
      year: 10      
      },
      storage:{
          want: false,
          month: 2, 
          year: 20    
      },
      profile:{
          want: false,
          month: 2,
          year: 20     
      }
  }
  })
  
  const getData =(data) => {
    setProfile(profile =>({...profile,...data}))   
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonalInfo  func={getData}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/select-plan",
      element: <SelectPlan func={getData}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/addons",
      element: <Addons func={getData} yearly={profile.plan.yearly}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/summary",
      element: <Summary profile={profile}/>,
      errorElement: <ErrorPage />,
    },
  ]);
  
  
  return (
    <>
      <div className='card-container'>
        <StepIndicator/>
        <div className='steps-cards-container'>
          <RouterProvider router={router} />
        </div>
      </div>

      <footer>
          <button className='button-back'>Go Back</button>
          <button className='button-next'>Next Step</button>
        </footer>
    </>
  )
}

export default App
