import React from 'react';
import'../App.css';
import { Button } from './Button';
import "../HeroSection.css"

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/video/Video2.mp4" autoPlay loop muted/>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle="btn--outline"
            buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle="btn--primary"
            buttonSize='btn--large'>Watch TRAILER<i className="far fa-play-circle"/></Button>
        </div>      
    </div>
  );
}

export default HeroSection;
