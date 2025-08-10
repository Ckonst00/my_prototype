import { useState, useEffect } from "react"
import loginService from './services/login'
import infoService from './services/infos'
import HomePage from "./components/pages/HomePage"



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
        username, password,})
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      infoService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      return true
    } catch (error) {
      console.log('login failed')
      return false
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }


return (
  <>
    <HomePage
      user={user}
      handleLogin={handleLogin} 
      handleLogout={handleLogout}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword} />
  </>
)
}

export default App
