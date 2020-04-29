import React,{Component} from 'react'

export default class Sumador extends Component{
        constructor(props){
            super(props);
            this.state= {
                sumar:props.sumarAlPadre
            }
        }

    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
              <input type="submit" onClick={()=>{this.state.sumar()}}/>
            </React.Fragment>
        )
    }
}
