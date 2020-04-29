//importar react.
// Ahora, react está en este archivo. 

import React from 'react' 
import { render } from 'react-dom'
import Saludar from  './saludar'
import Loading from  './Loading'
import Link from './Link'
import Contenedor from './contenedor'

import Navbar from './nabvar'
import Table from './table'
import Jumbotron from './jumbotron'

render(<div> 
    {/*[1,2,3].map((num)=>{
         return (<Link key={num} url={num} urlImage={2}></Link>)
    })}
    <Loading></Loading>
    <br/>
    <br/>
    <br/>
    <Contenedor></Contenedor>
*/}
<Navbar></Navbar>
<Table></Table>
<Jumbotron></Jumbotron>
</div>
,
    document.getElementById("root")
)
