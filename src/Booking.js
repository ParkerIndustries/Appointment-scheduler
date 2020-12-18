import React, { useState, useEffect } from 'react';
import './Booking.css';

function Booking() {
    const [addrtype, setAddrType] = useState('Home');

    function handleAddrTypeChange(e) {
        var id = e.target.selectedIndex; 
        setAddrType(e.target[id].text); 
        console.log(addrtype);
    }

    return (
        <div className='booking'>
            <h1>Réservation</h1>
            <div>
                <select
                    defaultValue={addrtype}
                    onChange={handleAddrTypeChange}
                    className="browser-default custom-select">
                    <option value="1">Home</option>
                    <option value="2">Marketing</option>
                    <option value="3">Work</option>
                    <option value="3">Head Office</option>
                </select>
            </div>
        </div>
    )
}

export default Booking
