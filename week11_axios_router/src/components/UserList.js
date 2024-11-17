import React, { Component } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    getUsers = async () => {
        const userUrl = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = await axios.get(userUrl);
            this.setState({ users: response.data });
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getUsers();
    }

    submitData = async () => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                username: "admin",
                password: "pwd",
            });
            console.log("Data submitted successfully:", response.data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    render() {
        return (
            <div>
                <h3>User List</h3>
                {this.state.users.map((user) => (
                    <p key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link> 
                    </p>
                ))
                }
                <button onClick={this.submitData}>Submit</button>
            </div>
        );
    }
}
