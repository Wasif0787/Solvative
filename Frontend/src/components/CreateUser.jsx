import React, { useState } from 'react'
import '../Css/View.css'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const handleUserNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleSubmit = async () => {
        try {
            const res = await fetch("api/users/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name })
            })
            const data = await res.json()
            console.log(data);
            if (res.status !== 201) {
                console.error(data);
                return (
                    <h1>Error</h1>
                );
            } else {
                navigate("/");
            }

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
            <input type="text" className='user-field' placeholder="Enter User Name" onChange={handleUserNameChange} />
            <div className='user-save'>
                <button className='save' onClick={handleSubmit}>
                    Save
                </button>
                <button className='save cancel' onClick={() => navigate("/")}>
                    Cancel
                </button>
            </div>
        </div>
    </>)
}
export default CreateUser