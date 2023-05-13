import React, { useState } from 'react';
import Menu from './components/Menu';
import Playground from './components/playground';
import pink from './playgrounds/pink.pg';
import square from './playgrounds/square.pg';
import google from './playgrounds/google.pg';

const App = () => {
    const MAP_OPTIONS = [
        {name: 'pink', value: pink},
        {name: 'square', value: square},
        {name: 'google', value: google},
    ]
    const [map, setMap] = useState(MAP_OPTIONS[0].value);
    const [playground, setPlayground] = useState([])
    return (
        <div>
            <Menu 
                options={MAP_OPTIONS}
                map={map}
                setMap={setMap}    
            />
            <Playground
                map = {map}
                playground = {playground}
                setPlayground = {setPlayground}
            />
        </div>
    );
};

export default App;