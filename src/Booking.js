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
            <p>En construction</p>
        </div>
    )
}

export default Booking
