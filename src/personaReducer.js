let initState=[{
    first:'Gus',
    last:'Compi',
    handle:'@guco'
}]
function personaReducer(prevState=initState,action){
    switch(action.type){
        case 'ADD_PERSONA':
            return [
                ...prevState,
                action.payload
            ]
        default:
            return prevState
    }
}
export default personaReducer