import React,{Component} from 'react'

export default class Loading extends Component{
        constructor(props){
            super(props);
            this.state={
                loading:true,
                suma:0
            }
            //truquito cuando tengan problemasde scope del THIS.
            //this.cambiarLoading = this.cambiarLoading.bind(this)
        }
        cambiarLoading(){

            this.setState({loading:!this.state.loading})
            this.setState((prevState)=>{
                return {suma:prevState.suma+1}
            })
            this.setState((prevState)=>{
                return {suma:prevState.suma+1}
            })
            this.setState((prevState)=>{
                return {suma:prevState.suma+1}
            })
            this.setState((prevState)=>{
                return {suma:prevState.suma+1}
            })
            this.setState((prevState)=>{
                return {suma:prevState.suma+1}
            })
        }
    render(){
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>

                {(this.state.loading) && (<img src="./loading.gif"></img>)}
                {this.state.suma}
             <input type="submit" id="kfa" defaultValue="Ocultar" onClick={()=>{this.cambiarLoading()}}></input>
            </React.Fragment>
        )
    }
}

/*this.setState({loading:!this.state.loading}) */