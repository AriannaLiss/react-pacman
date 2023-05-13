import React from 'react';
import PmSelect from './UI/pmSelect/PmSelect';

const Menu = ({options, map, setMap}) => {
    return (
        <div  className="columns">
            <div className="column">
                <PmSelect 
                    options={options}
                    selectName = 'Choose playground'
                    map={map}
                    setMap={setMap}    
                />
            </div>
        </div>
    );
};

export default Menu;

/*   const form = document.createElement('form');
    form.insertAdjacentHTML('beforeend','<p>You can adjust your game</p>');
    const flexCont = document.createElement('div');
    flexCont.classList.add('flex-container');
    const colorDiv = document.createElement('div');
    colorDiv.appendChild(createOption('red','theme_color'));
    colorDiv.appendChild(createOption('magenta','theme_color'));
    colorDiv.appendChild(createOption('black','theme_color'));
    colorDiv.appendChild(createOption('defaultColor','theme_color',true, resetColor));
    
    const selectField = document.createElement('select');
    selectField.addEventListener('change', () => {
        field.setFieldMap(selectField.value)
    });
    field.fieldMaps.forEach((fieldName,i) => {
        selectField.innerHTML += `<option value='${i}'>${fieldName}</option>`
    })
    colorDiv.appendChild(selectField);
    
    const secondDiv = document.createElement('div');
    secondDiv.appendChild(createSwithcer("genderSwitcher","genderSwitcherText",'GIRL', girlBoySwitch));
    secondDiv.appendChild(createSwithcer("speedSwitcher","speedSwitcherText",'flow', speedSwitch));
    secondDiv.appendChild(makePacmanBigBtn());
    secondDiv.appendChild(makeSuperPowerBtn());

    flexCont.appendChild(colorDiv);
    flexCont.appendChild(secondDiv);
    form.appendChild(flexCont);
    document.querySelector('body').appendChild(form);
}

const createSwithcer = (inputId, labelId, text, switchHandler) => {
    const switcher = document.createElement('div');
    switcher.classList.add('switch-container');
    const label = document.createElement('label');
    label.classList.add('switch');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = inputId;
    const span = document.createElement('span');
    span.classList.add('slider');
    span.classList.add('round');
    const labelText = document.createElement('label');
    input.addEventListener('click', switchHandler);
    label.appendChild(input);
    label.appendChild(span);
    switcher.appendChild(label);

    labelText.innerText=text;
    labelText.id = labelId;
    labelText.htmlFor= inputId;
    switcher.appendChild(labelText);
    return switcher;
}

const createOption = (id, radioGroup, checked = false,event = switchTheme) => {

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = id;
    radio.name = radioGroup;
    radio.value = id;
    radio.checked = checked;
    radio.addEventListener('click', event);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.value = id;
    label.name = radioGroup;
    label.innerText = id;
    label.classList.add(id);

    const div = document.createElement('div');
    div.appendChild(radio);
    div.appendChild(label);

    return div;
}

function makePacmanBigBtn(){
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.id = 'makeHuge';
    btn.value = 'HUGE';
    btn.addEventListener('click', changePacmanSize);
    return btn
}

function makeSuperPowerBtn(){
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.id = 'makeSuperPower';
    btn.value = 'Super';
    btn.addEventListener('click', superPacman);
    return btn
}
*/