import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPersona} from './actions'
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            first:'',
            last:'',
            handle:''
        }
        this.onChange2=this.onChange2.bind(this)
        this.handleForm=this.handleForm.bind(this)
    }
    
    onChange2(name){

        let value_ = name === 'image'
        ? event.target.files[0]
        : event.target.value
    
        this.setState({[name]: value_ })
    
      
    }

     handleForm(){
        console.log("handle form!")
        console.log(this)
        this.props.dispatch(addPersona(this.state))
    }
    render() {
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
                {/*JSON.stringify(this.state.personas)*/}
                {JSON.stringify(this.props.personas)}
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First</label>
                    <input onChange={()=>{this.onChange2('first')}}  className="form-control" id="first" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last</label>
                    <input onChange={()=>{this.onChange2('last')}} className="form-control" id="last" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Handle</label>
                    <input onChange={()=>{this.onChange2('handle')}}  className="form-control" id="handle" aria-describedby="emailHelp" />
                </div>
                <button type="submit" onClick={this.handleForm} className="btn btn-primary">Submit</button>
                </form>

            </React.Fragment>
        )
    }
}
/*Si tuviera muchos reducers, tendria que hacer

return {
    personas:dispatch.personaReducer
}
*/
const mapDispatchToProps = (dispatch)=>{
    console.log(dispatch)
    return {
        personas:dispatch
    }
}

export default connect(mapDispatchToProps)(Form)