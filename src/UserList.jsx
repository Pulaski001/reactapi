// src/UserList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';  // Import custom CSS for styling

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the JSONPlaceholder API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);  // Save the response data into state
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);  // Empty dependency array means this effect runs once when component mounts

    return (
        <div className="user-list-container">
            <h1 className="title">User List</h1>
            <ul className="user-list">
                {listOfUsers.map(user => (
                    <li key={user.id} className="user-card">
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-email">{user.email}</p>
                        <p className="user-phone">{user.phone}</p>
                        <p className="user-website">{user.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
