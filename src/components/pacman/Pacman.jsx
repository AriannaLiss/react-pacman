import React, { useEffect, useState } from 'react';
import './Pacman.css'

const Pacman = ({startPosition}) => {

    const [posX, setPosX] = useState(15);
    const [posY, setPosY] = useState(20);

    const pacman = () => (
        <div className="pacman"  style={{ top:posY+'rem', left: posX+'rem'}}>
            <div className="pacman-top">
                <div className="pacman-bow hide">
                    <span/><span/>
                </div>
            </div>
            <div className="pacman-bottom"/>
        </div>
    ) 
    
    useEffect(()=>{
        setPosX(startPosition.x)
        setPosY(startPosition.y)
        console.log(posX,posY)
    },[startPosition])

    return pacman();
};

export default Pacman;