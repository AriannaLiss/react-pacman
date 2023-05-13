import React, { useState } from 'react';
import Menu from './components/Menu';
import Playground from './components/playground/playground';
import pink from './playgrounds/pink.pg';
import square from './playgrounds/square.pg';
import google from './playgrounds/google.pg';
import './index.css'

const App = () => {
    const MAP_OPTIONS = [
        {name: 'pink', value: pink},
        {name: 'square', value: square},
        {name: 'google', value: google},
    ]
    const BG_COLORS = [
        'black', 'white', 'magenta', 'red', 'aqua', 'grey'
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

    const [playground, setPlayground] = useState([])

    return (
        <div>
            <Menu 
                settings = {settings}
                setSettings = {setSettings} 
            />
            <Playground
                map = {settings.map.value}
                bgColor = {settings.color.value}
                playground = {playground}
                setPlayground = {setPlayground}
            />
        </div>
    );
};

export default App;