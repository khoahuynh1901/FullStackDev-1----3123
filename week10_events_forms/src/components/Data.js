import React, { Component } from 'react';

export default class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            "address 1": '',
            "address 2": '',
            provinces: '',
            city: '',
        };

        this.provinces= ['ON', 'AB', 'BC', "NB", "MB"];

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        alert(`Hello World: ${e.target.name} - ${e.target.value}`);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    }

    render() {
        return (
            <div style={styles.container}>
                <form onSubmit={this.handleSubmit} style={styles.form}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleInput}
                        placeholder="Enter your email"
                        style={styles.input}
                    />

                    <label style={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleInput}
                        placeholder="Enter your full name"
                        style={styles.input}
                    />

                    <label style={styles.label}>Address 1:</label>
                    <input
                        type="text"
                        name="address 1"
                        onChange={this.handleInput}
                        placeholder="1234 Main Street"
                        style={styles.input}
                    />

                    <label style={styles.label}>Address 2:</label>
                    <input
                        type="text"
                        name="address 2"
                        onChange={this.handleInput}
                        placeholder="Apartment, studio, suite..."
                        style={styles.input}
                    />

                    <label style={styles.label}>Provinces:</label>
                    <select name="provinces" onChange={this.handleInput} style={styles.select}>
                        <option value="">Select Province</option>
                        {this.provinces.map((cnm) => (
                            <option key={cnm} value={cnm}>{cnm}</option>
                        ))}
                    </select>

                    <label style={styles.label}>City:</label>
                    <select name="city" onChange={this.handleInput} style={styles.select}>
                        <option value="TOR">Toronto</option>
                        <option value="NYC">New York</option>
                        <option value="MKR">Markham</option>
                    </select>

                    <input type="submit" value="Login" style={styles.button} />
                </form>

                <button name="btnSubmit" value="Submit Data" onClick={this.handleClick} style={styles.button}>
                    Submit
                </button>

                <p>{this.state.first_name} {this.state.last_name} {this.state.city} {this.state.country}</p>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}
//using inlince css to make it look more better
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        marginTop: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        marginBottom: '15px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    select: {
        marginBottom: '15px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};
