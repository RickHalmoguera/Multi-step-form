import arcade from '../../assets/icon-arcade.svg'
import advance from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'
import './SelectPlan.css'


export  function SelectPlan() {
    return (
        <div className='step-card '>
            <div className='card-heading'>
                <h1 className='card-title'>Select your Plan</h1>
                <p className='step-card-info'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='plan-selector-container'>
                <div className='plan-container'>
                    <img src={arcade} alt='arcade' />
                    <div className='plan-info'>
                        <p className='plan-title'>Arcade</p>
                        <p className='amount'>$90/yr</p>
                        <span className='offer'>2 months free</span>
                    </div>
                </div>
                <div className='plan-container'>
                    <img src={advance} alt='advance' />
                    <div className='plan-info'>
                        <p className='plan-title'>Advanced</p>
                        <p className='amount'>$120/yr</p>
                        <span className='offer'>2 months free</span>
                    </div>
                </div>
                <div className='plan-container'>
                    <img src={pro} alt='pro' />
                    <div className='plan-info'>
                        <p className='plan-title'>Pro</p>
                        <p className='amount'>$150/yr</p>
                        <span className='offer'>2 months free</span>
                    </div>
                </div>
            </div>
            <div className='payment-selector-container'>
            <span className='monthly'>Monthly</span>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>
            <span className='yearly'>Yearly</span>
            </div>
            <div className='buttons-container'>
                <button className='button-back'>Go back</button>
                <button className='button-next'>Next Step</button>
            </div>
        </div>
    )
}
