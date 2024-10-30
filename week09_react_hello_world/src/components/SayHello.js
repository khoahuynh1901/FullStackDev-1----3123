function SayHello({fname, lname}){
    // const name = "Khoa Huynh"
    const myStyle = {
        color : 'red',
        backgroundColor: 'yellow'
    }
    return (
        <h1 style={myStyle}> Hello {fname} {lname} </h1>
        // <h1>Hello {props.fname} {props.lname} </h1>
    )
}
//Learning props and state in react
export default SayHello;