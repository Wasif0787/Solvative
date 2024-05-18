import React from 'react'
import "../Css/Home.css"
import { useNavigate } from 'react-router-dom'
const Row = ({ id, index, name, p5, reward }) => {
    const navigate = useNavigate()
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{p5}</td>
            <td>{reward}</td>
            {/* <td> <NavLink className='login-btn' to={/${id}}>Login</NavLink > </td> */}
            <td className='login-btn' onClick={() => navigate(`/${id}`)}>Login</td>
        </tr>
    )
}

export default Row