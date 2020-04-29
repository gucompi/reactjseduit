import React,{Component} from 'react'
import Sumador from './sumador';

export default class Contenedor extends Component{
        constructor(props){
            super(props);
            this.state= {
                sum:0
            }
            this.sumarUno = this.sumarUno.bind(this)
        }
        sumarUno(){
            this.setState(prevState=>{
             return {sum:prevState.sum+1}   
            })
        }
    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
                La suma hasta ahora da:
                {this.state.sum}
                <br/>
              <Sumador sumarAlPadre={this.sumarUno}></Sumador>
              <br/>
              <Sumador sumarAlPadre={this.sumarUno}></Sumador>
              <br/>
              <Sumador sumarAlPadre={this.sumarUno}></Sumador>
            </React.Fragment>
        )
    }
}

