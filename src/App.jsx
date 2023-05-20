import React, { useState } from 'react';
import Menu from './components/Menu';
import Playground from './components/playground/Playground';
import pink from './playgrounds/pink.pg';
import square from './playgrounds/square.pg';
import google from './playgrounds/google.pg';
import './index.css'
import { PacmanContext } from './context';

const App = () => {
    const MAP_OPTIONS = [
        {name: 'pink', value: pink},
        {name: 'square', value: square},
        {name: 'google', value: google},
    ]
    const BG_COLORS = [ 'black', 'white', 'violet', 'pink', 'magenta', 'red', 'aqua', 'grey','yellow' ] 
    const LIGHT_COLORS =[ 'white', 'aqua', 'yellow', 'pink']
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

    const [dots, setDots] = useState(0);
    const [ghostDoor, setGhostDoor] = useState({x:[], y:[]})
    const [playground, setPlayground] = useState([]);

    return (
        <PacmanContext.Provider value={{
            dots, setDots,
            ghostDoor
        }}>
            <div className={LIGHT_COLORS.includes(settings.color.value) ? 'app light-mode '+settings.color.value : 'app dark-mode '+settings.color.value}>
                <Menu 
                    settings = {settings}
                    setSettings = {setSettings} 
                    />
                <Playground
                    map = {settings.map.value}
                    bgColor = {settings.color.value}
                    playground = {playground}
                    setPlayground = {setPlayground}
                    setGhostDoor = {setGhostDoor}
                    />
            </div>
        </PacmanContext.Provider>
    );
};

export default App;