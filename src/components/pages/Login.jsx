
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleError from "../sharedComponents/HandleError";
import { Eye, EyeOff } from "lucide-react";
import ErrorPopupBlueprint from "../sharedComponents/errorPopupBlueprint";
import UserContext from "../sharedComponents/userContext";
import "../../styles/login.styles.scss";

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [showError, setShowError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await loginUser({ username, password });
            localStorage.setItem('token', token);
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUser(payload)
            navigate("/")
        } catch (error) {
            HandleError(error, setErrorMsg, setShowError, "Invalid username or password", "User")
        }
    }

    return (
        <>
            <div className="login-main-container">
                <div className="login-container">
                    <h2 className="login-title">Login </h2>

                    <form onSubmit={handleSubmit}>


                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" placeholder="Username"
                            value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" />


                        <div className="login-password-wrapper">
                            <label htmlFor="password">Password: </label>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Password"
                                value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                            <span className="login-eye-icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </span>
                        </div>
                        <div className="submit-container">
                            <button type="submit">Login</button>
                        </div>
                    </form>


                </div>
            </div>



            {showError && errorMsg &&
                <ErrorPopupBlueprint
                    message={errorMsg}
                    timeOut={2}
                    onClose={() => {
                        setShowError(false);
                        setErrorMsg("");
                    }}
                />}
        </>

    );
}
export default Login;
