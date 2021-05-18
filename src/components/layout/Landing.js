import React from 'react';
import Clock from '../application/Liveclock/Clock'
import '../../App.css'
const Landing = () => {
    return(
        <div className= 'container'>
            <div className= 'intro'>
                Welcome to my App Collection.
            </div>
            <div className= 'clock'>
            <Clock />
            </div>
        </div>
    );
}

export default Landing;