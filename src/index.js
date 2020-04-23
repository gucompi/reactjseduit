//importar react.
// Ahora, react está en este archivo. 

import React from 'react' 
import { render } from 'react-dom'
import Saludar from  './saludar'


render(<React.Fragment> 
    {[1,2,3].map((num)=>{
         return (<Saludar num={num}/>)
    })}
    </React.Fragment>,
    document.getElementById("root")
)
