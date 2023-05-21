import React, { useContext, useEffect, useRef, useState } from 'react';
import { PacmanContext } from '../../context';
import { FIELDS_NUM } from '../../context/consts';
import './Pacman.css'

const Pacman = ({startPosition, isReset,setIsReset}) => {

    const {pacmanDirection, setPacmanDirection, playground} = useContext(PacmanContext);

    const [posX, setPosX] = useState(-1);
    const [posY, setPosY] = useState(-1);
    const [isVisible, setIsVisible] = useState(false)

    const isTeleportHide = useRef(false);
    
    const pacman = () => (
        <div className={isVisible?"pacman":"pacman hide"} style={{top:posY+'rem', left: posX+'rem'}}>
            <div className="pacman-top">
                <div className="pacman-bow hide">
                    <span/><span/>
                </div>
            </div>
            <div className="pacman-bottom"/>
        </div>
    ) 

    function getHypoteticalField(x,y){
        return playground[y][x];
    }

    function teleport(){
        isTeleportHide.current = true;
        return {x:posX>0 ? 0 : playground[0].length-1,y:posY}
    }

    function isTeleport(x, direction){
        const result = (x <= 0 && direction == 'left')||(x >= playground[0].length-1 && direction == 'right');
        return result
    }

    function moveDir(direction){
        let newPos;
        switch(direction){
            case 'right': newPos = {x: posX+1, y: posY}; break;
            case 'left': newPos = {x: posX-1, y:posY}; break;
            case 'up': newPos = {x: posX, y: posY-1}; break;
            case 'down': newPos = {x: posX, y: posY+1}; break;;
        }
        const newField = getHypoteticalField(newPos.x,newPos.y);
        if (newField<FIELDS_NUM.EMPTY) newPos = {x:posX, y:posY};
        return newPos;   
    }

    function getNewPostion(direction){
        if (!direction) return {x:posX, y:posY}
        return (isTeleport(posX,direction))
            ? teleport()
            : moveDir(direction)
    }

    function hypoteticMove(){
        if (!playground.length) return {x:posX, y:posY};
        return getNewPostion(pacmanDirection);
    }
    
    useEffect(()=>{
        if (!isReset) return;
        setIsVisible(false); 
        setPosX(startPosition.x)
        setPosY(startPosition.y)
        setTimeout(()=>setIsVisible(true),200)
        setIsReset(false)
    },[startPosition])

    useEffect(()=>{ 
        if (!pacmanDirection) return;
        const newPos = hypoteticMove();
        setIsVisible(!isTeleportHide.current)
        setPosX(newPos.x)
        setPosY(newPos.y)
        setTimeout(()=>{
            isTeleportHide.current=false;
            setIsVisible(true)
        },100)
        setPacmanDirection('')
    },[pacmanDirection])

    return pacman();
};

export default Pacman;