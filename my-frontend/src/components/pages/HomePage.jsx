import { Routes, Route, Link } from 'react-router-dom'
import Info from '../infoparts/Info'
import LoginPage from './LoginPage'
import FrontPage from './FrontPage'

const Menu = ({ user, handleLogout }) => {
    const containerStyle = {
    display: 'flex',           // horizontal row
    alignItems: 'center',      // vertical align center
    justifyContent: 'center',  // center horizontally on the page
    gap: '10px',               // space between items
    paddingTop: '20px'
    }
    const menuStyle = {
        font: 'bold 13px Arial',
        color: 'blue',
        padding: '2px 6px 2px 6px',
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        borderLeft: '1px solid black',
        borderBottom: '1px solid black'
  
    }

    return (
        <div style={containerStyle}>
            <Link style={menuStyle} to="/">etusivu</Link>
            <Link style={menuStyle} to="/ajankohtaista">ajankohtaista</Link>
            {user 
                ? <em>{user.name} kirjautunut sisään <button onClick={handleLogout}>kirjaudu ulos</button></em>
                : <Link style={menuStyle} to="/kirjautuminen">kirjaudu sisään</Link>
            }
        </div>
    )
}

const Filler = () => (  // for testing
    <div>
        <p>dafsdf</p>
    </div>
)

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


const HomePage = ({ user, handleLogin, handleLogout, username, password, setUsername, setPassword }) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Kurikan Yhteismetsä</h1>
            <Menu user={user} handleLogout={handleLogout} />
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
