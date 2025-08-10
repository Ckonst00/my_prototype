import LoginForm from "../loginparts/LoginForm"
import { useNavigate } from "react-router-dom"

const LoginPage = ({ handleLogin, username, password, setUsername, setPassword }) => {
    const navigate = useNavigate()

    const onLogin = async (event) => {
    const success = await handleLogin(event);
    if (success) {
        navigate('/'); 
    }
}

    return (
        <div>
            <LoginForm 
                handleLogin={onLogin} 
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword} />
        </div>
    )
}


export default LoginPage