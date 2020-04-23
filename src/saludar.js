import React,{Component} from 'react'

export default class Saludar extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre:(props.num>1?'Gustavo':'Raul'),
            random:Math.random()
        }
    }

    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
                <div> Hola Mundo!!!!!!!!!</div>
                {this.props.num}
                {this.state.nombre}
                <br></br>
                {this.state.random}
                <br></br>
                <input type="text" ></input>
            </React.Fragment>
        )
    }
}

