import React from 'react'
import './PersonalInfo.css'

export function PersonalInfo() {
    return (
        <div className='step-card '>
            <div className='card-heading'>
                <h1>Personal info</h1>
                <p className='step-card-info'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='form'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' placeholder='e.g Stephen King'/>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' placeholder='e.g stephenking@lorem.com'/>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' placeholder='e.g +1 234 567 890'/>
            </div>
            <div className='buttons-container'>
                <button className='button-back'>Go back</button>
                <button className='button-next'>Next Step</button>
            </div>
        </div>
    )
}

