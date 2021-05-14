import React, {useState} from 'react';
import './Clock.css'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setcTime] = useState(time);
    const updateTime = ()=> {
        time = new Date().toLocaleTimeString();
        setcTime(time)
    }
    setInterval(updateTime, 1000)
    return (
        <div className= 'clock'>
            {ctime}
        </div>
    );
  }

export default Clock