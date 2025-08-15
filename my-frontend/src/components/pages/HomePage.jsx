import { Routes, Route, Link } from 'react-router-dom'
import Info from '../infoparts/Info'
import LoginPage from './LoginPage'
import FrontPage from './FrontPage'
import Navbar from '../NavBar'

const Footer = () => {
  const containerStyle = {
    background: 'grey',
    padding: '10px',
    paddingTop: '10px,',
    textAlign: 'center',
    color: 'white',
  }
  return (
    <div style={containerStyle}>
      <p>© 2025 Kurikan Yhteismetsä</p>
    </div>
  )
}

//
const HomePage = ({ user, handleLogin, handleLogout, username, password, setUsername, setPassword }) => {
    return (
        <div><Navbar user={user} handleLogout={handleLogout} />
            <Routes>
                
                <Route path="/" element={<FrontPage />} />
                <Route path="/ajankohtaista/:id" element={<Info user={user} />} />
                <Route path="/ajankohtaista" element={<Info user={user} />} />
                <Route 
                    path="/kirjautuminen" 
                    element={
                        <LoginPage 
                            handleLogin={handleLogin}
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
                        />
                    } 
                />
            </Routes>
            <Footer />
        </div>
    )
}

export default HomePage
