import { Link } from "react-router-dom";
import './Summary.css'

export  function Summary(props) {
            return (
<>
            <div className='step-card '>
            <div className='card-heading'>
                <h1 className='card-title'>Finishing up</h1>
                <p className='step-card-info'>Double-check everything looks OK before confirming.</p>
            </div>
            
            <div className='summary-container'>
                <div className='item-container'>
                    <div className='plan'>
                        <p>{props.profile.plan.name}</p>
                        <Link to={'/select-plan'}><button className='button-back'>Change</button></Link>
                    </div>
                    <span className="plan-price">{props.profile.plan.yearly? `$${props.profile.plan.cost}/yr`:`$${props.profile.plan.cost}/mo`}</span>
                </div>
                <hr></hr>

                {props.profile.addons.online.want? <div className='item-container'>
                    <span className="item">Online service</span>
                    <span className="item-price">{props.profile.plan.yearly? `+$${props.profile.addons.online.year}/yr`:`+$${props.profile.addons.online.month}/mo`}</span>
                </div>:''}
                {props.profile.addons.storage.want? <div className='item-container'>
                    <span className="item">Larger storage</span>
                    <span className="item-price">{props.profile.plan.yearly? `+$${props.profile.addons.online.year}/yr`:`+$${props.profile.addons.online.month}/mo`}</span>
                </div>:''}
                {props.profile.addons.profile.want? <div className='item-container'>
                    <span className="item">Customizable profile</span>
                    <span className="item-price">{props.profile.plan.yearly? `+$${props.profile.addons.online.year}/yr`:`+$${props.profile.addons.online.month}/mo`}</span>
                </div>:''}
            </div>

            <div className="total-container">
                <span className="item">Total {props.profile.plan.yearly? `(per year)`:`(per month)`}</span>
                <span className="total-price">{props.profile.plan.yearly? `+$${props.profile.addons.online.year}/yr`:`+$${props.profile.addons.online.month}/mo`}</span>
            </div>

            <div className='buttons-container'>
                <Link to={'/addons'}><button className='button-back'>Go back</button></Link>
                <Link to={'/summary'}><button className='button-next' >Confirm</button></Link>
            </div>
        </div>
        </>)
        
        
}
