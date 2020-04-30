//importar react.
// Ahora, react está en este archivo. 

import React from 'react' 
import { render } from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Saludar from  './saludar'
import Loading from  './Loading'
import Link from './Link'
import Contenedor from './contenedor'

import Navbar from './nabvar'
import Table from './table'
import Jumbotron from './jumbotron'
import Ropa from './ropa'

render(<div> 
    {/*
        [1,2,3].map((num)=>{
            return (<Link key={num} url={num} urlImage={2}></Link>)
        })}
        <Loading></Loading>
        <br/>
        <br/>
        <br/>
        <Contenedor></Contenedor>
    */}
    <Router>
        <Navbar></Navbar>


        <Switch>
            <Route exact path="/" component={Jumbotron}></Route>
            <Route path="/table" component={Table}></Route>
            <Route path="/ropa/:tipo?/:talle?" component={Ropa}></Route>
        </Switch>


        
    </Router>
</div>
,
    document.getElementById("root")
)
