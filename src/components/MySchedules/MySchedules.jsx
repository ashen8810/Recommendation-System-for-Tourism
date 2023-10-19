import React from "react";
import content from './schedules'
import './MySchedules.css'

const MySchedules = (props) => {
    return(
    <div className="container">    
    <div key={props.id} className='schedules'>
        <div className='schedule-content'>
            <div className='tick-Nicon'>
                <span className="material-symbols-outlined">
                    select_check_box
                </span>
            </div>
            <div className='content-text'>
                <h3 className='schedule-name'>{props.name}</h3>
                <p className='schdule-description'>{props.description}</p>
            </div>
        </div>
    </div>
    </div>
    )
        

}

export default MySchedules