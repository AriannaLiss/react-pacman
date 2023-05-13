import React from 'react';
import classes from './PmSelect.module.css'

const PmSelect = ({options,selectName,map,setMap}) => {
    return (
        <select className={classes.PmSelect} value={map} onChange={(e) => {
            setMap(e.target.value)
        }}>
            <option disabled>{selectName}</option>
            {options.map(option => <option key={option.name} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default PmSelect;