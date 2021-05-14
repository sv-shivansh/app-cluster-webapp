import React from 'react';
import Clock from '../application/Liveclock/Clock'
import '../../App.css'
const Landing = () => {
    return(
        <div>
            <div className= 'intro'>
                Welcome to my App Collection.
            </div>
            <Clock />
        </div>
    );
}

export default Landing;