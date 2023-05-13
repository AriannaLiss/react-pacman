import React from 'react';
import classes from './ColorTable.module.css'

const ColorTable = ({options, selectedColor, set, title}) => {
    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <div className={classes.color_table}>
                {options.map(color => 
                    <div 
                        className={color==selectedColor
                            ? classes.selected + ' ' + classes.color
                            : classes.color}
                        style={{backgroundColor:color}}
                        onClick={() => set(color)}
                    />
                )}
            </div>
        </div>
    );
};

export default ColorTable;