import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo'
import { SelectPlan } from './components/SelectPlan/SelectPlan'
import { StepIndicator } from './components/StepIndicator/StepIndicator'
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import { Addons } from './components/Addons/Addons'
import { useState, useEffect } from "react";

function App() {
  const [profile, setProfile] = useState({name: '', email: '', phone:'',plan:''})
  
  const getData =(data) => {
    setProfile(profile =>({...profile,...data}))  
    console.log(profile)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonalInfo  func={getData}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/select-plan",
      element: <SelectPlan/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/addons",
      element: <Addons/>,
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
