import React,{Component} from 'react'
import Image from './Image';

export default class Link extends Component{
        constructor(props){
            super(props);
            console.log("Desde Link")
            console.log(props)
        }

    render(){
        //Cuando llamemos esta Clase, Wva a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
               <a href={this.props.url}><Image urlImage={this.props.urlImage}></Image></a>
            </React.Fragment>
        )
    }
}

