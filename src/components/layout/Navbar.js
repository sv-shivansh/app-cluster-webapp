import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className= 'logo'><Link to='/'>appCluster</Link></div>
        <nav>
            <ul className= 'nav-links'>
                <li><button><Link to = '/stopwatch'>Stopwatch</Link></button></li>
                <li><button><Link to = '/sorting-visualizer'>Sorting Visualizer</Link></button></li>
                <li><button><a href = 'https://sv-shivansh.github.io/'>About Me</a></button></li>
                {/* <li><button><Link to = "#"> More </Link></button></li>             */}
            </ul>           
        </nav>
        </header>
    )
}

export default Navbar