import React, { useContext, useEffect, useMemo, useState } from 'react';
import { PacmanContext } from '../../context';
import { FIELDS, FIELDS_NUM } from '../../context/consts';
import Pacman from '../pacman/Pacman';
import './Playground.css'

const Playground = ({map, setPlayground, bgColor, setGhostDoor}) => {

    const { dots, setDots, playground } = useContext(PacmanContext)
    const [pacmanPlace, setPacmanPlace] = useState({})
    const [isReset, setIsReset] = useState(true);

    const createPlayground = () => {
        fetch(map)
            .then(r => r.text())
            .then(text => {
                const pg = []
                text.split('\n').forEach((str,i) => pg[i]=str.split('\t'));
                setPlayground(pg);
            })
        }

    const initPlayground = () => {
        let curDots = 0;
        let doorX = new Set();
        let doorY = new Set();
        setGhostDoor({x:new Set(), y:new Set()})
        playground.forEach((row,y) => row.forEach((field,x) => {
            if(field == FIELDS_NUM.DOT || field == FIELDS_NUM.GREAT_DOT) curDots++;
            if(field == FIELDS_NUM.PACMAN_PLACE) {setPacmanPlace({x,y})}
            if(field == FIELDS_NUM.GHOST_PLACE){ 
                doorX.add(x); 
                doorY.add(y); 
            }
        }));
        setGhostDoor({x:doorX, y:doorY})
        setDots(curDots);
        setIsReset(true);
    }
    
    useMemo(createPlayground, [map])

    useEffect(initPlayground, [playground])

    function eatDot(position){
        if (playground[position.y][position.x] == 1){
            const eatenDot = getTagField(position);
            eatenDot.classList.remove('dot');
            const pg = [...playground];
            pg[position.y][position.x] = 0;
            setPlayground(pg);
            setDots(dots-1);
        }
    }

    function getTagField(position){
        return document.querySelector(`[data-x='${position.x}'][data-y='${position.y}']`);
    }

    const getPlaygroundStyle = () => {
        return {
            width: playground.length ? playground[0].length + 'rem' : 0
        }
    }

    const getFieldClasses = (f) => {
        let classes = 'field '+FIELDS[f];
        if (f < FIELDS_NUM.OTHER_BORDERS) classes += ' ' + FIELDS[FIELDS_NUM.BORDER];
        if (isNotBorder(f)) classes += ` ${bgColor} ` + FIELDS[FIELDS_NUM.EMPTY];
        return classes;
        //TODO: if (FIELDS[f]=='great-dot'){
        //     span.dataset.interval = setInterval(() => toggle(span),200)
        //     field.intervals.push(span.dataset.interaval);
        // }
    }

    const isNotBorder = (f) => {
        return (f>=FIELDS_NUM.EMPTY || f==FIELDS_NUM.GHOST_PLACE)
    }

    const renderPlayground = () => {
        if (!playground) return console.log('noPlayground');
        return playground.map((row,y) => row.map((f,x) => 
            <div 
                key = {x+'-'+y}
                className = {getFieldClasses(f)}
                data-x = {x}
                data-y = {y}
            />
        ))
    }

    return (
        <div className='play-container'>
            <div className='playground' style={getPlaygroundStyle()}>
                { useMemo(renderPlayground,[playground])}
                <Pacman
                    startPosition={{...pacmanPlace}}
                    isReset = {isReset}
                    setIsReset = {setIsReset}
                />
            </div>
        </div>
    );
};

export default Playground;