import React from 'react'
import './StepIndicator.css'

export function StepIndicator() {
    return (
        <div className='step-indicator'>
            <div className='step-container'>
                    <div className='step-number-container'>
                        <span>1</span>
                    </div>
                    <div className='step-info'>
                        <span>step 1</span>
                        <strong>your info</strong>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='step-number-container'>
                        <span>2</span>
                    </div>
                    <div className='step-info'>
                        <span>step 2</span>
                        <strong>select plan</strong>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='step-number-container'>
                        <span>3</span>
                    </div>
                    <div className='step-info'>
                        <span>step 3</span>
                        <strong>add-ons</strong>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='step-number-container'>
                        <span>4</span>
                    </div>
                    <div className='step-info'>
                        <span>step 4</span>
                        <strong>summary</strong>
                    </div>
            </div>
        </div>
    )
}
