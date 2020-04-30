import React, { Component } from 'react'
import { Switch, Link ,Route} from 'react-router-dom'
import Jumbotron from './jumbotron'
import Table from './table'
export default class Ropa extends Component {
    constructor(props){
        super(props)
        console.log("Estoy construyendo la Ropa")
    }
    render() {
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>

                <div className="row row-cols-1 row-cols-md-2">
                    {console.log(this)}a
                {(this.props.match.params.tipo)&&(this.props.match.params.tipo=="jovenes")&&(
                    <div className="col mb-4">
                    <div className="card">
                        <div style={{height: '200px'}} height="card-img-top"></div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><Link to="/ropa/niños/xl">Ir a talles XL</Link></p>
                        </div>
                    </div>
                </div>
                )}
                    
                </div>
                <Switch>
                    <Route path="/ropa/niños" component={Jumbotron}></Route>
                    <Route exact path="/ropa" component={Table}></Route>
                    
                </Switch>
        
            </React.Fragment>
        )
    }
}
