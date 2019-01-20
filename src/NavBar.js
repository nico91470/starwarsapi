import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component{
    render() {
        return (
        <div>
            <nav>
                <ul>
                    <li><a href="#people">People</a></li>
                    <li><a href="#planets">Planets</a></li>
                    <li><a href="#films">films</a></li>
                    <li><a href="#species">species</a></li>
                    <li><a href="#vehicles">vehicles</a></li>
                    <li><a href="#starships">starships</a></li>           
                </ul>
            </nav>
        </div>
        );
    }
}

export default NavBar;