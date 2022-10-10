import {React, useState}  from 'react';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {

    let [bgColor, setBgColor] = useState('light')
    
    
  return (
    <div>
        <p>Dark Mode</p>
      <Switch {...label} defaultChecked />
    </div>
  );
}
