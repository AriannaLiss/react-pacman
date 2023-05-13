import React, { useMemo, useState } from 'react';
import './playground.css'

const Playground = ({map, playground, setPlayground, bgColor}) => {
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
        '-15':'field-pink',
    }
    
    const LIGHT_COLORS =[
        'white', 'aqua'
    ]

    const createPlayground = () => {
        console.log('createPlayground')
        fetch(map)
            .then(r => r.text())
            .then(text => {
                const pg = []
                text.split('\n').forEach((str,i) => pg[i]=str.split('\t'));
                setPlayground(pg)
            })
        }
            // field.init(pg);
            // document.addEventListener('keydown', checkKey);
            // createPacman();
            // createGhosts();

    useMemo(createPlayground, [map])

    const getPlaygroundStyle = () => {
        return {
            width: playground.length ? playground[0].length + 'rem' : 0,
            backgroundColor: bgColor
        }
    }

    const getFieldClasses = (f) => {
        let classes = 'field '+FIELDS[f];
        if (f<-10) classes += ' ' + FIELDS[-1];
        if (isNotBorder(f)) classes += ` ${bgColor} ` + FIELDS[0];
        return classes;
        // if (FIELDS[f]=='great-dot'){
        //     span.dataset.interval = setInterval(() => toggle(span),200)
        //     field.intervals.push(span.dataset.interaval);
        // }
    }

    const getPlaygroundClasses = () => {
        return LIGHT_COLORS.includes(bgColor) ? 'playground light-mode' : 'playground';
    }

    const isNotBorder = (f) => {
        return (f>=0 || f==-4)
    }

    return (
        <div className={getPlaygroundClasses()} style={getPlaygroundStyle()}>
            {
                playground ? playground.map((row,y) =>
                    row.map((f,x) => 
                        <div 
                            key = {x+'-'+y}
                            className = {getFieldClasses(f)}
                            data-x = {x}
                            data-y = {y}
                            // style={{backgroundColor:bgColor}}
                        />
                ))
                : console.log('noPlayground')
            }
        </div>
    );
};

export default Playground;