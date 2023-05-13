import React from 'react';
import classes from './PmSelect.module.css'

const PmSelect = ({options, title, map, set}) => {
    return (
        <select className={classes.PmSelect} value={map} onChange={(e) => {
            set(e.target.value)
        }}>
            <option disabled>{title}</option>
            {options.map(option => <option key={option.name} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default PmSelect;