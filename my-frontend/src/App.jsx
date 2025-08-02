import { useState, useEffect } from "react"
import Info from "./components/infoparts/Info"
import LoginForm from "./components/loginparts/LoginForm"
import loginService from './services/login'
import infoService from './services/infos'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {    
    const loggedUserJSON = window.localStorage.getItem('loggedUser')    
    if (loggedUserJSON) {      
      const user = JSON.parse(loggedUserJSON)      
      setUser(user)     
      infoService.setToken(user.token)    
    }  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      infoService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('login failed')
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }

return (
  <>
    {user === null ? (
      <>
        <LoginForm 
          handleLogin={handleLogin} 
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword} 
        />
        <Info user={user}/>
      </>
    ) : (
      <>
        <p>
          {user.name} kirjautunut sisään 
          <button onClick={handleLogout}>kirjaudu ulos</button>
        </p>
        <Info user={user}/>
      </>
    )}
  </>
)
}

export default App
