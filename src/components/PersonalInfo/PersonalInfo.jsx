import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import './PersonalInfo.css'

export function PersonalInfo(props) {
    const [personal, setPersonal] = useState("");
    
    
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const getName = () => {
        const name = { name: nameRef.current.value};
        setPersonal( personal => ({...personal, name}) );
    }

    const getEmail = () => {
        const email = { email: emailRef.current.value};
        setPersonal( personal => ({...personal, email}) );
    }

    const getPhone = () => {
        const phone = { phone: phoneRef.current.value};
        setPersonal( personal => ({...personal, phone}) );
    }

    const handleCLick = () => {
        if(personal.name && personal.email && personal.phone) {
            console.log(personal);
            props.func(personal)
        }
    }

    
    
    return (
        <div className='step-card '>
            <div className='card-heading'>
                <h1>Personal info</h1>
                <p className='step-card-info'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='form'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' placeholder='e.g Stephen King' ref={nameRef} onChange={getName}/>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' placeholder='e.g stephenking@lorem.com' ref={emailRef} onChange={getEmail}/>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' placeholder='e.g +1 234 567 890' ref={phoneRef} onChange={getPhone}/>
            </div>
            <div className='buttons-container right'>
                <Link to={'select-plan'}><button onClick={handleCLick} className='button-next'>Next Step</button></Link>
            </div>
        </div>
    )
}

