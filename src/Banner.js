import React from 'react'
import './Banner.css';
import { Button } from "@material-ui/core";

function Banner() {
    return (
        <div className='banner'>
            <div className='banner__info'>
                <p className='banner__title'>La beauté vient de<br/> l'intérieur.. Du salon de beauté.</p>
                <h3>Réservez votre séance.</h3>
                <Button variant='outlined'>Réserver</Button>
            </div>
        </div>
    )
}

export default Banner
