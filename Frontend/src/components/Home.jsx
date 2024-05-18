import React, { useState, useEffect } from 'react';
import "../Css/Home.css";
import Row from "./HomeRow.jsx";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>P5</th>
                        <th>Reward</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Row key={user._id} id={user._id} index={index + 1} name={user.name} p5={user.P5balance} reward={user.rewards} />
                    ))}
                </tbody>
            </table>
            <NavLink to={`/new`}>
                <IoMdAddCircle className='add' />
            </NavLink>
        </div>
    );
};

export default Home;
