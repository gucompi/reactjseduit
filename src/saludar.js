import React,{Component} from 'react'

export default class Saludar extends Component{
        constructor(props){
            super(props);
        }

    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
                {
                    this.props.num
                }
               <p>Hola Mundo</p>
            </React.Fragment>
        )
    }
}

