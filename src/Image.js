import React,{Component} from 'react'

export default class Image extends Component{
        constructor(props){
            super(props);
            
            console.log("Desde Image")
            console.log(props)
        }

    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
              <img src={this.props.urlImage}></img>
            </React.Fragment>
        )
    }
}

