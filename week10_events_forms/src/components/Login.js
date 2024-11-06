import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: ' ',
            last_name: ' ',
            city: ' ',
            country: ' '
        };

        this.countries = ['Canada', 'USA', 'Mexico'];

        // Bind the methods to `this`
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        alert(`Hello World: ${e.target.name} - ${e.target.value}`);
    }

    handleSubmit = (e) => {
        e.preventDefault(); // prevent the default object value 
        console.log(this.state);
    }

    handleInput(e) {
        const { name, value } = e.target;

        // Dynamically update the state using the input name as the key
        this.setState({
            [name]: value
        }, () => {
            // Log the updated state after setState is complete
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <h2> Login </h2>
                <form onSubmit={this.handleSubmit}>
                    First Name: 
                    <input
                        type="text"
                        name="first_name"
                        onChange={this.handleInput}
                        placeholder="Enter first name"
                    /><br />

                    Last Name: 
                    <input
                        type="text"
                        name="last_name"
                        onChange={this.handleInput}
                        placeholder="Enter last name"
                    /><br />

                    Country: <select name = 'country' onChange={this.handleInput}>
                        {
                            this.countries.map((cnm)=>{
                                <option key={cnm}>{cnm}</option>
                                
                            })
                        }
                    </select> <br></br>

                    City: <select name ='city' onChange={this.handleInput}>
                        <option value = "TOR"> Toronto</option>
                        <option value = "NYC"> New York</option>
                        <option value = "MKR"> Markham</option>


                    </select><br></br>

                    <input type="submit" value="Login" />
                </form>
                
                <button name="btnSubmit" value="Submit Data" onClick={this.handleClick}>
                    Submit
                </button>

                <p>{this.state.first_name} {this.state.last_name} {this.state.city} {this.state.country} </p>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}
