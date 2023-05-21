import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Playground from './components/playground/Playground';
import pink from './playgrounds/pink.pg';
import square from './playgrounds/square.pg';
import google from './playgrounds/google.pg';
import './index.css'
import { PacmanContext } from './context';
import { BG_COLORS, LIGHT_COLORS} from './context/consts';

const App = () => {
    const MAP_OPTIONS = [
        {name: 'pink', value: pink},
        {name: 'square', value: square},
        {name: 'google', value: google},
    ]

    const [settings, setSettings] = useState({
        map:{
            name: 'map',
            value: MAP_OPTIONS[0].value,
            options: MAP_OPTIONS
        },
        color:{
            name: 'bgColor',
            value: BG_COLORS[0],
            options: BG_COLORS
        },
    })
    
    const [playground, setPlayground] = useState([]);
    const [dots, setDots] = useState(0);
    const [pacmanDirection, setPacmanDirection] = useState('');
    const [ghostDoor, setGhostDoor] = useState({x:[], y:[]})

    useEffect(()=>document.addEventListener('keydown', pressKey),[]);
    
    function pressKey(e) {
        if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
            setPacmanDirection(e.code.substr(5).toLowerCase());
        }
    }

    return (
        <PacmanContext.Provider value={{
            dots, setDots,
            pacmanDirection, setPacmanDirection,
            playground
        }}>
            <div className={LIGHT_COLORS.includes(settings.color.value) ? 'app light-mode '+settings.color.value : 'app dark-mode '+settings.color.value}>
                <Menu 
                    settings = {settings}
                    setSettings = {setSettings} 
                    />
                <Playground
                    map = {settings.map.value}
                    bgColor = {settings.color.value}
                    setPlayground = {setPlayground}
                    setGhostDoor = {setGhostDoor}
                    />
            </div>
        </PacmanContext.Provider>
    );
};

export default App;