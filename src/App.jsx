import './App.css'
import {PersonalInfo} from './components/PersonalInfo/PersonalInfo'
import { SelectPlan } from './components/SelectPlan/SelectPlan'
import { StepIndicator } from './components/StepIndicator/StepIndicator'

function App() {
  

  return (
    <>
      <div className='card-container'>
        <StepIndicator/>
        <div className='steps-cards-container'>
          {/*<PersonalInfo/>*/}
          <SelectPlan/>
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
