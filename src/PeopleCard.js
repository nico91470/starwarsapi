import React from 'react';
import './PeopleCard.css'

const PeopleCard = () => {
    return (
        <div class='container'>
            <div className="card">
                <h2>Luke Skymalker</h2>
                <p>1M76</p>
                <p>77 kgs</p>
            </div>
            <div className="card">
                <h2>C-3PO</h2>
                <p>1M67</p>
                <p>75 kgs</p>
            </div>
        </div>
    );
}

export default PeopleCard;