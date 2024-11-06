import React from "react";
import {useRef} from 'react';


export default function SignUp() {
    var firstnameRef = useRef()
    var lastnameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            fnm: firstnameRef.current.value,
            lnm: lastnameRef.current.value

    }
    console.log(data)
    }
    return(
        <div>

            <h1> Sign Up</h1>
            <form onSubmit={handleSubmit}>
                First Name: 
                <input
                    type="text"
                    name="first_name"
                    ref ={firstnameRef}
                    placeholder="Enter first name"
                    /><br />

                Last Name: 
                <input
                    type="text"
                    name="last_name"
                    ref={lastnameRef}
                    placeholder="Enter last name"
                    /><br />

                <input type="submit" value="Sign Up" />


            </form>
        </div>
    )

}