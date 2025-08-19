import { useState, useEffect } from "react"
import loginService from './services/login'
import infoService from './services/infos'
import MasterPage from "./components/pages/MasterPage"



function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [infos, setInfos] = useState([])  //Get all the infos

  useEffect(() => {
    infoService.getAll().then(infos => setInfos(infos)
    )
  }, [])
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

  const handleDelete = async (id, title, content) => {
    if (window.confirm(`Haluatko varmasti poistaa: ${title}\n${content}`)) {
      await infoService.remove(id)
      setInfos(infos.filter(info => info.id !== id))
    }
  }

return (
  <>
    <MasterPage
      user={user}
      handleLogin={handleLogin} 
      handleLogout={handleLogout}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      infos={infos}
      setInfos={setInfos}
      handleDelete={handleDelete} />
  </>
)
}

export default App
