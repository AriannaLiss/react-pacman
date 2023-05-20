import React, { useContext, useEffect, useMemo, useState } from 'react';
import { PacmanContext } from '../../context';
import Pacman from '../pacman/Pacman';
import './Playground.css'

const Playground = ({map, playground, setPlayground, bgColor, setGhostDoor}) => {
    const FIELDS = {
        0:'empty',
        1:'dot',
        2:'great-dot',
        3:'fruit',
        4:'pacman-place',
        5:'portal',
        '-1':'border',
        '-2':'double-border',
        '-3':'door',
        '-4':'ghost-place',
        '-11':'field-blue',
        '-12':'field-yellow',
        '-13':'field-red',
        '-14':'field-green',
        '-15':'field-pink'
    }

    const { dots, setDots } = useContext(PacmanContext)
    const [pacmanPlace, setPacmanPlace] = useState({})
    // const [ghostPlaces, setGhostPlaces] = useState([])

    const createPlayground = () => {
        fetch(map)
            .then(r => r.text())
            .then(text => {
                const pg = []
                text.split('\n').forEach((str,i) => pg[i]=str.split('\t'));
                setPlayground(pg);
            })
        }

        //TODO: document.addEventListener('keydown', checkKey);
        // createPacman();
        // createGhosts();


    const initPlayground = () => {
        let curDots = 0;
        let doorX = new Set();
        let doorY = new Set();
        setGhostDoor({x:new Set(), y:new Set()})
        playground.forEach((row,y) => row.forEach((field,x) => {
            if(field == 1 || field == 2) curDots++;
            if(field == 4) {setPacmanPlace({x,y})}
            if(field == -3){ 
                doorX.add(x); 
                doorY.add(y); 
            }
        }));
        setGhostDoor({x:doorX, y:doorY})
        setDots(curDots);
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
        if (f<-10) classes += ' ' + FIELDS[-1];
        if (isNotBorder(f)) classes += ` ${bgColor} ` + FIELDS[0];
        return classes;
        //TODO: if (FIELDS[f]=='great-dot'){
        //     span.dataset.interval = setInterval(() => toggle(span),200)
        //     field.intervals.push(span.dataset.interaval);
        // }
    }

    const isNotBorder = (f) => {
        return (f>=0 || f==-4)
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
                />
            </div>
        </div>
    );
};

export default Playground;