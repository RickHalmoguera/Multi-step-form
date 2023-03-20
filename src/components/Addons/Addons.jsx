import { Link } from "react-router-dom";
import { useState } from "react"
import './Addons.css'

export function Addons(props) {

    const [addons, setAddons] = useState({
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
        
    });

    const handleChange = (e) => {
    
        if (e.target.name === "online") {
            setAddons({
                
                addons:{
                    ...addons.addons,
                    online:{
                    ...addons.addons.online,
                    want: !addons.addons.online.want}
                }
                    
            });
        }else if (e.target.name === "storage") {
            
            setAddons({
                
                addons:{
                    ...addons.addons,
                    storage:{
                    ...addons.addons.storage,
                    want: !addons.addons.storage.want}
                }
            });
        }else if (e.target.name === "profile") {
            
            setAddons({
                
                addons:{
                    ...addons.addons,
                    profile:{
                    ...addons.addons.profile,
                    want: !addons.addons.profile.want}
                }
            });
        }

        
        
    };

    const handleClick = ()=>{
        props.func(addons);
    }
    return (

        <div className='step-card '>
            <div className='card-heading'>
                <h1 className='card-title'>Pick add-ons</h1>
                <p className='step-card-info'>Add-ons help enhance your gaming experience.</p>
            </div>
            
            <div className='addons-selector-container'>
                <div className='addon-container'>
                    <label>
                        <input name="online" type='checkbox'  onChange={handleChange}/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Online service</p>
                        <p className='addon-description'>Access to multiplayer games</p>
                    </div>
                    <div>
                        <span className='addon-price'>{props.yearly? '10/yr':'1/mo'}</span>
                    </div>
                </div>

                <div className='addon-container'>
                    <label>
                        <input name="storage" type='checkbox'  onChange={handleChange}/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Larger storage</p>
                        <p className='addon-description'>Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <span className='addon-price'>{props.yearly? '20/yr':'2/mo'}</span>
                    </div>
                </div>

                <div className='addon-container'>
                    <label>
                        <input name="profile" type='checkbox'  onChange={handleChange}/>
                    </label>
                    <div className='addon-info'>
                        <p className='addon-title'>Customizable profile</p>
                        <p className='addon-description'>Custom theme on your profile</p>
                    </div>
                    <div>
                        <span className='addon-price'>{props.yearly? '20/yr':'2/mo'}</span>
                    </div>
                </div>
            </div>

            <div className='buttons-container'>
                <Link to={'/select-plan'}><button className='button-back'>Go back</button></Link>
                <Link to={'/summary'}><button className='button-next' onClick={handleClick}>Next Step</button></Link>
            </div>
        </div>
    
    )
}
