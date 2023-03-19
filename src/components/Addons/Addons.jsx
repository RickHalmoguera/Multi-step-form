import { Link } from "react-router-dom";

import './Addons.css'

export function Addons() {
    return (
    <div className='step-card '>
            <div className='card-heading'>
                <h1 className='card-title'>Pick add-ons</h1>
                <p className='step-card-info'>Add-ons help enhance your gaming experience.</p>
            </div>
            
            <div className='addons-selector-container'>
                <div className='addon-container'>
                    <label>
                        <input type='checkbox'/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Online service</p>
                        <p className='addon-description'>Access to multiplñayer games</p>
                    </div>
                    <div>
                        <span className='addon-price'>+$1/mo</span>
                    </div>
                </div>

                <div className='addon-container'>
                    <label>
                        <input type='checkbox'/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Larger storage</p>
                        <p className='addon-description'>Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <span className='addon-price'>+$2/mo</span>
                    </div>
                </div>

                <div className='addon-container'>
                    <label>
                        <input type='checkbox'/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Customizable profile</p>
                        <p className='addon-description'>Custom theme on your profile</p>
                    </div>
                    <div>
                        <span className='addon-price'>+$2/mo</span>
                    </div>
                </div>
            </div>

            <div className='buttons-container'>
            <Link to={'/select-plan'}><button className='button-back'>Go back</button></Link>
                <Link to={'/addons'}><button className='button-next'>Next Step</button></Link>
            </div>
        </div>
    )
}
