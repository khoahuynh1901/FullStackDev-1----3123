import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserDetails() {
    const { userid } = useParams(); // Extract `userid` from URL parameters.
    var[user,setUser] = useState([])


    const getUsers = async () => {
        const userUrl = `https://jsonplaceholder.typicode.com/users/${userid}`; // Use `userid` here.
        try {
            const response = await axios.get(userUrl);
            setUser(response.data)
            console.log(response.data); // Log user details.
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    useEffect(() => {
        // Call the `getUsers` function.
        getUsers();

        return () => {
            console.log("Cleanup after useEffect");
        };
    }, [userid]); // Add `userid` as a dependency.

    return (
        <div>
            <h2>User Details</h2>
        </div>
    );
}
