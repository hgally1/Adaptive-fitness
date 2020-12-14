import React, { useState } from 'react';
import Calendar, { CenturyView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';





function AppointmentPanel() {

    const [dateState, setDateState] = useState(new Date())

    const changeDate = (e) => {
        setDateState(e)
    }

    return (
        
        <div style={{ fledxDirection: 'column'}}>

            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <div style={{ backgroundColor: 'rgb(63, 4, 4)'}}>
                <h2 className="center">{moment(dateState).format('MMMM Do')}</h2>
                <ul style={{color: 'white'}}>                    
                    <li>Time: 5:00 P.M.</li>
                    <li>Focus: Legs and Back</li>
                    <br></br>
                    <li><a>Document Link</a></li>
                    <br></br>
                    <button>Reschedule</button>
                </ul>
            </div> 

        </div>
              
    )
}


export default AppointmentPanel;

