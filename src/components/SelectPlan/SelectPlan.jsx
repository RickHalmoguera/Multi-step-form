import arcade from '../../assets/icon-arcade.svg'
import advance from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

import './SelectPlan.css'


export  function SelectPlan(props) {
    const arcadeRef = useRef();
    const advanceRef = useRef();
    const proRef = useRef();

    const [isYearly, setIsYearly] = useState(true);
    const [planData, setPlanData] = useState({
        plan:{
            name:'',
            cost:'',
            yearly: true
        }});
    


    const getPlan = (ref)=>{
        if(ref === 'arcade'){
            if(isYearly){
                setPlanData({plan:{name: 'Arcade (Yearly)', cost: 90, yearly: true}} );
            }else{
                setPlanData({plan:{name: 'Arcade (Monthly)', cost: 9, yearly: false}});
            }
            arcadeRef.current.style.background = 'hsl(217, 100%, 97%)';
            advanceRef.current.style.background = 'transparent';
            proRef.current.style.background = 'transparent';
        }else if(ref === 'advance'){
            if(isYearly){
                setPlanData({plan:{name: 'Advance (Yearly)', cost: 120, yearly: true}} );
            }else{
                setPlanData({plan:{name: 'Advance (Monthly)', cost: 12, yearly: false}});
            }
            arcadeRef.current.style.background = 'transparent';
            advanceRef.current.style.background = 'hsl(217, 100%, 97%)';
            proRef.current.style.background = 'transparent';
        }else if(ref === 'pro'){
            if(isYearly){
                setPlanData({plan:{name: 'Pro (Yearly)', cost: 150, yearly: true}} );
            }else{
                setPlanData({plan:{name: 'Pro (Monthly)', cost: 15, yearly: false}});
            }
            arcadeRef.current.style.background = 'transparent';
            advanceRef.current.style.background = 'transparent';
            proRef.current.style.background = 'hsl(217, 100%, 97%)';
        }
    }

    const checkHandler =()=>{
        setIsYearly(!isYearly);
    }

    const handleClick = (event)=>{
        if(planData.plan.name !=''){
        props.func(planData);
        }else{
            event.preventDefault();
            alert('Please select Plan');
        }
    }


    return (
        <div className='step-card '>
            <div className='card-heading'>
                <h1 className='card-title'>Select your Plan</h1>
                <p className='step-card-info'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='plan-selector-container'>
                <div className='plan-container'   onClick={()=>getPlan("arcade")} ref={arcadeRef}>
                    <img src={arcade} alt='arcade' />
                    <div className='plan-info'>
                        <p className='plan-title'>Arcade</p>
                        <p className='amount'>${isYearly? '90/yr' : '9/mo'}</p>
                        <span className='offer'>{isYearly? '2 months free' : '$108/yr Total'}</span>
                    </div>
                </div>
                <div className='plan-container' onClick={()=>getPlan("advance")} ref={advanceRef}>
                    <img src={advance} alt='advance' />
                    <div className='plan-info'>
                        <p className='plan-title'>Advanced</p>
                        <p className='amount'>${isYearly? '120/yr' : '12/mo'}</p>
                        <span className='offer'>{isYearly? '2 months free' : '$144/yr Total'}</span>
                    </div>
                </div>
                <div className='plan-container' onClick={()=>getPlan("pro")} ref={proRef}>
                    <img src={pro} alt='pro' />
                    <div className='plan-info'>
                        <p className='plan-title'>Pro</p>
                        <p className='amount'>${isYearly? '150/yr' : '15/mo'}</p>
                        <span className='offer'>{isYearly? '2 months free' : '$180/yr Total'}</span>
                    </div>
                </div>
            </div>
            <div className='payment-selector-container'>
            <span className='monthly'>Monthly</span>
            <label className="switch">
                <input type="checkbox" checked={isYearly} onChange={checkHandler}/>
                <span className="slider round"></span>
            </label>
            <span className='yearly'>Yearly</span>
            </div>
            <div className='buttons-container'>
                <Link to={'/'}><button className='button-back'>Go back</button></Link>
                <Link to={'/addons'}><button className='button-next' onClick={handleClick}>Next Step</button></Link>
            </div>
        </div>
    )
}
