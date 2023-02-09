import React from 'react';

import { FaRegWindowMaximize } from 'react-icons/fa'; 
import { FaRegWindowMinimize } from 'react-icons/fa';

function ToggleIcons({ focused, toggleFocus }) {
    return (
        <>
            {focused ? ( <FaRegWindowMinimize className='focused' onClick={() => toggleFocus()} /> )
            : ( <FaRegWindowMaximize onClick={() => toggleFocus()} /> )
            }
        </>
    )
}

export default ToggleIcons;