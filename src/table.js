import React, { Component } from 'react'
import {connect} from 'react-redux'

class Table extends Component {
    render() {
        //Cuando llamemos esta Clase, va a ejecutar el metodo render para RENDERIZAR.
        return (
            <React.Fragment>
                {/*JSON.stringify(this.state.personas)*/}
                {JSON.stringify(this.props.personas)}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.personas.map((persona,i) => {
                            return (<tr>
                                <th scope="row">{i}</th>
                                <td>{persona.first}</td>
                                <td>{persona.last}</td>
                                <td>{persona.handle}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
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

export default connect(mapDispatchToProps)(Table)