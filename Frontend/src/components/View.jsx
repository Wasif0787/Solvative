import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Css/View.css'

function View() {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [points, setPoints] = useState(0);
    const [rewards, setRewards] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`/api/users/${id}`);
            const userData = await response.json();

            setName(userData.name);
            setPoints(userData.P5balance);
            setRewards(userData.rewards);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const handleUserNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            const res = await fetch(`api/users/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name })
            })
            const data = await res.json()
            console.log(data);
            navigate("/");


        } catch (error) {
            return (
                <>
                    <h1>Error Creating User</h1>
                </>
            )
        }
    }

    return (<>
        <div className='main-div'>
            <input type="text" className='user-field' placeholder="Enter User Name" value={name} onChange={handleUserNameChange} />
            <div className='user-save'>
                <button className='save' onClick={handleSubmit}>
                    Save
                </button>
                <button className='save cancel' onClick={() => navigate("/")}>
                    Cancel
                </button>
            </div>
            <div className='btns'>
                <button className='p5-btn' onClick={() => navigate(`/${id}/reward/new`)}>
                    P5:{points}
                </button>
                <button className='p5-btn' onClick={() => navigate(`/${id}/reward/new`)}>
                    Rewards:{rewards}
                </button>
            </div>
        </div >
    </>)
}
export default View