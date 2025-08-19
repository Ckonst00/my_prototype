import LoginForm from "../loginparts/LoginForm"
import { useNavigate } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"

const LoginPage = ({ handleLogin, username, password, setUsername, setPassword }) => {
    const navigate = useNavigate()

    const onLogin = async (event) => {
    const success = await handleLogin(event);
    if (success) {
        navigate('/'); 
    }
}

 return (
    <div className="ui middle aligned center aligned grid" style={{ height: "100vh" }}>
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui teal image header">
          <div className="content">Log-in to your account</div>
        </h2>

        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          onLogin={onLogin}
        />
      </div>
    </div>
  )
}



export default LoginPage