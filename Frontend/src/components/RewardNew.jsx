import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Css/Reward.css';

const RewardNew = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [points, setPoints] = useState('');
    const [balance, setBalance] = useState('');

    useEffect(() => {
        fetchUsersAndBalance();
    }, []);

    const fetchUsersAndBalance = async () => {
        try {
            const usersRes = await fetch('/api/users');
            const usersData = await usersRes.json();

            const currentUser = usersData.find(user => user._id === id);
            if (currentUser) {
                setBalance(currentUser.P5balance);
            }

            setUsers(usersData.filter(user => user._id !== id));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const handlePointsChange = (event) => {
        setPoints(event.target.value);
    };

    const handleSubmit = async () => {
        if (points <= 0 || points > 100 || points > balance) {
            alert("Invalid points amount");
            return;
        }

        try {
            const res = await fetch(`/api/rewards/${id}/reward/new`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id, // Include userId in the body
                    recipientUserId: selectedUser,
                    points: Number(points)
                })
            });

            if (res.status === 200) {
                navigate(`/${id}`);
            } else {
                const data = await res.json();
                console.error(data);
                alert(data.error || "Error processing transaction");
            }
        } catch (error) {
            console.error("Error submitting transaction:", error);
            alert("Error submitting transaction");
        }
    };

    return (
        <div className='main-div'>
            <select className='select' onChange={handleUserChange} value={selectedUser}>
                <option value="" disabled>Select a user</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.name}
                    </option>
                ))}
            </select>
            {selectedUser && (
                <div>
                    <h2>You selected: {users.find(user => user._id === selectedUser)?.name}</h2>
                </div>
            )}
            <input
                className='balance'
                type='text'
                placeholder={`Current Balance: ${balance}`}
                value={points}
                onChange={handlePointsChange}
            />
            <div className='reward-btn'>
                <button className='btn cancel' onClick={() => navigate('/')}>Cancel</button>
                <button className='btn save' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default RewardNew;
