import React from 'react';
import classes from './ColorTable.module.css'

const ColorTable = ({options, selectedColor, set, title}) => {
    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <div className={classes.color_table}>
                {options.map(color => 
                    <div 
                        key={color}
                        className={color==selectedColor
                            ? classes.selected + ' ' + classes.color + ' ' + color
                            : classes.color + ' ' + color}
                        onClick={() => set(color)}
                    />
                )}
            </div>
        </div>
    );
};

export default ColorTable;