import React, {Component, component} from "react"

class Greetings extends Component{
    render(){
        return (
            <div style={ {color:'red', backgroundColor: 'Yellow'}}>Greetings {this.props.name} {this.props.id} </div>
        )
    }
}

export default Greetings