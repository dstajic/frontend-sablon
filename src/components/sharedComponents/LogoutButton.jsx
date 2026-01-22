import React, { useContext } from 'react';						
import { useNavigate } from 'react-router-dom';						
import UserContext from './UserContext';						
						
const LogoutButton = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate("login");
    }
    return <button id="logout-button" onClick={handleLogout}>Logout</button>
}
export default LogoutButton;